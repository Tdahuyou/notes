/**
 * - 更新 home README 目录
 * - 更新 note README 目录
 * - 目录编号自动更新
 * - 读取笔记头部信息，更新 home README
 * - 自动将 home README 推送到 TNotes 中
 */
import fs from 'fs';
import path from 'path';
// import notesmeta from './.notesmeta.json' assert { type: 'json' }; // !ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
import GithubSlugger from 'github-slugger';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const notesmeta = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.notesmeta.json'), 'utf-8'));

const slugger = new GithubSlugger();

class ReadmeUpdater {
  constructor({repoName, baseDir, ignoreDirs, doneNoteIds}) {
    this.repoName = repoName;
    this.baseDir = baseDir;
    // fs.readdirSync(path.resolve(this.baseDir, 'notes.mata.json'), { encoding: 'utf8' });
    
    this.githubUsername = "Tdahuyou";
    this.ignoreDirs = ignoreDirs || [];
    this.doneNoteIds = doneNoteIds || [];
    this.repoUrl = `https://github.com/${this.githubUsername}/${repoName}/tree/main`;
    this.repoBolbUrl = `https://raw.githubusercontent.com/${this.githubUsername}/${repoName}/main`; // for renderer img

    this.notes = {
      map: {}, // key 是笔记 ID，值是笔记的头部信息。
      ids: new Set(), // 笔记目录中存在的笔记的 id 列表。
      dirNameList: this.getNoteDirNameList(), // 需要处理的笔记目录名称列表。
    };

    this.vitepressDocPath = path.normalize(path.resolve(__dirname, "..", "docs", "src", 'notes', `${this.repoName}.md`)),

    this.homeReadme = {
      path: path.normalize(path.resolve(this.baseDir, "README.md")),
      contents: "",
      lines: [],
      noteTitleReg: /(\s*-\s*\[\s*x?\s*\]\s*)(\[?)(\d{4})(.*)/,
      ids: new Set(), // 存在于 Home Readme 中的笔记 id 集合。
    };

    this.toc = {
      startTag: "<!-- region:toc -->",
      endTag: "<!-- endregion:toc -->",
    };

    this.EOL = "\n";
  }



  /**
   * 获取笔记目录列表
   * 笔记目录的判定逻辑 - 确保是目录，并且目录名称开头的 4 个字符是数字。
   * @returns {Array} 笔记目录列表
   */
  getNoteDirNameList() {
    const noteDirList = [];
    const dirNameList = fs.readdirSync(this.baseDir);

    for (let dirName of dirNameList) {
      if (this.ignoreDirs.includes(dirName)) continue;
      const dirPath = path.join(this.baseDir, dirName);
      const stats = fs.lstatSync(dirPath);
      if (stats.isDirectory() && dirName.match(/^\d{4}/))
        noteDirList.push(dirName);
    }

    return noteDirList;
  }

  /**
   * 解析笔记目录下的 README.md 文件
   * - 更新笔记标题。
   * - 更新笔记目录。
   * - 提取笔记的头部信息（也就是目录）。
   * - 将头部信息中的静态资源（比如图片）的路径或者锚点修改为 GitHub 上对应的绝对路径，确保在 home readme 中点击链接能够正常跳转。
   */
  parseNoteContent() {
    const SEPARATOR_LEVEL_2 = "## ";
    for (let noteDirName of this.notes.dirNameList) {
      const notePath = path.resolve(this.baseDir, noteDirName, "README.md");
      const noteTitle = `# [${noteDirName}](${this.repoUrl}/${encodeURIComponent(noteDirName)})`;
      if (!fs.existsSync(notePath)) {
        fs.writeFileSync(notePath, this.genDefaultNoteTemp(noteTitle), "utf8");
      };
      const lines = fs.readFileSync(notePath, "utf8").split(this.EOL);

      // 更新笔记标题。
      lines[0] = noteTitle;

      // 更新笔记目录。
      this.updateToc(lines);
      fs.writeFileSync(notePath, lines.join(this.EOL), "utf8");

      let firstHeading2Index = -1;
      for (let i = 1; i < lines.length; i++) {
        if (lines[i].startsWith(SEPARATOR_LEVEL_2)) {
          firstHeading2Index = i;
          break;
        }
      }
      let topInfoLines =
        firstHeading2Index > 0
          ? lines.slice(1, firstHeading2Index)
          : lines.slice(1);

      topInfoLines = topInfoLines.map((line) => {
        return line.replace(/!?\[(.*?)\]\((.*?)\)/g, (match, p1, p2) => {
          // 检查路径是否以 https:// 或者 http:// 开头
          if (/^https?:\/\//.test(p2)) {
            // 外部链接
            return match;
          } else if (/^#.?/.test(p2)) {
            // anchor
            return `[${p1}](${this.repoUrl}/${encodeURIComponent(
              noteDirName
            )}/README.md${p2})`;
          } else {
            // 判断是否是图片引用
            const isImage = match.startsWith("![");
            const prefix = isImage ? "![" : "[";
            const suffix = isImage ? "]" : "]";
            const baseUrl = isImage ? this.repoBolbUrl : this.repoUrl;
            return `${prefix}${p1}${suffix}(${baseUrl}/${encodeURIComponent(
              noteDirName
            )}/${encodeURIComponent(p2)})`;
          }
        });
      });

      // 每一行增加俩空格的缩进
      topInfoLines = topInfoLines.map((line) => `  ${line}`);
      // 删除 toc startTag 和 endTag
      topInfoLines = topInfoLines.filter(
        (line) => !line.includes(this.toc.startTag) && !line.includes(this.toc.endTag)
      );
      // console.log('topInfoLines:', topInfoLines);

      // 获取目录编号和完整目录名称
      const noteID = noteDirName.slice(0, 4); // 取前 4 个字符作为笔记 ID
      this.notes.map[noteID] = `[${noteDirName}](${
        this.repoUrl
      }/${encodeURIComponent(
        noteDirName
      )}/README.md) <!-- [locale](./${encodeURIComponent(
        noteDirName
      )}/README.md) -->${topInfoLines.join(this.EOL)}${this.EOL}`;
      this.notes.ids.add(noteID); // 初始化未匹配集合
    }
  }

  /**
   * 当某篇笔记目录下没有 README.md 文件时，按照模板构建一个默认的 README.md 文件。
   * @param {string} noteTitle 笔记标题行
   * @returns 构建的默认笔记模板
   */
  genDefaultNoteTemp(noteTitle) {
    return `${noteTitle}${this.EOL}${this.EOL}${this.toc.startTag}${this.EOL}${this.EOL}${this.toc.endTag}${this.EOL}${this.EOL}## ⏰`;
  }

  removeHomeTopInfos() {
    const lines = this.homeReadme.contents.split(this.EOL);
    let result = [];

    let deleteMode = false;

    const headers = ["# ", "## ", "### ", "#### ", "##### ", "###### "];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.match(this.homeReadme.noteTitleReg)) {
        // 遇到笔记标题，进入删除模式。
        deleteMode = true;
        result.push(line);
        continue;
      }

      if (headers.some((header) => line.startsWith(header))) {
        // 遇到非笔记标题，停止删除。
        deleteMode = false;
        result.push(line);
        continue;
      }

      if (!deleteMode) result.push(line);
    }

    return result;
  }

  setHomeTopInfos() {
    // console.log('this.notes.map:', this.notes.map);
    this.homeReadme.lines.forEach((line, index) => {
      const match = line.match(this.homeReadme.noteTitleReg);
      if (match) {
        const noteID = match[3];
        this.homeReadme.ids.add(noteID);
        if (noteID in this.notes.map) {
          let prefixSymbol = match[1];
          if (this.doneNoteIds.includes(noteID)) {
            prefixSymbol = prefixSymbol.replace('[ ]', '[x]');
          } else {
            prefixSymbol = prefixSymbol.replace('[x]', '[ ]');
          }
          this.homeReadme.lines[index] = `${prefixSymbol}${this.notes.map[noteID]}`;
        }
      }
    });
  }

  /**
   * 打印不存在的笔记 ID
   * 存在于首页 README 中的笔记 ID 但是不存在与实际仓库中的笔记 ID。
   */
  printMissingNotes() {
    const missingNoteIds = [...this.homeReadme.ids].filter(
      (noteID) => !this.notes.ids.has(noteID)
    );
    missingNoteIds.forEach((noteID) => {
      console.log(`${this.repoName}.${noteID} - 笔记不存在`);
    });
  }

  /**
   * - 处理未分配到首页 README 中的笔记
   * - 打印存在于实际仓库中的笔记 ID 但是不存在于首页 README 中的笔记 ID，并将其追加到首页 README 的末尾。
   */
  handleUnassignedNotes() {
    const unassignedNoteIds = [...this.notes.ids].filter(
      (noteID) => !this.homeReadme.ids.has(noteID)
    );

    if (unassignedNoteIds.length > 0) {
      console.log(
        `${this.repoName} 存在未分组的笔记：${[...unassignedNoteIds].join(
          ", "
        )}`
      );
      const unassignedNotesSection =
        "\n\n## ⏰ 待分组\n\n" +
        [...unassignedNoteIds]
          .map((noteId) => `- [ ] ${this.notes.map[noteId]}`)
          .join(this.EOL);
      this.homeReadme.lines.push(unassignedNotesSection);
    }
  }

  /**
   * - homeReadme 处理标题范围 1~6
   * - 非 homeReadme 处理标题范围 2~6
   */
  updateToc(lines, isHome = false) {
    let startLineIdx = -1,
      endLineIdx = -1;
    lines.forEach((line, idx) => {
      if (line.startsWith(this.toc.startTag)) startLineIdx = idx;
      if (line.startsWith(this.toc.endTag)) endLineIdx = idx;
    });
    if (startLineIdx === -1 || endLineIdx === -1) return;

    // 收集标题，并更新编号。
    const titles = [];
    const headers = ["## ", "### ", "#### ", "##### ", "###### "]; // 2~6 级标题，忽略 1 级标题。
    if (isHome) headers.push("# ");
    const titleNumbers = Array(7).fill(0); // 用于存储每个级别的编号
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (headers.some((header) => line.startsWith(header))) {
        const [numberedTitle, plainTitle] = addNumberToTitle(
          line,
          titleNumbers
        );
        titles.push(numberedTitle);
        lines[i] = numberedTitle; // 更新原行内容
        // console.log('lines[i] =>', numberedTitle)
      }
    }

    // 生成 toc
    const toc = generateToc(titles, this.EOL);

    lines.splice(
      startLineIdx + 1,
      endLineIdx - startLineIdx - 1,
      ...toc.split(this.EOL)
    );

    function generateToc(titles, EOL) {
      const toc = titles
        .map((title) => {
          const level = title.indexOf(" ");
          const text = title.slice(level).trim();
          const anchor = generateAnchor(text);
          const baseLevel = isHome ? 1 : 2;
          return (
            " ".repeat((level - baseLevel) * 2) + `- [${text}](#${anchor})`
          );
        })
        .join(EOL);

      // !NOTE anchor 点击后会刷新页面。
      // const tocUrl = titles.map(title => {
      //   const level = title.indexOf(' ');
      //   const text = title.slice(level).trim();
      //   const anchor = text.toLowerCase().replace(/\s/g, '-');
      //   return ' '.repeat((level - 1) * 2) + `- [${text}](${this.repoUrl}/README.md#${anchor})`;
      // }).join(this.EOL);

      return toc;
    }

    function addNumberToTitle(title, titleNumbers) {
      // console.log(title, title.endsWith('\r')); // !NOTE windows 环境下，读到的 title 结尾会带有一个 /r，在正则匹配的时候，不要记上结尾 $
      const match = title.match(/^(\#+)\s*((\d+(\.\d*)?(\.\d*)?(\.\d*)?(\.\d*)?(\.\d*)?)\.\s*)?(.*)/);
      const plainTitle = match ? match[9].trim() : title.trim();

      const level = title.indexOf(" ");
      const baseLevel = 2; // 基础级别为2

      // 一级标题
      if (level === 1) return [title, plainTitle];

      // 重置当前级别以上的编号
      for (let i = level + 1; i < titleNumbers.length; i++) titleNumbers[i] = 0;

      // 增加当前级别的编号
      titleNumbers[level] += 1;

      // 生成新的编号
      const newNumber = titleNumbers.slice(baseLevel, level + 1).join(".");

      // 构建新的标题
      const headerSymbol = title.slice(0, level).trim(); // 获取原有的 # 符号
      const newTitle = `${headerSymbol} ${newNumber}. ${plainTitle}`;
      // console.log('newTitle:', newTitle);

      return [newTitle, plainTitle];
    }

    function generateAnchor(label) {
      return slugger.slug(label);
    }
  }

  updateReadme() {
    this.parseNoteContent();
    this.homeReadme.contents = fs.readFileSync(this.homeReadme.path, "utf8");
    this.homeReadme.lines = this.removeHomeTopInfos();
    this.setHomeTopInfos();

    // console.log(this.notes.ids, this.homeReadme.ids);

    this.printMissingNotes();
    this.handleUnassignedNotes();
    this.updateToc(this.homeReadme.lines, true);
    fs.writeFileSync(
      this.homeReadme.path,
      this.homeReadme.lines.join(this.EOL)
    );
    if (notesmeta.repos_vitepress.includes(this.repoName)) {
      const tocStartIdx = this.homeReadme.lines.indexOf(this.toc.startTag + (process.platform === 'win32' ? '\r' : ''));
      const tocEndIdx = this.homeReadme.lines.indexOf(this.toc.endTag + (process.platform === 'win32' ? '\r' : ''));

      // console.log(this.homeReadme.lines)
      // console.log('tocStartIdx', tocStartIdx)
      // console.log('tocEndIdx', tocEndIdx)
      
      if (tocStartIdx !== -1 && tocEndIdx !== -1) {
        // 将 tocStartIdx 到 tocEndIdx 之间的内容给删除后再写入。
        fs.writeFileSync(
          this.vitepressDocPath,
          this.homeReadme.lines
            .slice(0, tocStartIdx)
            .concat(this.homeReadme.lines.slice(tocEndIdx + 1))
            .join(this.EOL)
        );
      } else {
        fs.writeFileSync(
          this.vitepressDocPath,
          this.homeReadme.lines.join(this.EOL)
        );
      }
    }
    console.log(`✅ ${this.repoName} \t README.md updated.`);
  }
}

export default ReadmeUpdater;