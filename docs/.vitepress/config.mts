import { defineConfig } from 'vitepress'
import notesmeta from '../../scripts/.notesmeta.json'

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
      { text: 'notes', link: `/${notesmeta.repos_vitepress[0]}` },
      { text: 'yuque', link: 'https://www.yuque.com/tdahuyou' },
      { text: 'bilibili', link: 'https://space.bilibili.com/407241004' },
    ],

    sidebar: [
      {
        text: '概述',
        items: [{ text: 'README', link: '/README' }],
      },
      {
        text: '笔记大纲',
        collapsed: true,
        // items: notesmeta.repos_vitepress.map((item, i) => ({ text: `${i + 1}. ` + item, link: `/${item}` }))
        items: [
          {
            text: '📒 语言基础',
            collapsed: true,
            items: [
              { text: 'HTML & CSS', link: '/html-css' },
              { text: 'JavaScript', link: '/javascript' },
              { text: 'TypeScript', link: '/typescript' },
              { text: 'Markdown', link: '/markdown' }, // 添加 Markdown 到语言基础中
            ],
          },
          {
            text: '📐 前端绘图',
            collapsed: true,
            items: [
              { text: 'Canvas', link: '/canvas' },
              { text: 'SVG', link: '/svg' },
            ],
          },
          {
            text: '🛠 工具系列',
            collapsed: true,
            items: [
              { text: 'PC 端开发环境', link: '/pc' },
              { text: 'VSCode 编辑器', link: '/vscode' },
              { text: 'Git 版本控制工具', link: '/git' },
              { text: 'Prettier 代码格式化工具', link: '/prettier' },
              { text: 'ESLint 代码检查工具', link: '/eslint' }, 
            ],
          },
          {
            text: '🌐 前端框架',
            collapsed: true,
            items: [
              { text: 'Vue.js', link: '/vue' },
              { text: 'React', link: '/react' },
              { text: 'Electron 桌面应用开发', link: '/electron' },
            ],
          },
          {
            text: '📦 前端构建',
            collapsed: true,
            items: [
              { text: 'Webpack', link: '/webpack' },
              { text: 'Vite 快速开发服务器', link: '/vite' },
              { text: 'Node.js 运行时环境', link: '/nodejs' },
            ],
          },
          {
            text: '🌍 国际化与本地化',
            collapsed: true,
            items: [{ text: 'i18n 国际化', link: '/i18n' }],
          },
          {
            text: '📚 笔记与文档管理',
            collapsed: true,
            items: [
              { text: 'en-notes 英文笔记', link: '/en-notes' },
            ],
          },
          {
            text: '🎮 小程序开发',
            collapsed: true,
            items: [
              { text: '微信小程序', link: '/miniprogram-wechat' },
            ],
          },
          {
            text: '🔢 算法',
            collapsed: true,
            items: [
              { text: 'LeetCode 题解', link: '/leetcode' },
            ],
          },
        ],
      },
      {
        text: '其他',
        collapsed: true,
        items: [{ text: '付费答疑', link: '/taobao' }],
      },
    ],

    socialLinks: [
      // icon 的引用，存在 CORS 跨域错误。
      // yuque icon from => https://icon-sets.iconify.design/?query=yuque
      // { ariaLabel: 'Tdahuyou 语雀主页链接', link: 'https://www.yuque.com/tdahuyou', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.505 3.043a.92.92 0 0 1 .795-.46c1.547 0 3.09.05 4.637.154c2.51.171 3.7 1.59 4.18 2.43c.596.092 1.388.088 1.571.807c.14.552-.217.833-.554 1.148c-.483.45-1.133 1.176-.954 1.888c.055.222.159.437.316.765l.002.003c.318.667.684 1.51.742 3.115c.156 4.34-3.596 6.897-7.252 7.08c-2.41 1.815-6.345 3.025-12.557 1.957a1.33 1.33 0 0 1-.945-.709a1.25 1.25 0 0 1-.12-.735c.039-.275.165-.511.33-.7c3.228-3.675 6.635-7.246 9.654-11.098c.526-.67.96-1.28 1.15-1.648c.309-.919-.009-1.444-.625-2.463c-.282-.467-.69-.978-.37-1.534m1.989 5.843c.874.005 1.85.249 2.885.875c2.124 1.288 2.334 3.996 1.625 6.157a7.6 7.6 0 0 1-.836 1.727c1.936-.797 3.319-2.484 3.24-4.686c-.047-1.28-.317-1.871-.564-2.389l-.03-.06c-.132-.277-.31-.647-.412-1.054c-.271-1.08.175-2.04.614-2.678a.92.92 0 0 1-.387-.493v-.001a2.6 2.6 0 0 0-.58-.817c-.407-.393-1.094-.823-2.236-.901a65 65 0 0 0-2.89-.13c.452.878.758 1.94.289 3.267c-.151.426-.46.82-.718 1.183m-.832 1.945c-.719.202-1.214.63-1.378.815c-2.717 3.057-5.881 6.689-7.576 8.627c5.45.747 8.601-.49 10.378-1.922c1.295-1.043 1.925-2.24 2.176-3.004c.434-1.323.537-3.187-.834-4.018c-1.153-.699-2.088-.69-2.766-.498"/></svg>' },
      // bilibili icon from => https://icon-sets.iconify.design/?query=bilibili
      // { ariaLabel: 'Tdahuyou B 站主页链接', link: 'https://space.bilibili.com/407241004', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><g fill="currentColor"><path d="M310.134 596.45c-7.999-4.463-16.498-8.43-24.997-11.9a274 274 0 0 0-26.996-7.438c-2.5-.992-2.5.991-2.5 1.487c0 7.934.5 18.843 1.5 27.768c1 7.438 2 15.372 4 22.81c0 .496 0 .991.5 1.487c.999.992 1.999 1.488 2.999.496c7.999-4.463 15.998-8.43 22.997-13.388c7.499-5.454 15.498-11.9 21.997-18.347c1.5-1.487 0-2.479.5-2.975m323.96-11.9a274 274 0 0 0-26.997-7.438c-2.5-.992-2.5.991-2.5 1.487c0 7.934.5 18.843 1.5 27.768c1 7.438 2 15.372 4 22.81c0 .496 0 .991.5 1.487c1 .992 2 1.488 3 .496c7.999-4.463 15.998-8.43 22.997-13.388c7.499-5.454 15.498-11.9 21.997-18.347c2-1.487.5-2.479.5-2.975c-7.5-4.463-16.498-8.43-24.997-11.9"/><path d="M741.496 112H283c-94.501 0-171 76.5-171 171.5v458c.5 94 77 170.5 170.999 170.5h457.997c94.5 0 171.002-76.5 171.002-170.5v-458c.497-95-76.002-171.5-170.502-171.5m95 343.5h15.5v48h-15.5zm-95.5-1.5l2 43l-13.5 1.5l-5-44.5zm-23.5 0l4 45.5l-14.5 1.5l-6.5-47.5h17zm-230.498 1.5h15v48h-15zm-96-1.5l2 43l-13.5 1.5l-5-44.5zm-23.5 0l4 45.5l-14.5 2l-6-47.5zm-3.5 149C343.498 668.5 216 662.5 204.5 660.5C195.5 499 181.5 464 170 385l54.5-22.5c1 71.5 9 185 9 185s108.5-15.5 132 47c.5 3 0 6-1.5 8.5m20.5 35.5l-23.5-124h35.5l13 123zm44.5-8l-27-235l33.5-1.5l21 236H429zm34-175h17.5v48H467zm41 190h-26.5l-9.5-126h36zm209.998-43C693.496 668 565.997 662 554.497 660c-9-161-23-196-34.5-275l54.5-22.5c1 71.5 9 185 9 185s108.5-15.5 132 46.5c.5 3 0 6-1.5 8.5m19.5 36l-23-124h35.5l13 123zm45.5-8l-27.5-235l33.5-1.5l21 236h-27zm33.5-175h17.5v48h-13zm41 190h-26.5l-9.5-126h36z"/></g></svg>' },
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
