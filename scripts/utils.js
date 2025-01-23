import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

async function runCommand(command, dir) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: dir }, (error, stdout, stderr) => {
      if (error) {
        console.error(`处理 ${dir} 时出错：${stderr}`);
        reject(error);
      } else {
        // console.log(stdout.trim());
        resolve(stdout.trim());
      }
    });
  });
}

/**
 * 同步本地和远程仓库
 * @param {String} dir 需要同步的笔记仓库路径
 */
async function syncLocalAndRemote(dir) {
  try {
    // 1. 在当前 dir 中执行 git pull
    await runCommand("git pull --verbose", dir);

    // 2. 在当前 dir 中执行 git status 来检查是否有未提交的更改
    const statusOutput = await runCommand("git status --porcelain", dir);
    // console.log('statusOutput', statusOutput, 'dir', dir);
    if (!statusOutput) {
      // console.log(`${dir} 没有未提交的更改，跳过提交和推送`);
      return;
    }

    // 3. 在当前 dir 中执行 git add .
    await runCommand("git add .", dir);

    // 4. 在当前 dir 中执行 git commit -m "update"
    await runCommand('git commit -m "update"', dir);

    // 5. 在当前 dir 中执行 git push
    await runCommand("git push", dir);

    const url = await runCommand("git remote -v", dir);

    // 6. 打印 "同步完成"
    console.log(`✅ 笔记同步完成 ${url.match(/https:\/\/[^\s]+/)[0]}`);
  } catch (error) {
    // 7. 如果某个步骤有错误，则打印错误信息
    console.error(`处理 ${dir} 时出错：${error.message}`);
  }
}

async function initPkg(baseDir, repoName) {
  // 检查 package.json 是否存在
  const pkgPath = path.resolve(baseDir, "package.json");
  if (fs.existsSync(pkgPath)) {
    try {
      const pkgContent = fs.readFileSync(pkgPath, { encoding: "utf8" });
      let pkg = JSON.parse(pkgContent);
      pkg = sortObjectKeys(pkg);
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
      return pkg;
    } catch (error) {
      console.error(`❌ Error reading or parsing package.json: ${error.message}`);
      return {};
    }
  }

  // 将默认配置写入 package.json
  const defaultPkg = {
      "scripts": {
          "sync": `            node ./node_modules/tnotes   --syncREADME          --repoName=${repoName}`,
          "update": `          node ./node_modules/tnotes   --updateREADME        --repoName=${repoName}`,
          "merge": `           node ./node_modules/tnotes   --mergeREADME         --repoName=${repoName}`,
          "distribute": `      node ./node_modules/tnotes   --distributeREADME    --repoName=${repoName}`,
          "docs:publish": `    node ./node_modules/tnotes/scripts/docs-publish.js`
      },
      "tnotesConfig": {
        "dirList": {}
      }
  };
  fs.writeFileSync(pkgPath, JSON.stringify(defaultPkg, null, 2));
  await runCommand("npm link tnotes", baseDir); // 链接 tnotes 库到当前笔记目录
  return defaultPkg;
}

function sortObjectKeys(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  if (Array.isArray(obj)) return obj.map(sortObjectKeys);

  const sortedKeys = Object.keys(obj).sort();
  const sortedObj = {};
  for (const key of sortedKeys) sortedObj[key] = sortObjectKeys(obj[key]);

  return sortedObj;
}

function parseTnotesConfig(pkg) {
  const dirListEntries = Object.entries(pkg.tnotesConfig.dirList || {});
  const ignoreDirs = dirListEntries.map(([ID, config]) => config.ignore ? ID : '').filter(id => !!id);
  const doneNoteIds = dirListEntries.map(([ID, config]) => config.done ? ID : '').filter(id => !!id);
  const bilibiliMap = dirListEntries.map(([ID, config]) => {
    if (config.bilibili && config.bilibili.length > 0) {
      return { id: ID, bilibili: config.bilibili }
    } else {
      return null;
    }
  }).filter(item => !!item);

  return {
    ignoreDirs,
    doneNoteIds,
    bilibiliMap
  }
}

export {
    syncLocalAndRemote,
    initPkg,
    parseTnotesConfig
};