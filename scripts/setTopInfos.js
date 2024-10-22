/**
 * 跟 getTopInfos.js 配合工作
 * 1. 先执行 getTopInfos.js 生成 TOP_INFOS.md 文件
 * 2. 在 TOP_INFOS.md 文件中统一处理所有 README.md 文件的头部信息
 * 3. 再执行 updateTopInfos.js 批量更新所有 README.md 文件
 */
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

const config = require('./config.json');
const args = minimist(process.argv.slice(2));
// const { EOL } = require('os');

const EOL = '\n';
const SEPERATOR = `${EOL}<!-- ====================>分隔符<==================== -->${EOL}`; // getTopInfos.js 跟 setTopInfos.js 保持一致
const SEPARATOR_LEVEL_2 = '## '; // !NOTE 这是二级标题的前缀 这个前缀在头部信息中不允许出现
const BASE_DIR = path.resolve(__dirname, '..', '..', args.repoName);
const TOP_INFOS_FILE_PATH = path.resolve(BASE_DIR, 'TOP_INFOS.md');
console.log('BASE_DIR =>', BASE_DIR);
// BASE_DIR => c:\Users\Tdahuyou\Desktop\notes\{args.repoName}

// 读取 TOP_INFOS.md 文件内容
const TOP_INFOS_CONTENT = fs.readFileSync(TOP_INFOS_FILE_PATH, 'utf8');
const TOP_INFOS_SECTIONS = TOP_INFOS_CONTENT.split(SEPERATOR); // 按照分隔符切割为多个部分

// console.log('TOP_INFOS_SECTIONS =>', TOP_INFOS_SECTIONS);

// 解析每个部分并更新对应的 README.md 文件
TOP_INFOS_SECTIONS.forEach((section) => {
  // console.log('section =>', section);
  if (section.trim() === '' || section === EOL) return; // 跳过空的部分

  const lines = section.split(EOL);
  const titleLine = lines[0];
  const linkMatch = titleLine.match(/\[(.*?)\]\((.*?)\)/);
  if (!linkMatch) {
    console.error(`Invalid section: ${titleLine}`);
    return;
  }

  const readmePath = path.resolve(BASE_DIR, linkMatch[1], 'README.md');
  // console.log(linkMatch[1], readmePath)
  // linkMatch[1] 是笔记的标题，也是谋篇笔记所属的目录的名称。

  // 读取当前 README.md 内容
  let readmeContent = '';
  try {
    readmeContent = fs.readFileSync(readmePath, 'utf8');
  } catch (err) {
    console.error(`Failed to read ${readmePath}:`, err);
    return;
  }

  // 查找第一个二级标题的位置
  const linesInReadme = readmeContent.split(EOL);
  let firstHeading2Index = -1;
  for (let i = 1; i < linesInReadme.length; i++) {
    if (linesInReadme[i].startsWith(SEPARATOR_LEVEL_2)) {
      firstHeading2Index = i;
      break;
    }
  }

  // 构建新的 README.md 内容
  const newTopInfoLines = lines.slice(1).filter((line) => line.trim() !== '');

  // 更新 README.md 文件
  let updatedReadmeContent = '';
  if (firstHeading2Index > 0) {
    updatedReadmeContent = [
      linesInReadme[0], // 第一行标题保持不变
      '',
      ...newTopInfoLines, // 更新头部信息
      '',
      ...linesInReadme.slice(firstHeading2Index), // 其它信息保持不变
    ].join(EOL);
  } else {
    updatedReadmeContent = [
      linesInReadme[0],
      '',
      ...newTopInfoLines,
      '',
    ].join(EOL);
  }

  // 写入更新后的内容
  try {
    fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');
    // console.log(`"${encodeURIComponent(readmePath)}" updated successfully.`);
  } catch (err) {
    console.error(`"${encodeURIComponent(readmePath)}" failed to write:`, err);
  }
});

console.log('All README.md files have been updated.');
