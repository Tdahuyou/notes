import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/notes/docs/.vitepress/dist/',
  title: "Tdahuyou",
  description: "学习笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'yuque', link: 'https://www.yuque.com/tdahuyou' },
      { text: 'bilibili', link: 'https://space.bilibili.com/407241004' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tdahuyou' }
    ]
  }
})
