const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = ['.vscode'];
const BASE_DIR = path.resolve(__dirname, '..', '..'); // 假设脚本位于所有项目的父目录中

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

async function pullAddPush(dir) {
  try {
    // 1. 在当前 dir 中执行 git pull
    await runCommand('git pull --verbose', dir);

    // 2. 在当前 dir 中执行 git status 来检查是否有未提交的更改
    const statusOutput = await runCommand('git status --porcelain', dir);
    if (!statusOutput) {
      // console.log(`${dir} 没有未提交的更改，跳过提交和推送`);
      return;
    }

    // 3. 在当前 dir 中执行 git add .
    await runCommand('git add .', dir);

    // 4. 在当前 dir 中执行 git commit -m "update"
    await runCommand('git commit -m "update"', dir);

    // 5. 在当前 dir 中执行 git push
    await runCommand('git push', dir);

    // 6. 打印 "同步完成"
    console.log(`${dir} 同步完成`);
  } catch (error) {
    // 7. 如果某个步骤有错误，则打印错误信息
    console.error(`处理 ${dir} 时出错：${error.message}`);
  }
}

async function synchronizeRepositories() {
  fs.readdir(BASE_DIR, { withFileTypes: true }, async (err, entries) => {
    if (err) {
      return console.error(`读取目录 ${BASE_DIR} 失败：${err.message}`);
    }

    const dirPromises = entries
      .filter(dirent => dirent.isDirectory() && !IGNORE_DIRS.includes(dirent.name))
      .map(dirent => path.join(BASE_DIR, dirent.name))
      .filter(dirPath => fs.existsSync(path.join(dirPath, '.git')))
      .map(pullAddPush);

    await Promise.all(dirPromises);
    console.log("所有仓库同步完成。");
  });
}

synchronizeRepositories();