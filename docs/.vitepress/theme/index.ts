// doc
// https://vitepress.dev/zh/guide/custom-theme

// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./custom.css";
// import MyGlobalComponent from "../components/MyGlobalComponent.vue";
import MyLayout from "../components/MyLayout.vue";
import MyDynamicComp from "../components/MyDynamicComp.vue";
import MyGiscusComp from "../components/MyGiscusComp.vue";
import BilibiliOutsidePlayer from "../components/BilibiliOutsidePlayer.vue";

export default {
  extends: DefaultTheme,

  // doc: https://vitepress.dev/zh/guide/extending-default-theme#registering-global-components
  // enhanceApp({ app }) {
  //   // 注册自定义全局组件
  //   app.component("MyGlobalComponent", MyGlobalComponent);
  // },

  // doc: https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  // doc: https://vitepress.dev/zh/guide/extending-default-theme#registering-global-components
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.component('MyDynamicComp', MyDynamicComp)
    app.component('MyGiscusComp', MyGiscusComp)
    app.component('BilibiliOutsidePlayer', BilibiliOutsidePlayer)
  }
} satisfies Theme;