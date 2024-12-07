---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Notes"
  text: "笔记汇总"
  tagline: 汇总个人写的一些笔记内容，以便查阅。

features:
  - title: 🔗 canvas
    link: https://github.com/Tdahuyou/canvas/blob/main/README.md
  - title: 🔗 electron
    link: https://github.com/Tdahuyou/electron/blob/main/README.md
  - title: 🔗 en-notes
    link: https://github.com/Tdahuyou/en-notes/blob/main/README.md
  - title: 🔗 eslint
    link: https://github.com/Tdahuyou/eslint/blob/main/README.md
  - title: 🔗 git
    link: https://github.com/Tdahuyou/git/blob/main/README.md
  - title: 🔗 html-css
    link: https://github.com/Tdahuyou/html-css/blob/main/README.md
  - title: 🔗 i18n
    link: https://github.com/Tdahuyou/i18n/blob/main/README.md
  - title: 🔗 en-words
    link: https://github.com/Tdahuyou/en-words
  - title: 🔗 javascript
    link: https://github.com/Tdahuyou/javascript/blob/main/README.md
  - title: 🔗 leetcode
    link: https://github.com/Tdahuyou/leetcode/blob/main/README.md
  - title: 🔗 markdown
    link: https://github.com/Tdahuyou/markdown/blob/main/README.md
  - title: 🔗 miniprogram-wechat
    link: https://github.com/Tdahuyou/miniprogram-wechat/blob/main/README.md
  - title: 🔗 nodejs
    link: https://github.com/Tdahuyou/nodejs/blob/main/README.md
  - title: 🔗 pc
    link: https://github.com/Tdahuyou/pc/blob/main/README.md
  - title: 🔗 prettier
    link: https://github.com/Tdahuyou/prettier/blob/main/README.md
  - title: 🔗 react
    link: https://github.com/Tdahuyou/react/blob/main/README.md
  - title: 🔗 svg
    link: https://github.com/Tdahuyou/svg/blob/main/README.md
  - title: 🔗 typescript
    link: https://github.com/Tdahuyou/typescript/blob/main/README.md
  - title: 🔗 vite
    link: https://github.com/Tdahuyou/vite/blob/main/README.md
  - title: 🔗 vscode
    link: https://github.com/Tdahuyou/vscode/blob/main/README.md
  - title: 🔗 vue
    link: https://github.com/Tdahuyou/vue/blob/main/README.md
  - title: 🔗 webpack
    link: https://github.com/Tdahuyou/webpack/blob/main/README.md
---

![foot print](https://raw.githubusercontent.com/Tdahuyou/notes/refs/heads/main/docs/public/footprint.png)

::: tip
- **🤔 问：这个站点中记录的内容是什么？**
  - **TODO.md**：每个笔记仓库中的 TODO.md 文件链接。在 TODO.md 中，按照知识点对笔记内容做了简单的分组归类，可以根据需要选择性阅读，**不建议按照编号顺序来阅读**。在这个站点中，把这些 TODO.md 给汇总起来，查阅起来会更加方便一些。其中打勾的表示已完成的笔记，未打勾的表示未完成的笔记。
  - **全局信息**：全局性质的信息丢在这个站点里边统一处理，这样不用在每个笔记仓库中都写一遍。
- **⏰ 待办**
  - **搬运早期笔记**：有时间就整理，目前（24.10）在搬运 yuque 上的早期笔记。
  - 有很多链接还存在问题，会找时间统一所有笔记仓库的格式，修复不可用的链接。
- **⚠️ 注意事项**
  - **私有笔记**：仓库结尾带有 `_` 表示私有笔记仓库，其中包含个人购买的一些课程，不便公开。但是学习了之后，可以自己组织语言来输出，同时录制视频来巩固相关知识点，验证自己是否掌握。
- **🤔 问：为什么不使用云笔记来管理内容？**
  - **纯 markdown 的形式更高效**：实践证明在使用纯 markdown 的形式来整理笔记比使用云笔记的效率更高，因此选择放弃云笔记。
  - **大量笔记不卡顿**：在使用 yuque 的时候，当某一篇笔记的内容破 w 字之后，会感觉到明显的卡顿。而在本地编写 .md 的话，基本无感。
  - **数据可自由管理**：因为会点儿编程，如果笔记数据存储在本地，可以自个儿写脚本来读写笔记内容，然后做一系列处理。比如读取笔记内容，使用 markmap 快速生成思维导图。
- **🤔 问：现在写这些内容的目的是？**
  - **核心目的：统一笔记的编写规范，以便后续编写批处理脚本统一处理。**
  - 十月（24.10）中旬以来正好有了一些空闲时间，在整理笔记的时候发现量比较大，跨越的时间也比较久，很多书写习惯不统一，导致很难对这些笔记进行统一地批处理，进而导致编写成本很高，然后就懒得学习，懒得写了。如果能够明确笔记的编写规范，那么就可以通过脚本来统一处理，**这样多少可以减少笔记的编写成本**。
  - 习惯性地写东西来辅助自己思考……
:::