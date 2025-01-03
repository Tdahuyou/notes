import { defineConfig } from 'vitepress'
// import notesmeta from '../../scripts/.notesmeta.json'

// doc => https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  base: '/notes/',
  title: 'Tdahuyou',
  description: 'Tdahuyou 学习笔记',
  appearance: 'dark',
  srcDir: './src',
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/Tdahuyou/notes/refs/heads/main/docs/public/favicon.ico',
      },
    ],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
  // doc => https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    outline: {
      level: [2, 3],
      label: '目录',
    },
    search: {
      provider: 'local',
    },

    nav: [
      {
        text: '概述',
        items: [
          { text: '👀 README', link: '/README/README' },
          { text: '⏰ 待办事项', link: '/README/todos' },
          { text: '💻 笔记管理架构', link: '/README/notes-architecture' },
          { text: '⚙️ notes 批处理脚本说明', link: '/README/scripts-introduction' },
          { text: '🔍 emoji 规范', link: '/README/emoji' },
          { text: '🤔 Q&A', link: '/README/Q&A' },
        ],
      },
      {
        text: '开源',
        items: [
          { text: '🧑🏻‍💻 m2mm', link: '/my-project/m2mm' },
        ],
      },
      {
        text: '笔记',
        // items: notesmeta.repos_vitepress.map((item, i) => ({ text: `${i + 1}. ` + item, link: `/${item}` }))
        items: [
          {
            text: '📒 语言基础',
            items: [
              { text: 'HTML & CSS', link: '/notes/html-css' },
              { text: 'JavaScript', link: '/notes/javascript' },
              { text: 'TypeScript', link: '/notes/typescript' },
              { text: 'Node.js', link: '/notes/nodejs' },
              { text: 'Markdown', link: '/notes/markdown' },
            ],
          },
          {
            text: '📐 前端绘图',
            items: [
              { text: 'Canvas', link: '/notes/canvas' },
              { text: 'SVG', link: '/notes/svg' },
            ],
          },
          {
            text: '🛠 工具系列',
            items: [
              { text: '工具分享及电脑使用', link: '/notes/pc' },
              { text: 'VSCode 编辑器', link: '/notes/vscode' },
              { text: 'Git 版本控制工具', link: '/notes/git' },
            ],
          },
          {
            text: '🌐 前端框架',
            items: [
              { text: 'Vue.js', link: '/notes/vue' },
              { text: 'React', link: '/notes/react' },
              { text: 'Electron 桌面应用开发', link: '/notes/electron' },
            ],
          },
          {
            text: '📦 前端构建',
            items: [
              { text: 'Webpack', link: '/notes/webpack' },
              { text: 'Vite', link: '/notes/vite' },
            ],
          },
          {
            text: '🛠 前端工具',
            items: [
              { text: 'Prettier 代码格式化工具', link: '/notes/prettier' },
              { text: 'ESLint 代码检查工具', link: '/notes/eslint' },
              { text: 'i18n 国际化', link: '/notes/i18n' },
            ],
          },
          {
            text: '🗣️ 学习外语',
            items: [
              { text: 'en-notes 英语笔记', link: '/notes/en-notes' },
              { text: 'en-words 英语词库', link: '/notes/en-words' },
            ],
          },
          {
            text: '🎮 小程序开发',
            items: [{ text: '微信小程序', link: '/notes/miniprogram-wechat' }],
          },
          {
            text: '🔢 算法',
            items: [{ text: 'LeetCode 题解', link: '/notes/leetcode' }],
          },
        ],
      },
      {
        text: '阅读',
        items: [{ text: '📚 《女人的胜利》余华', link: '/books/1' }],
      },
      {
        text: '随笔',
        items: [
          { text: '✍️ 地铁到站 - 围城', link: '/blog/1' },
          { text: '✍️ 葛大爷语录', link: '/blog/2' }
        ],
      },
      {
        text: '做饭',
        items: [
          { text: '😋 蛋羹', link: '/cooking/dan-geng' },
          { text: '😋 蛋挞', link: '/cooking/dan-ta' },
          { text: '😋 鸡翅', link: '/cooking/ji-chi' },
        ],
      },
      {
        text: '其他',
        items: [
          { text: '🧑🏻‍💻 关于我', link: '/others/about-me' },
          { text: '🐱 神兽', link: '/others/we' },
          { text: '✍️ 创作', link: '/others/creation' },
          { text: '📮 邮箱', link: '/others/email' },
          { text: '🧑🏻‍💻 微信', link: '/others/we-chat' },
          { text: '💰 Donate', link: '/others/donate' },
        ],
      },
    ],

    sidebar: [
      {
        text: '概述',
        collapsed: true,
        items: [
          { text: '👀 README', link: '/README/README' },
          { text: '⏰ 待办事项', link: '/README/todos' },
          { text: '💻 笔记管理架构', link: '/README/notes-architecture' },
          { text: '⚙️ notes 批处理脚本说明', link: '/README/scripts-introduction' },
          { text: '🔍 emoji 规范', link: '/README/emoji' },
          { text: '🤔 Q&A', link: '/README/Q&A' },
        ],
      },
      {
        text: '开源',
        collapsed: true,
        items: [
          { text: '🧑🏻‍💻 m2mm', link: '/my-project/m2mm' },
        ],
      },
      {
        text: '笔记',
        collapsed: true,
        // items: notesmeta.repos_vitepress.map((item, i) => ({ text: `${i + 1}. ` + item, link: `/${item}` }))
        items: [
          {
            text: '📒 语言基础',
            collapsed: true,
            items: [
              { text: 'HTML & CSS', link: '/notes/html-css' },
              { text: 'JavaScript', link: '/notes/javascript' },
              { text: 'TypeScript', link: '/notes/typescript' },
              { text: 'Node.js', link: '/notes/nodejs' },
              { text: 'Markdown', link: '/notes/markdown' },
            ],
          },
          {
            text: '📐 前端绘图',
            collapsed: true,
            items: [
              { text: 'Canvas', link: '/notes/canvas' },
              { text: 'SVG', link: '/notes/svg' },
            ],
          },
          {
            text: '🛠 工具系列',
            collapsed: true,
            items: [
              { text: '工具分享及电脑使用', link: '/notes/pc' },
              { text: 'VSCode 编辑器', link: '/notes/vscode' },
              { text: 'Git 版本控制工具', link: '/notes/git' },
            ],
          },
          {
            text: '🌐 前端框架',
            collapsed: true,
            items: [
              { text: 'Vue.js', link: '/notes/vue' },
              { text: 'React', link: '/notes/react' },
              { text: 'Electron 桌面应用开发', link: '/notes/electron' },
            ],
          },
          {
            text: '📦 前端构建',
            collapsed: true,
            items: [
              { text: 'Webpack', link: '/notes/webpack' },
              { text: 'Vite', link: '/notes/vite' },
            ],
          },
          {
            text: '🛠 前端工具',
            collapsed: true,
            items: [
              { text: 'Prettier 代码格式化工具', link: '/notes/prettier' },
              { text: 'ESLint 代码检查工具', link: '/notes/eslint' },
              { text: 'i18n 国际化', link: '/notes/i18n' },
            ],
          },
          {
            text: '🗣️ 学习外语',
            collapsed: true,
            items: [
              { text: 'en-notes 英语笔记', link: '/notes/en-notes' },
              { text: 'en-words 英语词库', link: '/notes/en-words' },
            ],
          },
          {
            text: '🎮 小程序开发',
            collapsed: true,
            items: [{ text: '微信小程序', link: '/notes/miniprogram-wechat' }],
          },
          {
            text: '🔢 算法',
            collapsed: true,
            items: [{ text: 'LeetCode 题解', link: '/notes/leetcode' }],
          },
        ],
      },
      {
        text: '阅读',
        collapsed: true,
        items: [{ text: '📚 《女人的胜利》余华', link: '/books/1' }],
      },
      {
        text: '随笔',
        collapsed: true,
        items: [
          { text: '✍️ 地铁到站 - 围城', link: '/blog/1' },
          { text: '✍️ 葛大爷语录', link: '/blog/2' }
        ],
      },
      {
        text: '做饭',
        collapsed: true,
        items: [
          { text: '😋 蛋羹', link: '/cooking/dan-geng' },
          { text: '😋 蛋挞', link: '/cooking/dan-ta' },
          { text: '😋 鸡翅', link: '/cooking/ji-chi' },
        ],
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { text: '🧑🏻‍💻 关于我', link: '/others/about-me' },
          { text: '🐱 神兽', link: '/others/we' },
          { text: '✍️ 创作', link: '/others/creation' },
          { text: '📮 邮箱', link: '/others/email' },
          { text: '🧑🏻‍💻 微信', link: '/others/we-chat' },
          { text: '💰 Donate', link: '/others/donate' },
        ],
      },
    ],

    socialLinks: [
      // icon 的引用，存在 CORS 跨域错误。
      // yuque icon from => https://icon-sets.iconify.design/?query=yuque
      { ariaLabel: 'Tdahuyou 语雀主页链接', link: 'https://www.yuque.com/tdahuyou', icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.28 2.955c2.97.203 3.756 2.342 3.84 2.597l1.297.096c.13 0 .169.18.054.236c-1.323.716-1.727 2.17-1.49 3.118c.09.358.254.69.412 1.02c.307.642.651 1.418.707 2.981c.117 3.24-2.51 6.175-5.789 6.593c1.17-1.187 1.815-2.444 2.12-3.375c.606-1.846.508-3.316.055-4.44a4.46 4.46 0 0 0-1.782-2.141c-1.683-1.02-3.22-1.09-4.444-.762c.465-.594.876-1.201 1.2-1.864c.584-1.65-.102-2.848-.704-3.519c-.192-.246-.061-.655.305-.655c1.41 0 2.813.02 4.22.115M3.32 19.107c1.924-2.202 4.712-5.394 7.162-8.15c.559-.63 2.769-2.338 5.748-.533c.878.532 2.43 2.165 1.332 5.51c-.803 2.446-4.408 7.796-15.76 5.844c-.227-.039-.511-.354-.218-.687z"/></svg>` } },
      // bilibili icon from => https://icon-sets.iconify.design/?query=bilibili
      { ariaLabel: 'Tdahuyou B 站主页链接', link: 'https://space.bilibili.com/407241004', icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><g fill="currentColor"><path d="M310.134 596.45c-7.999-4.463-16.498-8.43-24.997-11.9a274 274 0 0 0-26.996-7.438c-2.5-.992-2.5.991-2.5 1.487c0 7.934.5 18.843 1.5 27.768c1 7.438 2 15.372 4 22.81c0 .496 0 .991.5 1.487c.999.992 1.999 1.488 2.999.496c7.999-4.463 15.998-8.43 22.997-13.388c7.499-5.454 15.498-11.9 21.997-18.347c1.5-1.487 0-2.479.5-2.975m323.96-11.9a274 274 0 0 0-26.997-7.438c-2.5-.992-2.5.991-2.5 1.487c0 7.934.5 18.843 1.5 27.768c1 7.438 2 15.372 4 22.81c0 .496 0 .991.5 1.487c1 .992 2 1.488 3 .496c7.999-4.463 15.998-8.43 22.997-13.388c7.499-5.454 15.498-11.9 21.997-18.347c2-1.487.5-2.479.5-2.975c-7.5-4.463-16.498-8.43-24.997-11.9"/><path d="M741.496 112H283c-94.501 0-171 76.5-171 171.5v458c.5 94 77 170.5 170.999 170.5h457.997c94.5 0 171.002-76.5 171.002-170.5v-458c.497-95-76.002-171.5-170.502-171.5m95 343.5h15.5v48h-15.5zm-95.5-1.5l2 43l-13.5 1.5l-5-44.5zm-23.5 0l4 45.5l-14.5 1.5l-6.5-47.5h17zm-230.498 1.5h15v48h-15zm-96-1.5l2 43l-13.5 1.5l-5-44.5zm-23.5 0l4 45.5l-14.5 2l-6-47.5zm-3.5 149C343.498 668.5 216 662.5 204.5 660.5C195.5 499 181.5 464 170 385l54.5-22.5c1 71.5 9 185 9 185s108.5-15.5 132 47c.5 3 0 6-1.5 8.5m20.5 35.5l-23.5-124h35.5l13 123zm44.5-8l-27-235l33.5-1.5l21 236H429zm34-175h17.5v48H467zm41 190h-26.5l-9.5-126h36zm209.998-43C693.496 668 565.997 662 554.497 660c-9-161-23-196-34.5-275l54.5-22.5c1 71.5 9 185 9 185s108.5-15.5 132 46.5c.5 3 0 6-1.5 8.5m19.5 36l-23-124h35.5l13 123zm45.5-8l-27.5-235l33.5-1.5l21 236h-27zm33.5-175h17.5v48h-13zm41 190h-26.5l-9.5-126h36z"/></g></svg>' } },
      {
        ariaLabel: 'Tdahuyou github 主页链接',
        link: 'https://github.com/Tdahuyou',
        icon: 'github',
      },
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    // lastUpdated: {
    //   text: '更新于 ',
    //   formatOptions: {
    //     dateStyle: 'full',
    //     timeStyle: 'short'
    //   }
    // },
    // externalLinkIcon: true,
  },

  // async buildEnd(siteConfig) {
  //   console.log('buildEnd', siteConfig)
  // },

  // async postRender(context) {
  //   console.log('postRender', context);
  // },

  // async transformHead(context) {
  //   console.log('transformHead', context)
  // },

  // transformPageData(pageData, context) {
  //   console.log('transformPageData', pageData, context)
  //   // pageData.frontmatter.head ??= []
  //   // pageData.frontmatter.head.push([
  //   //   'meta',
  //   //   {
  //   //     name: 'og:title',
  //   //     content:
  //   //       pageData.frontmatter.layout === 'home'
  //   //         ? `VitePress`
  //   //         : `${pageData.title} | VitePress`
  //   //   }
  //   // ])
  // },

  // async transformHtml(code, id, context) {
  //   console.log('transformHtml', code, id, context)
  //   // ...
  // }
})
