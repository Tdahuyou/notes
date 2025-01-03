# react

<!-- region:toc -->
- [react](#react)
  - [1. 快速入门](#1-快速入门)
    - [1.1. 认识 react](#11-认识-react)
    - [1.2. 推荐安装的 VSCode 插件](#12-推荐安装的-vscode-插件)
    - [1.3. 第一个 react 应用](#13-第一个-react-应用)
    - [1.4. jsx](#14-jsx)
      - [1.4.1. 条件渲染、列表渲染](#141-条件渲染列表渲染)
  - [2. dangerouslySetInnerHTML](#2-dangerouslysetinnerhtml)
  - [3. ref](#3-ref)
  - [4. 组件篇](#4-组件篇)
    - [4.1. 认识组件](#41-认识组件)
    - [4.2. 组件名](#42-组件名)
    - [4.3. 样式](#43-样式)
    - [4.4. 属性](#44-属性)
    - [4.5. 了解属性的基本使用](#45-了解属性的基本使用)
    - [4.6. 通过 children 属性传递内容](#46-通过-children-属性传递内容)
    - [4.7. 布尔属性](#47-布尔属性)
    - [4.8. 属性校验](#48-属性校验)
    - [4.9. 属性默认值](#49-属性默认值)
    - [4.10. 状态](#410-状态)
    - [4.11. 生命周期](#411-生命周期)
    - [4.12. hooks](#412-hooks)
    - [4.13. hoc](#413-hoc)
    - [4.14. 内置组件](#414-内置组件)
  - [5. 状态管理](#5-状态管理)
    - [5.1. redux](#51-redux)
  - [6. 第三方库](#6-第三方库)
  - [7. 工程化](#7-工程化)
  - [8. 小练习](#8-小练习)
  - [9. UI 组件库](#9-ui-组件库)
<!-- endregion:toc -->

## 1. 快速入门

### 1.1. 认识 react

- [ ] [0032. 什么是 react](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md) <!-- [locale](./0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#1--links-14)
  - [2. 📒 什么是 react](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#2--什么是-react)
  - [3. 📒 react 的特点](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#3--react-的特点)
  - [4. 📒 库 vs. 框架](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#4--库-vs-框架)
  - 了解什么是 react
  - 了解 react 都有哪些特点
  - 理解为什么强调 react 是一个库，而非框架
  - 谈了谈 vue、react 之间的一些差异
  

- [ ] [9998. react 官网链接](https://github.com/Tdahuyou/react/tree/main/9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md) <!-- [locale](./9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md) -->  
  - [1. 🔗 react 官网](https://github.com/Tdahuyou/react/tree/main/9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md#1--react-官网)
  - [2. 📒 react 官方文档结构简介](https://github.com/Tdahuyou/react/tree/main/9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md#2--react-官方文档结构简介)
  - 本节对 react 官网的结构做了一个简单的介绍。
  - 熟悉 react 官方文档的大体结构是非常有必要的，在学习 react 的过程中，会经常用到官方文档。
  

- [ ] [9997. react github 仓库链接](https://github.com/Tdahuyou/react/tree/main/9997.%20react%20github%20%E4%BB%93%E5%BA%93%E9%93%BE%E6%8E%A5/README.md) <!-- [locale](./9997.%20react%20github%20%E4%BB%93%E5%BA%93%E9%93%BE%E6%8E%A5/README.md) -->  
  - [1. 🔗 react github 仓库链接](https://github.com/Tdahuyou/react/tree/main/9997.%20react%20github%20%E4%BB%93%E5%BA%93%E9%93%BE%E6%8E%A5/README.md#1--react-github-仓库链接)
  

### 1.2. 推荐安装的 VSCode 插件

- [ ] [0034. eslint 插件](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md) <!-- [locale](./0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md) -->  
  - [1. 📒 eslint 是啥？有啥用？](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#1--eslint-是啥有啥用)
  - [2. 📒 安装 ESLint 插件](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#2--安装-eslint-插件)
  - [3. 📒 配置 ESLint 基本流程](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#3--配置-eslint-基本流程)
  - [4. 💻 约束只能使用单引号，不能使用双引号](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#4--约束只能使用单引号不能使用双引号)
  - [5. 📒 注意事项](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#5--注意事项)
  - 认识 vscode 中的 eslint 插件
  - 知道 eslint 是用来解决什么问题的
  - 知道如何引入并使用 eslint
  

- [ ] [0035. 在 vscode 中，让 Emmet 语法支持 JSX](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md) <!-- [locale](./0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#1--links-16)
  - [2. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#2--notes-3)
  - [3. 💻 测试效果](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#3--测试效果)
  - 介绍如何配置 VSCode，让 Emmet 语法支持 JSX。
  

### 1.3. 第一个 react 应用

- [ ] [0001. Hello World](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md) <!-- [locale](./0001.%20Hello%20World/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#1--links)
  - [2. 📒 通过 CDN 的方式引入相关依赖](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#2--通过-cdn-的方式引入相关依赖)
  - [3. 📒 API 描述](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#3--api-描述)
  - [4. 💻 demo - 在页面上渲染出 Hello World](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#4--demo---在页面上渲染出-hello-world)
  - [5. 💻 demo - 熟悉 React.createElement 的参数](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#5--demo---熟悉-reactcreateelement-的参数)
  - [6. 💻 demo - 使用 JSX 来简写](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#6--demo---使用-jsx-来简写)
  - [7. 🤔 思考：`React.createElement` 跟 `document.createElement` 是一样的吗？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#7--思考reactcreateelement-跟-documentcreateelement-是一样的吗)
  - [8. 🤔 思考：`react` 核心库和 `react-dom` 库之间的关系是？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#8--思考react-核心库和-react-dom-库之间的关系是)
  - [9. 🤔 思考：为什么一旦使用了 `JSX` 语法，就必须要引入 `react` 核心库？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#9--思考为什么一旦使用了-jsx-语法就必须要引入-react-核心库)
  - [10. 🤔 思考：通过脚手架（比如 vite、umi、create-react-app）来搭建工程 vs. 通过（.html）页面的方式来直接引入 react 相关的库](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#10--思考通过脚手架比如-viteumicreate-react-app来搭建工程-vs-通过html页面的方式来直接引入-react-相关的库)
  - [11. 🤖 请介绍一下 script 标签身上的 type 属性](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#11--请介绍一下-script-标签身上的-type-属性)
    - [11.1. **标准用法**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#111-标准用法)
    - [11.2. **模块**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#112-模块)
    - [11.3. **非 JavaScript 类型**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#113-非-javascript-类型)
    - [11.4. **历史用法**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#114-历史用法)
    - [11.5. **实用考虑**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#115-实用考虑)
  - [12. 🤖 请介绍一下 script 标签身上的 crossorigin 属性](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#12--请介绍一下-script-标签身上的-crossorigin-属性)
    - [12.1. 值](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#121-值)
    - [12.2. 作用](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#122-作用)
    - [12.3. 示例](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#123-示例)
  - 本节知识点
    - 了解 React.createElement 的基本使用
    - 了解 ReactDOM.render 的基本使用
    - 了解 JSX 其实就是 React.createElement 的简写，是一个语法糖。
  - 本节不使用任何脚手架工具，通过 CDN 引入 react、react-dom，直接在（.html）页面上使用 react，实现一个 demo - 在页面上渲染出 Hello World。并借此 demo 来熟悉 React.createElement 和 ReactDOM.render 的基本用法。
  

### 1.4. jsx

- [ ] [0013. 什么是 JSX](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md) <!-- [locale](./0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md) -->  
  - [1. 📒 JSX 是什么？](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#1--jsx-是什么)
  - [2. 📒 JSX 的本质](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#2--jsx-的本质)
  - [3. 📒 必须单根](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#3--必须单根)
  - [4. 📒 必须要有结束标记](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#4--必须要有结束标记)
  - [5. 📒 JSX 的基本特点](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#5--jsx-的基本特点)
  - [6. 💻 一个简单的 React 组件示例](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#6--一个简单的-react-组件示例)
  - 简单介绍了 JSX 的一些基础知识点。
  

- [ ] [0003. html to jsx 在线转换](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md) <!-- [locale](./0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md#1--links-2)
  - [2. 📒 html-to-jsx 在线转换器](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md#2--html-to-jsx-在线转换器)
  - 本节介绍了一个实现 html 转 jsx 的在线工具站点，如果有 html 转 jsx 的需求，可以通过这个工具来快速转换。
  

- [ ] [0015. 在 JSX 中使用注释](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md) <!-- [locale](./0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#1--links-9)
  - [2. 📒 JSX 中注释的写法](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#2--jsx-中注释的写法)
  - [3. 💻 demo1 - 在 JSX 中使用注释](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#3--demo1---在-jsx-中使用注释)
  - [4. 💻 demo2 - jsx-eslint 的智能提示](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#4--demo2---jsx-eslint-的智能提示)
  - 在 JSX 中，注释应该被包含在特殊的注释标签中，即 `{/* 这里边是注释内容 */}`。
  

- [ ] [0009. 动态插值 - 在 jsx 中使用大括号实现](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md) <!-- [locale](./0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#1--links-4)
  - [2. 📒 在 JSX 中使用 JS 表达式](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#2--在-jsx-中使用-js-表达式)
  - [3. 🤖 Hedy Lamarr 是谁？](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#3--hedy-lamarr-是谁)
  - 在 jsx 中可以使用 `{}` 语法来动态插入 js 表达式。
  - 类似于 vue 中的指令 v-bind 的作用。
  - JSX 让你可以在 Jaavascript 中嵌入 HTML 语法。而大括号可以让你在 JSX 中 “回到” JavaScript 中，这样你就可以从你的代码中嵌入一些变量并展示给用户。
  - 在 JSX 的大括号中插入 null、undefined、false 这些值，是不会显示的，如果要显示的话则不应该丢到大括号中，应该直接书写，将其事做普通的字符串来显示。
  - 在 JSX 的大括号中插入普通对象（比如 `{ foo: 123, bar: 'abc' }`）是无法渲染的，会报错。
  

- [ ] [0017. 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md) <!-- [locale](./0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md) -->  
  - [1. 💻 demo - 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#1--demo---在-jsx-中书写内联样式-style)
  - [2. 💻 demo - 在 JSX 中的 style 不能写成字符串形式](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#2--demo---在-jsx-中的-style-不能写成字符串形式)
  - [3. 🤖 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#3--在-jsx-中书写内联样式-style)
  - 本文介绍了在 JSX 中书写内联样式 style 的一些注意事项。
  

#### 1.4.1. 条件渲染、列表渲染

- [ ] [0010. 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md) <!-- [locale](./0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#1--links-5)
  - [2. 📝 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#2--条件渲染)
  - [3. 💻 demo - 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#3--demo---条件渲染)
  - [4. 📝 对比 vue](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#4--对比-vue)
  - 类似于 vue 中的 v-show、v-if，不过在 react 中，条件渲染是通过纯 js 结合 jsx 语法来实现的，更加的灵活。
  - React 中没有类似 vue 中的 v-if、v-else、v-show 的条件渲染指令，React 中的条件渲染是通过在 JSX 使用原始的 JavaScript 条件逻辑来决定要渲染什么内容的，写起来更加原生，更加直观、更加灵活。
  

- [ ] [0011. 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md) <!-- [locale](./0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#1--links-6)
  - [2. 🔗 en-words](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#2--en-words)
  - [3. 📝 doc - 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#3--doc---列表渲染)
  - [4. 💻 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#4--列表渲染)
  - [5. 📒 “列表渲染”中的“列表”是什么？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#5--列表渲染中的列表是什么)
  - [6. 🤖 列表渲染如果没有给定 id，react 会报错，请问 react 是如何识别列表渲染的？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#6--列表渲染如果没有给定-idreact-会报错请问-react-是如何识别列表渲染的)
    - [6.1. 为什么需要 `key`？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#61-为什么需要-key)
    - [6.2. 如何提供 `key`](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#62-如何提供-key)
    - [6.3. 错误示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#63-错误示例)
    - [6.4. 总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#64-总结)
  - [7. 🤖 如果把每一个 li 都写出来，而不是使用 map，那么不指定 id 会报错吗？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#7--如果把每一个-li-都写出来而不是使用-map那么不指定-id-会报错吗)
    - [7.1. 示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#71-示例)
    - [7.2. 总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#72-总结)
  - [8. 🤖 如果要渲染的内容是一个数组，并且数组的某些项是 react 元素，那么 react 会要求每一个 react 元素都需要具备 key 对吗？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#8--如果要渲染的内容是一个数组并且数组的某些项是-react-元素那么-react-会要求每一个-react-元素都需要具备-key-对吗)
    - [8.1. 为什么需要 `key`](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#81-为什么需要-key)
    - [8.2. 示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#82-示例)
    - [8.3. 动态生成的元素](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#83-动态生成的元素)
    - [8.4. 总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#84-总结)
  - 类似于 vue 中的 v-for，不过在 react 中，列表渲染是通过纯 js 结合 jsx 语法来实现的，更加的灵活。
  - 列表渲染中的“列表”指的是“数组”。
  - 如果在 render 中返回一个 `{[1, 2, 3]}` 也是可以正常渲染的。React 会取出数组的每一项进行渲染。你会在页面上看到渲染结果 1 2 3。
  - 如果需要渲染的列表（数组）中包含 React 元素，则必须给元素加上 key，否则会报错。
  - 如果需要渲染的累表（数组）中包含无法渲染的内容，比如 null、undefined，React 会忽略它们。比如 `{[1, 2, 3, null, undefined]}` 最终会渲染 1 2 3。
  - 如果要渲染的列表（数组）中包含普通对象，比如 `{ title: 'Cabbage', isFruit: false, id: 1 }`，那么会报错，对象无法直接渲染。通常会使用 `arr.map` 来对对象数组 `arr` 做一个映射处理，将每一个对象映射为对应的 React 元素，然后渲染 React 元素列表。
  

## 2. dangerouslySetInnerHTML

- [ ] [0016. dangerouslySetInnerHTML](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md) <!-- [locale](./0016.%20dangerouslySetInnerHTML/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#1--links-10)
  - [2. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#2--notes-1)
  - [3. 💻 dangerouslySetInnerHTML 的基本使用](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#3--dangerouslysetinnerhtml-的基本使用)
  - [4. 🤖 请介绍一下 dangerouslySetInnerHTML](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#4--请介绍一下-dangerouslysetinnerhtml)
    - [4.1. 为什么需要 `dangerouslySetInnerHTML`？](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#41-为什么需要-dangerouslysetinnerhtml)
    - [4.2. 基本用法](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#42-基本用法-1)
    - [4.3. 安全注意事项](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#43-安全注意事项)
    - [4.4. 使用示例](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#44-使用示例)
      - [4.4.1. 1. 1. 1. 1. 安装 `DOMPurify`](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#441-1-1-1-1-安装-dompurify)
      - [4.4.2. 2. 2. 2. 2. 示例代码](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#442-2-2-2-2-示例代码)
    - [4.5. 解释](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#45-解释)
    - [4.6. 运行结果](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#46-运行结果)
    - [4.7. 总结](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#47-总结)
  - 在 JSX 中，使用 dangerouslySetInnerHTML 可以在组件中直接插入 html 标签。
  

## 3. ref

- [ ] [0007. ref](https://github.com/Tdahuyou/react/tree/main/0007.%20ref/README.md) <!-- [locale](./0007.%20ref/README.md) -->  
  - [1. ⏰ TODO：完善 demo，和笔记。](https://github.com/Tdahuyou/react/tree/main/0007.%20ref/README.md#1--todo完善-demo和笔记)
  

## 4. 组件篇

### 4.1. 认识组件

- [ ] [0021. 在 React 中，一个组件都有哪些部分组成？](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md) <!-- [locale](./0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md) -->  
  - [1. 🤖 在 React 中，一个组件都有哪些部分组成？](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md#1--在-react-中一个组件都有哪些部分组成)
  - ⏰ pending
  

- [ ] [0022. 函数组件概述](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md) <!-- [locale](./0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md) -->  
  - [1. 📒 函数组件的基本形式](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#1--函数组件的基本形式)
  - [2. 📒 使用箭头函数来定义组件](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#2--使用箭头函数来定义组件)
  - [3. 📒 默认 Props](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#3--默认-props)
  - [4. 📒 使用 Hooks](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#4--使用-hooks)
  - 函数组件是 React 中定义组件的一种方式，它 **使用 JavaScript 函数来创建**。
  - 与类组件不同，**函数组件通常更简洁**，并且在某些情况下性能更好。
  - 自从 React 16.8 引入 Hooks 以来，函数组件的功能得到了极大的增强，现在 **它们可以拥有 state 和生命周期方法**，这使得函数组件成为了许多新项目的首选。
  - **函数组件提供了简洁的方式来定义 React 组件，结合 Hooks，它们现在几乎可以做类组件所能做的所有事情**。由于其简单性和性能优势，函数组件已经成为现代 React 开发中的主流选择。
  

- [ ] [0023. 什么是类组件](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md) <!-- [locale](./0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md) -->  
  - [1. 🤖 什么是类组件](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#1--什么是类组件)
    - [1.1. 类组件的基本形式](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#11-类组件的基本形式)
    - [1.2. 状态（State）](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#12-状态state)
    - [1.3. 生命周期方法](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#13-生命周期方法)
    - [1.4. 默认 Props](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#14-默认-props)
    - [1.5. 总结](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#15-总结)
  - ⏰ pending
  

- [ ] [0024. 什么是单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md) <!-- [locale](./0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md) -->  
  - [1. 🤖 什么是单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#1--什么是单向数据流)
    - [1.1. 单向数据流的优点](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#11-单向数据流的优点)
    - [1.2. React 中的单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#12-react-中的单向数据流)
  - ⏰ pending
  

### 4.2. 组件名

- [ ] [0002. react 组件名的命名规则](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md) <!-- [locale](./0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#1--links-1)
  - [2. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#2--notes)
  - [3. 💻 demo - react 组件名的命名规则](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#3--demo---react-组件名的命名规则)
  - 知识点：
    - 了解在 React 中，书写标签名的规范。
  - 在 React 中，**自定义组件名必须以大写字母开头**，而 **HTML 标签名则必须以小写字母开头**，否则将导致错误或警告。
  

### 4.3. 样式

- [ ] [0004. 使用 className 添加样式名](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md) <!-- [locale](./0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#1--links-3)
  - [2. 📒 添加样式](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#2--添加样式)
  - [3. 🤔 问：为什么不直接使用 class 来添加样式，而是使用 className 呢？](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#3--问为什么不直接使用-class-来添加样式而是使用-classname-呢)
  - [4. 💻 demo - className 基本使用](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#4--demo---classname-基本使用)
  - 在 React 中，我们通过使用 JSX 语法来定义组件模板，在组件模板中，我们可以使用 className 来指定一个 CSS 的 class。
    - ✔ `<img className="avatar" />`
    - ✖ `<img class="avatar" />`
  

### 4.4. 属性

### 4.5. 了解属性的基本使用

- [ ] [0019. 组件属性的传递和接收](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md) <!-- [locale](./0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md) -->  
  - [1. 💻 函数组件和类组件的属性传递](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md#1--函数组件和类组件的属性传递)
  - [2. 🤖 为什么控制台有 4 次输出？](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md#2--为什么控制台有-4-次输出)
  - Props 是从父组件传递给子组件的数据。
  - 属性是只读的，意味着子组件不能修改接收到的 props。
  - 对于函数组件，属性会作为一个对象的属性，传递给函数的参数。
  - 对于类组件，属性会作为一个对象的属性，传递给构造函数的参数。
  

### 4.6. 通过 children 属性传递内容
- [ ] [0005. 通过 props 和 children 来传递元素内容](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md) <!-- [locale](./0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md) -->  
  - [1. 📒 对比 vue 中的 slot](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#1--对比-vue-中的-slot)
  - [2. 📒 传递元素内容](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#2--传递元素内容)
  - [3. 💻 demo](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#3--demo)
  - 在 React 中，可以通过 `props.children` 传递默认插槽内容，类似于 Vue 中的默认插槽；也可以通过 `props` 属性传递具名插槽内容，类似于 Vue 中的具名插槽。
  - `props.children` 可以接收任何可渲染的 React 元素，并且可以通过检查其是否存在来提供默认内容。
  - 除了 `children`，还可以使用其他 `props`（如 `content1` 和 `content2`）来传递特定的内容，并为这些 `props` 定义默认值。
  

### 4.7. 布尔属性
- [ ] [0025. 什么是布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md) <!-- [locale](./0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md) -->  
  - [1. 📒 什么是布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#1--什么是布尔属性)
  - [2. 📒 布尔属性名称的由来](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#2--布尔属性名称的由来)
  - [3. 📒 布尔属性的特点](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#3--布尔属性的特点)
  - [4. 📒 常见的布尔属性示例](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#4--常见的布尔属性示例)
  - [5. 💻 布尔属性使用示例](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#5--布尔属性使用示例)
  - [6. 💻 布尔属性在 React 中的应用](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#6--布尔属性在-react-中的应用)
    - [6.1. 注意事项](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#61-注意事项)
  

- [ ] [0026. 布尔属性的简写](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md) <!-- [locale](./0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md) -->  
  - [1. 💻 布尔属性的简写](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md#1--布尔属性的简写)
  - 如果在调用某个组件时，需要传递一个布尔属性，并且值为 true，可以简写属性名，不需要写属性值。
    - 写法1：`<Comp boolProp />`
    - 写法2：`<Comp boolProp={true} />`
    - 上述两种写法等效。
  - 注意：如果直接在页面上渲染一个 true，需要将其转为字符串类型后才能渲染出来。
    - `{true}` 不会渲染出来。
    - `{'true'}` 可以正常渲染。
  

### 4.8. 属性校验
- [ ] [0020. 组件属性的校验](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md) <!-- [locale](./0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md) -->  
  - [1. ⏰ TODO](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#1--todo)
  - [2. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#2--summary)
  - [3. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#3--links)
  - [4. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#4--notes)
  - [5. 💻 demo](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#5--demo)
  - [6. 🤖 AI](https://github.com/Tdahuyou/react/tree/main/0020.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E6%A0%A1%E9%AA%8C/README.md#6--ai)
  

### 4.9. 属性默认值

### 4.10. 状态

### 4.11. 生命周期

- [ ] [0027. 生命周期](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md) <!-- [locale](./0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md) -->  
  - [1. ⏰ TODO：待完善](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#1--todo待完善)
  - [2. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#2--summary-1)
  - [3. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#3--links-1)
  - [4. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#4--notes-1)
  - [5. 💻 demo](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#5--demo-1)
  - [6. 🤖 AI](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#6--ai-1)
  

### 4.12. hooks

### 4.13. hoc

### 4.14. 内置组件

- [ ] [0014. React.Fragment](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md) <!-- [locale](./0014.%20React.Fragment/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#1--links-8)
  - [2. 💻 React.Fragment 并不会生成真实 DOM](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#2--reactfragment-并不会生成真实-dom)
  - [3. 💻 React.Fragment 渲染列表](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#3--reactfragment-渲染列表)
  - [4. 🤖 请介绍一下 React.Fragment](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#4--请介绍一下-reactfragment)
    - [4.1. 为什么使用 `React.Fragment`？](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#41-为什么使用-reactfragment)
    - [4.2. 基本用法](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#42-基本用法)
      - [4.2.1. 1. 1. 1. 1. 使用 `<React.Fragment>` 标签](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#421-1-1-1-1-使用-reactfragment-标签)
      - [4.2.2. 2. 2. 2. 2. 使用短语法 `<></>`](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#422-2-2-2-2-使用短语法-)
    - [4.3. 传递属性](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#43-传递属性)
  - 简写形式：`<></>`
  - 并不会实际被渲染到元素结构中，仅仅是起到一个占位的作用。
  - 场景应用场景：使用 `<></>` 见多个“根元素”包裹一层，解决组件的单根问题。
  - `React.Fragment` 是 React 中的一个内置组件，它允许你将多个子元素组合在一起，而 **无需向 DOM 添加额外的节点**。
  - `<React.Fragment></React.Fragment>` 标签可以简写为 `<></>`。
  - `React.Fragment` 并不会生成真实 DOM。
  - 当你在循环中渲染多个元素时，你需要为每一个元素分配一个 key。如果这个元素为 Fragment 时，则需要使用普通的 JSX 语法来提供 key 属性。
  

## 5. 状态管理

### 5.1. redux

- [ ] [0028. redux 的基本使用](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 🔗 redux 官方文档](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--redux-官方文档)
  - [2. 📒 redux 是什么？](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--redux-是什么)
  - [3. 📒 redux 核心概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--redux-核心概念)
  - [4. 📒 纯函数](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#4--纯函数)
  - [5. 📒 redux 的工具和生态系统](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#5--redux-的工具和生态系统)
  - [6. 📒 本节会用到的一些依赖](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#6--本节会用到的一些依赖)
  - [7. 💻 demos.1 - 脱离 react 单独使用 redux 来管理状态数据](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#7--demos1---脱离-react-单独使用-redux-来管理状态数据)
  - [8. 💻 demos.2 - redux 的基本使用 - createStore 版](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#8--demos2---redux-的基本使用---createstore-版)
  - [9. 💻 demos.2 - redux 的基本使用 - @reduxjs/toolkit 版](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#9--demos2---redux-的基本使用---reduxjstoolkit-版)
  - [10. 💻 demos.2 - redux 的基本使用 - @reduxjs/toolkit 版（模块化）](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#10--demos2---redux-的基本使用---reduxjstoolkit-版模块化)
  - [11. 🤖 我想要深入了解有关 redux 的内容，应该问你哪些问题呢？](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#11--我想要深入了解有关-redux-的内容应该问你哪些问题呢)
    - [11.1. 基本概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#111-基本概念)
    - [11.2. 高级概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#112-高级概念)
    - [11.3. 最佳实践](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#113-最佳实践)
    - [11.4. 实际应用](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#114-实际应用)
    - [11.5. 其他问题](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#115-其他问题)
  - 理解 redux 是什么
  - 了解 redux 与 react 结合使用的两种常见方式
    - 传统的 createStore 方式
    - 新版的 redux-toolkit 方式
  - 你可以脱离 react，单独使用 redux 来管理状态数据。
  

- [ ] [0029. 为什么说前端的 mvc 已死](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md) <!-- [locale](./0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#1--links-12)
  - [2. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#2--notes-2)
  - [3. 🤖 为什么说前端的 mvc 已死？](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#3--为什么说前端的-mvc-已死)
    - [3.1. **复杂的状态管理**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#31-复杂的状态管理)
    - [3.2. **组件化**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#32-组件化)
    - [3.3. **单向数据流**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#33-单向数据流)
    - [3.4. **虚拟 DOM**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#34-虚拟-dom)
    - [3.5. **社区和生态系统**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#35-社区和生态系统)
    - [3.6. **开发体验**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#36-开发体验)
    - [3.7. 总结](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#37-总结)
  - 理解为什么前端不适用 mvc 模式。
  

- [ ] [0030. redux 中的 action](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md) <!-- [locale](./0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#1--links-13)
  - [2. 💻 脱离 react 单独使用 redux 来管理状态数据](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#2--脱离-react-单独使用-redux-来管理状态数据)
  - [3. 📒 action 是什么？有什么用？](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#3--action-是什么有什么用)
  - [4. 📒 redux 部分源码 - 判断 action 是否合法的逻辑](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#4--redux-部分源码---判断-action-是否合法的逻辑)
  - [5. 💻 action 必须是一个平面对象](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#5--action-必须是一个平面对象)
  - [6. 💻 action 的 type 属性必须是 string 类型](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#6--action-的-type-属性必须是-string-类型)
  - [7. 📒 type 的硬编码问题](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#7--type-的硬编码问题)
  - [8. 📒 action 的创建函数](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#8--action-的创建函数)
  - [9. 📒 `bindActionCreators`](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#9--bindactioncreators)
  - [10. 💻 action 的创建函数以及工具方法 `bindActionCreators`](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#10--action-的创建函数以及工具方法-bindactioncreators)
  - [11. 🤖 如何验证一个对象是否是 plain-object？](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#11--如何验证一个对象是否是-plain-object)
  - [12. 🤖 为什么 type 必须是 string 类型，符号类型不行](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#12--为什么-type-必须是-string-类型符号类型不行)
  - 理解 action 的本质
  - 编写 action 时的一些常见写法
  - action 的创建函数
  - 学会使用 `bindActionCreators` 来简化 action 的分发流程
  - 学习 redux 的源码，比如：关于 action 的判断逻辑 `isAction` 的实现、关于 `bindActionCreators` 的实现源码。
  

- [ ] [0031. store、reducer、action 三者之间的关系](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md) <!-- [locale](./0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md) -->  
  - [1. 📒 store](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#1--store)
  - [2. 📒 reducer](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#2--reducer)
  - [3. 📒 action](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#3--action)
  - 了解 redux 中的 3 个核心组成部分 store、reducer、action，并清楚它们之间的关系。
  

## 6. 第三方库

- [ ] [0006. react-modal](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal/README.md) <!-- [locale](./0006.%20react-modal/README.md) -->  
  - [1. 💻 demos.1 - 认识 contentLabel 属性](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal/README.md#1--demos1---认识-contentlabel-属性)
  - [2. 💻 demos.2 - 封装一个简单的 dialog 组件](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal/README.md#2--demos2---封装一个简单的-dialog-组件)
  - `react-modal` 是一个常用的 React 弹出模态框库，它提供了许多配置选项来定制模态框的行为和样式。
  - `react-modal` 使用起来非常简单的一个第三方组件，结合官方文档描述来使用即可。
  - 笔记中记录了一些 `react-modal` 的基本使用示例，以及在使用这个组件时比较模糊的一些点，比如 contentLabel 属性（是用来做特殊用户的阅读体验优化的）。
  - links
    - https://www.npmjs.com/package/react-modal?activeTab=readme - npm react-modal
    - https://github.com/reactjs/react-modal - github react-modal
  

- [ ] [0012. react-monaco-editor 基本使用](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--links-7)
  - [2. 📒 先说说结论](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--先说说结论)
  - [3. 📒 单词 monaco](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--单词-monaco)
  - [4. 📒 安装 @monaco-editor/react](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#4--安装-monaco-editorreact)
  - [5. 💻 引入 Editor 组件](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#5--引入-editor-组件)
  - [6. 💻 Editor 组件的一些钩子 onChange、onMount、beforeMount、onValidate](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#6--editor-组件的一些钩子-onchangeonmountbeforemountonvalidate)
  - [7. 💻 获取编辑器的当前值的两种方式](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#7--获取编辑器的当前值的两种方式)
  - [8. 💻 将 Editor 组件设置为只读的](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#8--将-editor-组件设置为只读的)
  - [9. 💻 通过 editor 实例读写编辑器中的内容](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#9--通过-editor-实例读写编辑器中的内容)
  - [10. 💻 实战练习 - 模仿 matatastudio 的代码预览效果封装一个代码预览组件](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#10--实战练习---模仿-matatastudio-的代码预览效果封装一个代码预览组件)
  - [11. 📒 相关业务背景信息 + 遇到的坑 + 解决方案](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#11--相关业务背景信息--遇到的坑--解决方案)
    - [11.1. 解决办法 1 - 在线 - 使用代理](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#111-解决办法-1---在线---使用代理)
    - [11.2. 解决办法 2 - 在线 - 下载资源丢到自己的 CDN 上](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#112-解决办法-2---在线---下载资源丢到自己的-cdn-上)
    - [11.3. 解决办法 3 - 离线 - 手动下载相关模块](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#113-解决办法-3---离线---手动下载相关模块)
    - [11.4. 解决办法 4 - 离线 - use monaco-editor as an npm package](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#114-解决办法-4---离线---use-monaco-editor-as-an-npm-package)
  - [12. 🤖 请介绍一下 react-monaco-editor](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#12--请介绍一下-react-monaco-editor)
    - [12.1. 功能特点](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#121-功能特点)
    - [12.2. 安装](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#122-安装)
    - [12.3. 基本用法](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#123-基本用法)
    - [12.4. 高级配置](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#124-高级配置)
    - [12.5. 结论](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#125-结论)
  - [13. 🤖 monaco 名称的由来](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#13--monaco-名称的由来)
  - 通过一些 demo 介绍了 react-monaco-editor 组件的基本使用。
  - 记录了相关的业务背景，为什么会需要用到这个组件，以及在应用过程中踩的坑（公共 CDN 资源加载缓慢的问题），同时也记录了相关的解决方案。其中较大篇幅都在描述坑，以及解决方案。
  

- [ ] [0033. react-tooltip 基本使用](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--links-15)
  - [2. 📒 react-tooltip 概述](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--react-tooltip-概述)
  - [3. 📒 安装 react-tooltip](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--安装-react-tooltip)
  - [4. 📒 核心依赖的版本](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#4--核心依赖的版本)
  - [5. 📒 引入 react-tooltip](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#5--引入-react-tooltip)
  - [6. 📒 关于 css 引入的一些注意事项](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#6--关于-css-引入的一些注意事项)
  - [7. 💻 了解 react-tooltip 的基本使用](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#7--了解-react-tooltip-的基本使用)
  
  
  

- [ ] [0038. react-intl 基本使用](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--links-17)
  - [2. 📒 react-intl 简介](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--react-intl-简介)
  - [3. 🤔 ICU (International Components for Unicode) 是什么？有什么用？](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--icu-international-components-for-unicode-是什么有什么用)
    - [3.1. ICU（International Components for Unicode）简介](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#31-icuinternational-components-for-unicode简介)
    - [3.2. 核心功能](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#32-核心功能)
    - [3.3. 国际化与本地化支持](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#33-国际化与本地化支持)
    - [3.4. MessageFormat 功能](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#34-messageformat-功能)
    - [3.5. 平台与兼容性](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#35-平台与兼容性)
    - [3.6. 社区与维护](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#36-社区与维护)
    - [3.7. 总结](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#37-总结-1)
  - [4. 💻 demos.1 - react-intl 基本使用](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#4--demos1---react-intl-基本使用)
  - [5. 🔍 如何判断传入的 locale 是否是合法值](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#5--如何判断传入的-locale-是否是合法值)
  - [6. 💻 demos.1 - 特殊的 locale 值](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#6--demos1---特殊的-locale-值)
  - [7. 💻 demos.1 - useIntl、injectIntl - 使用 defineMessages 定义消息](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#7--demos1---useintlinjectintl---使用-definemessages-定义消息)
  - [8. 💻 demos.1 - 通过 intl 对象来获取国际化消息数据](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#8--demos1---通过-intl-对象来获取国际化消息数据)
  - [9. 💻 demos.2 - IntlShape 在 .ts 中的应用](https://github.com/Tdahuyou/react/tree/main/0038.%20react-intl%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#9--demos2---intlshape-在-ts-中的应用)
  - React-Intl 是一个强大的工具，可帮助开发人员轻松管理和本地化他们的 React 应用程序。
  

## 7. 工程化

- [ ] [0008. 使用 vite 快速初始化一个 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md) <!-- [locale](./0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md) -->  
  
  - [1. 🔗 vite 官网](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#1--vite-官网)
  - [2. 📒 使用 pnpm 的实际操作流程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#2--使用-pnpm-的实际操作流程)
  - [3. 📒 使用 vite 创建 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#3--使用-vite-创建-react-工程)
  - [4. 📒 启动用 vite 创建的 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#4--启动用-vite-创建的-react-工程)
  - [5. 🤖 解释命令 - `npm create vite@latest my-react-app -- --template react`](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#5--解释命令---npm-create-vitelatest-my-react-app------template-react)
    - [5.1. 整体流程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#51-整体流程)
    - [5.2. 总结](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#52-总结)
  - `npm create vite@latest my-react-app -- --template react` 这是 vite 官方提供的命令，用于创建一个 react 项目。
    - 如果不清楚这条命令的含义，可以参考一下本节中记录的 AI 对此的解释。
  - 上面这条命令太长了，不好记，其实只需要记住：`npm create vite` 即可，其他项目参数（比如项目名称、模板等）根据命令提示自行配置。
  

- [ ] [0036. 快速搭建一个基于 vite、antd 的 react 项目](https://github.com/Tdahuyou/react/tree/main/0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md) <!-- [locale](./0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md) -->  
  - [1. 🔗 antd 官方文档 - 在 vite 中使用 antd](https://github.com/Tdahuyou/react/tree/main/0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md#1--antd-官方文档---在-vite-中使用-antd)
  - [2. 📒 使用 pnpm 实现安装和初始化的流程](https://github.com/Tdahuyou/react/tree/main/0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md#2--使用-pnpm-实现安装和初始化的流程)
  - [3. 💻 demos.1 - 测试按钮组件的使用](https://github.com/Tdahuyou/react/tree/main/0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md#3--demos1---测试按钮组件的使用)
  

## 8. 小练习

- [ ] [0018. demo-图片定时切换](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md) <!-- [locale](./0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md#1--links-11)
  - [2. 💻 demo](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md#2--demo)
  - 实现一个图片定时切换的 demo，类似轮播效果。
  - 通过本节的 demo，强调了一个点 —— 由 `React.createElement` 创建的 react 元素对象是不可变的。
  

## 9. UI 组件库

- [ ] [0037. 学习 antd Message 组件的使用](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 🔗 Message 全局提示](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md#1--message-全局提示)
  - [2. 💻 demos.1 - 了解 Message 的基本使用](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md#2--demos1---了解-message-的基本使用)
  - [3. 💻 demos.2 - 理解 contextHolder 的作用](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md#3--demos2---理解-contextholder-的作用)
  - [4. 🔗 来自官方文档的回复：为什么 message 不能获取 context、redux 的内容和 ConfigProvider 的 locale/prefixCls/theme 等配置？](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md#4--来自官方文档的回复为什么-message-不能获取-contextredux-的内容和-configprovider-的-localeprefixclstheme-等配置)
  
