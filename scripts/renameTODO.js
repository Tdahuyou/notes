/**
 * 根据编号，更新 TODO.md 中对应编号的名称。
 */
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

const config = require('./config.json');
const args = minimist(process.argv.slice(2));

const REPO_URL = `https://github.com/${config.github_username}/${args.repoName}/tree/main`;
const IGNORE_DIRS = config.ignore_dirs;
const BASE_DIR = path.resolve(__dirname, '..', '..', args.repoName);
console.log('BASE_DIR =>', BASE_DIR);
// BASE_DIR => c:\Users\Tdahuyou\Desktop\notes\{args.repoName}
const TODO_FILE_PATH = path.resolve(BASE_DIR, 'TODO.md');

const DIR_MAP = {};

// 用于跟踪 TODO.md 中出现的4位数字
const todoNumbers = new Set();

// 用于跟踪 DIR_MAP 中未被匹配到的4位数字
const unmatchedDirNumbers = new Set();

function getDirList(base_path) {
  const dir_name_list = fs.readdirSync(base_path);
  for (let dir_name of dir_name_list) {
    if (IGNORE_DIRS.includes(dir_name)) continue;
    const file_path = path.join(base_path, dir_name);
    const stats = fs.lstatSync(file_path);

    if (stats.isDirectory()) {
      // 获取目录编号和完整目录名称
      const dir_num = dir_name.slice(0, 4); // 取前4个字符作为编号
      DIR_MAP[dir_num] = `[${dir_name}](${REPO_URL}/${encodeURIComponent(
        dir_name
      )}/README.md) <!-- [locale](./${encodeURIComponent(
        dir_name
      )}/README.md) -->`;
      // !NOTE 标题采用 github 绝对路径，以便生成的 .md 搬运到 https://tdahuyou.github.io/notes/ 中。
      // !NOTE 加上本地绝对路径，以便在本地编辑时快速跳转。并且这部分信息属于注释，并不会渲染到页面上。
      unmatchedDirNumbers.add(dir_num); // 初始化未匹配集合
    }
  }
}

getDirList(BASE_DIR);
// console.log(DIR_MAP);

// 读取 TODO.md 内容
const todo_contents = fs.readFileSync(
  path.resolve(BASE_DIR, 'TODO.md'),
  'utf8'
);
const todo_lines = todo_contents.split('\n');

// 更新 TODO.md 中的条目
for (const key in DIR_MAP) {
  const value = DIR_MAP[key];
  todo_lines.forEach((line, index) => {
    let newLine = line;

    // 匹配主项或子项
    const match = line.match(/(\s*-\s*\[\s*x?\s*\]\s*)(\[?)(\d{4})(.*)/);
    if (match && match[3] === key) {
      // 替换匹配到的行，并去掉数字后的所有文本
      newLine = `${match[1]}${value}`;
      // 从未匹配集合中移除已匹配的编号
      unmatchedDirNumbers.delete(key);
    }

    if (newLine !== line) {
      todo_lines[index] = newLine;
    }
  });
}

// 记录 TODO.md 中存在的4位数字
todo_lines.forEach((line) => {
  const match = line.match(/(\s*-\s*\[\s*x?\s*\]\s*)(\d{4})(.*)/);
  if (match) {
    const number = match[2];
    todoNumbers.add(number);
  }
});

// 打印日志
for (const number of todoNumbers) {
  if (!DIR_MAP[number]) {
    console.log(`${number} - 笔记编号不存在`);
  }
}

if (unmatchedDirNumbers.size > 0) {
  console.log(unmatchedDirNumbers, `- 笔记未分组`);
}

const updatedTodoContents = todo_lines.join('\n');
fs.writeFileSync(TODO_FILE_PATH, updatedTodoContents, 'utf8');
console.log(`${TODO_FILE_PATH} updated successfully.`);
