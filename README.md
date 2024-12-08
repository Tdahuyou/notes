# notes

## 🔗 links

- https://tdahuyou.github.io/notes

## 📒 笔记管理架构

- 每一个节点都是一个 git 仓库，采用 notes 仓库来汇总笔记。

```mermaid
mindmap
  root(notes)
    [canvas 笔记]
    [electron 笔记]
    [eslint 笔记]
    [git 笔记]
    [html-css 笔记]
    [i18n 笔记]
    [javascript 笔记]
    [leetcode 笔记]
    [markdown 笔记]
    [nodejs 笔记]
    [react 笔记]
    [scratch 笔记]
    [svg 笔记]
    [typescript 笔记]
    [vite 笔记]
    [vscode 笔记]
    [vue 笔记]
    [webpack 笔记]
```

- 笔记目录结构：

```bash
├── notes # 管理其他笔记
├── canvas
├── electron
├── en-notes
├── eslint
├── git
├── html-css
├── i18n
├── javascript
├── leetcode
├── markdown
├── miniprogram-wechat
├── nodejs
├── react
├── vue
├── vite
├── webpack
├── ……
```

- **分仓库**：若所有笔记都统一丢到一个仓库中，后续仓库体积可能会变得异常庞大。
  - 仓库的划分可能有些是不太合理的，会根据实际情况不断调整优化。比如 markdown、mermaid 的笔记，从某种程度上讲，mermaid 的笔记其实可以一并丢到 markdown 中，因为 mermaid 的主要应用场景基本上都是在 markdown 中使用。
- **git log 问题**：随着 push 的数量增加，后续可能会导致仓库的历史记录变得很大，如果确实影响到了推拉的性能，会粗暴地将历史记录给丢弃，把仓库清掉，然后重新建一个同名的仓库，再把最新的内容推上去。
  - 或者研究研究重写 git log 的方案。
- **大型静态资源问题**：主要是一些 pdf 书籍、视频等，这些内容暂时采用语雀知识库来存储，通过笔记编号可以快速定位到相应的资源即可。

## 📒 scripts 目录内容说明

- scripts 目录中存放笔记的一些批处理脚本。
  - `scripts/updateREADME.js` 暴露一个 ReadmeUpdater 类，根据传入的 repoName 更新 home README.md 和每篇笔记的 README.md，对应笔记仓库中的 `npm run update` 命令。
  - `scripts/notes-merge-distribute.js` 暴露两个函数：mergeReadme、distributeReadme，分别负责收集笔记和分发笔记，对应笔记仓库中的 `npm run merge`、`npm run distribute` 命令。
  - `scripts/utils.js` 中的 `syncLocalAndRemote` 方法，根据传入的 repoName，完成本地和远程仓库的内容同步。
- 为了更方便地在笔记中使用上述脚本的功能，可以在当前的 notes 目录中执行 `npm link` 形成软链接，然后在每个笔记仓库中执行一遍 `npm link tnotes`，相当于在每个笔记仓库中安装了上述脚本。

## 💻 以 javascript 笔记管理流程为例

- 是先准备好俩文件 `javascript/package.json` 和 `javascript/notes.meta.json`。
- 下面是 javascript/package.json 中的内容，主要存放一些脚本。
  - 其中 merge、distribute 通常在初期处理格式问题的时候才需要用到。

```json
{
    "scripts": {
        "merge": "      node ./node_modules/tnotes   --mergeREADME         --repoName=javascript",
        "update": "     node ./node_modules/tnotes   --updateREADME        --repoName=javascript",
        "distribute": " node ./node_modules/tnotes   --distributeREADME    --repoName=javascript",
        "sync": "       node ./node_modules/tnotes   --syncREADME          --repoName=javascript"
    }
}
```
- 命令作用简介：
  - `npm run merge`
    - 将所有笔记 `javascript/****` 合并到 `javascript/MERGED_README.md` 文件中，所有内容合并到一个文件中方便快速地查找替换，主要用于处理一些格式上的问题，以免在多个文件中反复切换。
  - `npm run distribute`
    - 和 merge 对应，merge 命令负责收集笔记，distribute 负责在修改完收集的笔记内容后，将修改后的内容下发到每一篇笔记。
  - `npm run update`
    - 更新 README 文件，包括首页的 README.md 和每个笔记的 README.md。主要处理每篇笔记的目录结构，并将笔记的目录信息提取到 home README 中，形成一个有效的目录结构。
  - `npm run sync`
    - 保持本地和 GitHub 远程仓库内容同步，相当于执行了 `git pull`、`git add .`、`git commit -m "update"`、`git push`。
- 下面是 javascript/notes.meta.json 中的内容，暂时仅有一个配置 ignoreDirs，用于配置忽略一些不需要处理的目录。

```json
{
    "ignoreDirs": ["md-imgs", ".git", ".vscode"]
}
```