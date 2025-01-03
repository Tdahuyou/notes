# 📒 笔记管理架构

![](assets/2024-12-29-22-28-30.png)

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

- **分仓库**
  - **体积问题**：若所有笔记都统一丢到一个仓库中，后续仓库体积可能会变得异常庞大。
  - **划分原则**：仓库的划分可能有些是不太合理的，会根据实际情况不断调整优化。
    - 比如 markdown、mermaid 的笔记，从某种程度上讲，mermaid 的笔记其实可以一并丢到 markdown 中，因为 mermaid 的主要应用场景基本上都是在 markdown 中使用。
    - 这也是一个不断学习的过程，在学习某个内容 xxx 的时候，最初做的划分很可能也都是不太合理的，后续再优化结构即可，初学阶段没必要过分纠结自己写的笔记应该属于哪个组，重要的是先把笔记给写好。
- **git log 问题**
  - 随着 push 的数量增加，后续可能会导致仓库的历史记录变得很大，如果确实影响到了推拉的性能，会粗暴地将历史记录给丢弃，把仓库清掉，然后重新建一个同名的仓库，再把最新的内容推上去。
  - 或者研究研究重写 git log 的方案。
- **大型静态资源问题**
  - **大型静态资源**
    - 主要是一些 pdf 书籍、视频等。
    - 这些内容暂时采用语雀知识库来存储，通过笔记编号可以快速定位到相应的资源即可。
  - **后续计划：**
    - pdf 书籍倒是可以考虑也丢到 github 上存储，比如 javascript 的相关学习资源（书籍），可以考虑单独新建一个名为 javascript-books 的仓库，然后将书籍统一丢到仓库中。如果所有书籍汇总起来，数量并不算太多的话，也可以考虑直接新建一个 tnotes-books 仓库来汇总所有的书籍资源。
    - 视频内容不太方便丢到 github 上存储，还是丢到 yuque 上比较好，后续再根据实际情况丢一些学习笔记视频到 bilibili 上。