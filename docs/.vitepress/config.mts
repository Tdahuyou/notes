import { defineConfig } from 'vitepress'
import GithubSlugger from 'github-slugger'
import markdownItTaskLists from 'markdown-it-task-lists'
import mila from 'markdown-it-link-attributes'

import sidebar__canvas from '../src/notes/canvas/sidebar.json'
import sidebar__chrome from '../src/notes/chrome/sidebar.json'
import sidebar__electron from '../src/notes/electron/sidebar.json'
import sidebar__en_notes from '../src/notes/en-notes/sidebar.json'
import sidebar__eslint from '../src/notes/eslint/sidebar.json'
import sidebar__git from '../src/notes/git/sidebar.json'
import sidebar__html_css from '../src/notes/html-css/sidebar.json'
import sidebar__i18n from '../src/notes/i18n/sidebar.json'
import sidebar__javascript from '../src/notes/javascript/sidebar.json'
import sidebar__leetcode from '../src/notes/leetcode/sidebar.json'
import sidebar__markdown from '../src/notes/markdown/sidebar.json'
import sidebar__miniprogram_wechat from '../src/notes/miniprogram-wechat/sidebar.json'
import sidebar__nodejs from '../src/notes/nodejs/sidebar.json'
import sidebar__pc from '../src/notes/pc/sidebar.json'
import sidebar__prettier from '../src/notes/prettier/sidebar.json'
import sidebar__react from '../src/notes/react/sidebar.json'
import sidebar__svg from '../src/notes/svg/sidebar.json'
import sidebar__typescript from '../src/notes/typescript/sidebar.json'
import sidebar__vite from '../src/notes/vite/sidebar.json'
import sidebar__vscode from '../src/notes/vscode/sidebar.json'
import sidebar__vue from '../src/notes/vue/sidebar.json'
import sidebar__webpack from '../src/notes/webpack/sidebar.json'

// import notesmeta from '../../scripts/.notesmeta.json'

const slugger = new GithubSlugger()

// doc => https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  base: '/notes/',
  title: 'TNotes',
  description: 'Tdahuyou の Notes',
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
    // aside: false, // 隐藏侧边栏
    outline: {
      level: [2, 3],
      label: '目录',
    },
    search: {
      provider: 'local',
    },

    nav: [
      {
        text: '👀 README',
        link: '/README',
      },
    ],

    sidebar: [
      { text: '👀 README', link: '/README' },
      {
        text: 'TNotes',
        collapsed: true,
        items: [
          { text: '🔨 TNotes 基本架构', link: '/tnotes/architecture' },
          {
            text: '⚙️ TNotes 核心脚本功能简介',
            link: '/tnotes/scripts-introduction',
          },
          { text: '🔍 emoji 规范', link: '/tnotes/emoji' },
          { text: '🤔 Q&A', link: '/tnotes/Q&A' },
        ],
      },
      {
        text: '笔记',
        collapsed: true,
        // items: notesmeta.repos_vitepress.map((item, i) => ({ text: `${i + 1}. ` + item, link: `/${item}` }))
        items: [
          { text: '👀 README', link: '/notes/README' },
          {
            ...sidebar__html_css,
            text: '📒 语言基础 - HTML & CSS',
          },
          {
            ...sidebar__javascript,
            text: '📒 语言基础 - JavaScript',
          },
          {
            ...sidebar__typescript,
            text: '📒 语言基础 - TypeScript',
          },
          {
            ...sidebar__nodejs,
            text: '📒 语言基础 - Node.js',
          },
          {
            ...sidebar__markdown,
            text: '📒 语言基础 - Markdown',
          },
          {
            ...sidebar__canvas,
            text: '📐 前端绘图 - Canvas',
          },
          {
            ...sidebar__svg,
            text: '📐 前端绘图 - SVG',
          },
          {
            ...sidebar__pc,
            text: '🛠 工具分享及电脑使用',
          },
          {
            ...sidebar__chrome,
            text: '🛠 chrome 浏览器',
          },
          {
            ...sidebar__vscode,
            text: '🛠 VSCode 编辑器',
          },
          {
            ...sidebar__git,
            text: '🛠 Git 版本控制工具',
          },
          {
            ...sidebar__vue,
            text: '🌐 前端框架 - Vue.js',
          },
          {
            ...sidebar__react,
            text: '🌐 前端框架 - React',
          },
          {
            ...sidebar__electron,
            text: '🌐 前端框架 - Electron',
          },
          {
            ...sidebar__webpack,
            text: '📦 前端构建 - Webpack',
          },
          {
            ...sidebar__vite,
            text: '📦 前端构建 - Vite',
          },
          {
            ...sidebar__prettier,
            text: '🛠 前端工具 - Prettier 代码格式化工具',
          },
          {
            ...sidebar__eslint,
            text: '🛠 前端工具 - ESLint 代码检查工具',
          },
          {
            ...sidebar__i18n,
            text: '🛠 前端工具 - i18n 国际化',
          },
          {
            ...sidebar__en_notes,
            text: '🗣️ 外语 - en-notes 英语笔记',
          },
          {
            text: '🗣️ 外语 - en-words 英语词库',
            link: 'https://github.com/Tdahuyou/en-words',
          },
          {
            ...sidebar__miniprogram_wechat,
            text: '🎮 小程序开发 - 微信小程序',
          },
          {
            ...sidebar__leetcode,
            text: '🔢 算法 - LeetCode 题解',
          },
        ],
      },
      {
        text: '开源',
        collapsed: true,
        items: [
          { text: '👀 README', link: '/my-project/README' },
          { text: '🧑🏻‍💻 m2mm', link: '/my-project/m2mm' }
        ],
      },
      {
        text: '动态',
        collapsed: true,
        items: [
          { text: '👀 README', link: '/dynamic/README' },
          { text: '🗓 2025', link: '/dynamic/dynamic.25' },
          { text: '🗓 2024', link: '/dynamic/dynamic.24' },
          { text: '🗓 2023', link: '/dynamic/dynamic.23' },
          { text: '🗓 2022', link: '/dynamic/dynamic.22' },
          { text: '🗓 2021', link: '/dynamic/dynamic.21' },
          { text: '🗓 2020', link: '/dynamic/dynamic.20' },
          { text: '🗓 2019', link: '/dynamic/dynamic.19' },
        ],
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          {
            text: '随笔',
            collapsed: true,
            items: [
              { text: '✍️ 地铁到站 - 围城', link: '/others/blog/1' },
              { text: '✍️ 葛大爷语录', link: '/others/blog/2' },
            ],
          },
          {
            text: '做饭',
            collapsed: true,
            items: [
              { text: '😋 蛋羹', link: '/others/cooking/dan-geng' },
              { text: '😋 蛋挞', link: '/others/cooking/dan-ta' },
              { text: '😋 鸡翅', link: '/others/cooking/ji-chi' },
            ],
          },
          {
            text: '阅读',
            collapsed: true,
            items: [{ text: '📚 《女人的胜利》余华', link: '/others/books/1' }],
          },
          {
            text: '关于我',
            collapsed: true,
            items: [
              { text: '🧑🏻‍💻 关于我', link: '/others/about-me/about-me' },
              { text: '🐱 神兽', link: '/others/about-me/we' },
              { text: '✍️ 创作', link: '/others/about-me/creation' },
              { text: '📮 邮箱', link: '/others/about-me/email' },
              { text: '🧑🏻‍💻 微信', link: '/others/about-me/we-chat' },
              { text: '💰 Donate', link: '/others/about-me/donate' },
            ],
          },
        ],
      },
      { text: '💭 留言版', link: '/message-board' },
    ],

    socialLinks: [
      // icon 的引用，存在 CORS 跨域错误。
      // yuque icon from => https://icon-sets.iconify.design/?query=yuque
      {
        ariaLabel: 'Tdahuyou 语雀主页链接',
        link: 'https://www.yuque.com/tdahuyou',
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.28 2.955c2.97.203 3.756 2.342 3.84 2.597l1.297.096c.13 0 .169.18.054.236c-1.323.716-1.727 2.17-1.49 3.118c.09.358.254.69.412 1.02c.307.642.651 1.418.707 2.981c.117 3.24-2.51 6.175-5.789 6.593c1.17-1.187 1.815-2.444 2.12-3.375c.606-1.846.508-3.316.055-4.44a4.46 4.46 0 0 0-1.782-2.141c-1.683-1.02-3.22-1.09-4.444-.762c.465-.594.876-1.201 1.2-1.864c.584-1.65-.102-2.848-.704-3.519c-.192-.246-.061-.655.305-.655c1.41 0 2.813.02 4.22.115M3.32 19.107c1.924-2.202 4.712-5.394 7.162-8.15c.559-.63 2.769-2.338 5.748-.533c.878.532 2.43 2.165 1.332 5.51c-.803 2.446-4.408 7.796-15.76 5.844c-.227-.039-.511-.354-.218-.687z"/></svg>`,
        },
      },
      // bilibili icon from => https://icon-sets.iconify.design/?query=bilibili
      {
        ariaLabel: 'Tdahuyou B 站主页链接',
        link: 'https://space.bilibili.com/407241004',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><g fill="currentColor"><path d="M310.134 596.45c-7.999-4.463-16.498-8.43-24.997-11.9a274 274 0 0 0-26.996-7.438c-2.5-.992-2.5.991-2.5 1.487c0 7.934.5 18.843 1.5 27.768c1 7.438 2 15.372 4 22.81c0 .496 0 .991.5 1.487c.999.992 1.999 1.488 2.999.496c7.999-4.463 15.998-8.43 22.997-13.388c7.499-5.454 15.498-11.9 21.997-18.347c1.5-1.487 0-2.479.5-2.975m323.96-11.9a274 274 0 0 0-26.997-7.438c-2.5-.992-2.5.991-2.5 1.487c0 7.934.5 18.843 1.5 27.768c1 7.438 2 15.372 4 22.81c0 .496 0 .991.5 1.487c1 .992 2 1.488 3 .496c7.999-4.463 15.998-8.43 22.997-13.388c7.499-5.454 15.498-11.9 21.997-18.347c2-1.487.5-2.479.5-2.975c-7.5-4.463-16.498-8.43-24.997-11.9"/><path d="M741.496 112H283c-94.501 0-171 76.5-171 171.5v458c.5 94 77 170.5 170.999 170.5h457.997c94.5 0 171.002-76.5 171.002-170.5v-458c.497-95-76.002-171.5-170.502-171.5m95 343.5h15.5v48h-15.5zm-95.5-1.5l2 43l-13.5 1.5l-5-44.5zm-23.5 0l4 45.5l-14.5 1.5l-6.5-47.5h17zm-230.498 1.5h15v48h-15zm-96-1.5l2 43l-13.5 1.5l-5-44.5zm-23.5 0l4 45.5l-14.5 2l-6-47.5zm-3.5 149C343.498 668.5 216 662.5 204.5 660.5C195.5 499 181.5 464 170 385l54.5-22.5c1 71.5 9 185 9 185s108.5-15.5 132 47c.5 3 0 6-1.5 8.5m20.5 35.5l-23.5-124h35.5l13 123zm44.5-8l-27-235l33.5-1.5l21 236H429zm34-175h17.5v48H467zm41 190h-26.5l-9.5-126h36zm209.998-43C693.496 668 565.997 662 554.497 660c-9-161-23-196-34.5-275l54.5-22.5c1 71.5 9 185 9 185s108.5-15.5 132 46.5c.5 3 0 6-1.5 8.5m19.5 36l-23-124h35.5l13 123zm45.5-8l-27.5-235l33.5-1.5l21 236h-27zm33.5-175h17.5v48h-13zm41 190h-26.5l-9.5-126h36z"/></g></svg>',
        },
      },
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
  // doc => https://vitepress.dev/zh/guide/markdown#image-lazy-loading
  markdown: {
    // lineNumbers: true, // 启用代码块的行号
    config(md) {
      md.use(markdownItTaskLists) // 启用 markdown-it-task-lists 插件来处理复选框的渲染问题。
        .use(mila, {
          // 启用 markdown-it-link-attributes 插件来处理超链接的跳转问题。
          attrs: {
            target: '_self', // 所有链接都将使用 _self，避免 _blank
            rel: 'noopener', // 提供安全性 - 这是安全设置，防止新页面能够通过 JavaScript 访问当前页面的 window 对象，通常配合 target="_blank" 使用，但即便没有 target="_blank"，它也能增强安全性。
          },
        })
    },
    anchor: {
      // !NOTE 需要跟和 \scripts\updateREADME.js 中的 markdown.anchor.slugify 的逻辑保持一致。
      slugify: (label: string) => {
        slugger.reset()
        return slugger.slug(label)
      },
    },
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
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
