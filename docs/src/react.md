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
  - [9. ⏰ 待分组](#9--待分组)
<!-- endregion:toc -->

## 1. 快速入门

### 1.1. 认识 react

- [x] [0032. 什么是 react](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md) <!-- [locale](./0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#2--links)
  - [3. 📒 什么是 react](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#3--什么是-react)
  - [4. 📒 react 的特点](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#4--react-的特点)
  - [5. 📒 库 vs. 框架](https://github.com/Tdahuyou/react/tree/main/0032.%20%E4%BB%80%E4%B9%88%E6%98%AF%20react/README.md#5--库-vs-框架)
  

- [ ] [9998. react 官网链接](https://github.com/Tdahuyou/react/tree/main/9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md) <!-- [locale](./9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md) -->  
  - [1. 📝 summary](https://github.com/Tdahuyou/react/tree/main/9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md#1--summary)
  - [2. 🔗 react 官网](https://github.com/Tdahuyou/react/tree/main/9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md#2--react-官网)
  - [3. 📒 react 官方文档结构简介](https://github.com/Tdahuyou/react/tree/main/9998.%20react%20%E5%AE%98%E7%BD%91%E9%93%BE%E6%8E%A5/README.md#3--react-官方文档结构简介)
  

- [ ] [9997. react github 仓库链接](https://github.com/Tdahuyou/react/tree/main/9997.%20react%20github%20%E4%BB%93%E5%BA%93%E9%93%BE%E6%8E%A5/README.md) <!-- [locale](./9997.%20react%20github%20%E4%BB%93%E5%BA%93%E9%93%BE%E6%8E%A5/README.md) -->  
  - [1. 🔗 react github 仓库链接](https://github.com/Tdahuyou/react/tree/main/9997.%20react%20github%20%E4%BB%93%E5%BA%93%E9%93%BE%E6%8E%A5/README.md#1--react-github-仓库链接)
  

### 1.2. 推荐安装的 VSCode 插件

- [ ] [0034. eslint 插件](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md) <!-- [locale](./0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#1--summary)
  - [2. 📒 eslint 是啥？有啥用？](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#2--eslint-是啥有啥用)
  - [3. 📒 安装 ESLint 插件](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#3--安装-eslint-插件)
  - [4. 📒 配置 ESLint 基本流程](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#4--配置-eslint-基本流程)
  - [5. 💻 约束只能使用单引号，不能使用双引号](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#5--约束只能使用单引号不能使用双引号)
  - [6. 📒 注意事项](https://github.com/Tdahuyou/react/tree/main/0034.%20eslint%20%E6%8F%92%E4%BB%B6/README.md#6--注意事项)
  

- [ ] [0035. 在 vscode 中，让 Emmet 语法支持 JSX](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md) <!-- [locale](./0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#2--links)
  - [3. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#3--notes)
  - [4. 💻 测试效果](https://github.com/Tdahuyou/react/tree/main/0035.%20%E5%9C%A8%20vscode%20%E4%B8%AD%EF%BC%8C%E8%AE%A9%20Emmet%20%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81%20JSX/README.md#4--测试效果)
  

### 1.3. 第一个 react 应用

- [x] [0001. Hello World](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md) <!-- [locale](./0001.%20Hello%20World/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#2--links)
  - [3. 📒 通过 CDN 的方式引入相关依赖](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#3--通过-cdn-的方式引入相关依赖)
  - [4. 📒 API 描述](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#4--api-描述)
  - [5. 💻 demo - 在页面上渲染出 Hello World](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#5--demo---在页面上渲染出-hello-world)
  - [6. 💻 demo - 熟悉 React.createElement 的参数](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#6--demo---熟悉-reactcreateelement-的参数)
  - [7. 💻 demo - 使用 JSX 来简写](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#7--demo---使用-jsx-来简写)
  - [8. 🤔 思考：`React.createElement` 跟 `document.createElement` 是一样的吗？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#8--思考reactcreateelement-跟-documentcreateelement-是一样的吗)
  - [9. 🤔 思考：`react` 核心库和 `react-dom` 库之间的关系是？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#9--思考react-核心库和-react-dom-库之间的关系是)
  - [10. 🤔 思考：为什么一旦使用了 `JSX` 语法，就必须要引入 `react` 核心库？](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#10--思考为什么一旦使用了-jsx-语法就必须要引入-react-核心库)
  - [11. 🤔 思考：通过脚手架（比如 vite、umi、create-react-app）来搭建工程 vs. 通过（.html）页面的方式来直接引入 react 相关的库](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#11--思考通过脚手架比如-viteumicreate-react-app来搭建工程-vs-通过html页面的方式来直接引入-react-相关的库)
  - [12. 🤖 请介绍一下 script 标签身上的 type 属性](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#12--请介绍一下-script-标签身上的-type-属性)
    - [12.1. **标准用法**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#121-**标准用法**)
    - [12.2. **模块**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#122-**模块**)
    - [12.3. **非 JavaScript 类型**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#123-**非-javascript-类型**)
    - [12.4. **历史用法**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#124-**历史用法**)
    - [12.5. **实用考虑**](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#125-**实用考虑**)
  - [13. 🤖 请介绍一下 script 标签身上的 crossorigin 属性](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#13--请介绍一下-script-标签身上的-crossorigin-属性)
    - [13.1. 值](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#131-值)
    - [13.2. 作用](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#132-作用)
    - [13.3. 示例](https://github.com/Tdahuyou/react/tree/main/0001.%20Hello%20World/README.md#133-示例)
  

### 1.4. jsx

- [x] [0013. 什么是 JSX](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md) <!-- [locale](./0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#1--summary)
  - [2. 📒 JSX 是什么？](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#2--jsx-是什么)
  - [3. 📒 JSX 的本质](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#3--jsx-的本质)
  - [4. 📒 必须单根](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#4--必须单根)
  - [5. 📒 必须要有结束标记](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#5--必须要有结束标记)
  - [6. 📒 JSX 的基本特点](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#6--jsx-的基本特点)
  - [7. 💻 一个简单的 React 组件示例](https://github.com/Tdahuyou/react/tree/main/0013.%20%E4%BB%80%E4%B9%88%E6%98%AF%20JSX/README.md#7--一个简单的-react-组件示例)
  

- [x] [0003. html to jsx 在线转换](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md) <!-- [locale](./0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md#2--links)
  - [3. 📒 html-to-jsx 在线转换器](https://github.com/Tdahuyou/react/tree/main/0003.%20html%20to%20jsx%20%E5%9C%A8%E7%BA%BF%E8%BD%AC%E6%8D%A2/README.md#3--html-to-jsx-在线转换器)
  

- [x] [0015. 在 JSX 中使用注释](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md) <!-- [locale](./0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#2--links)
  - [3. 📒 JSX 中注释的写法](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#3--jsx-中注释的写法)
  - [4. 💻 demo1 - 在 JSX 中使用注释](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#4--demo1---在-jsx-中使用注释)
  - [5. 💻 demo2 - jsx-eslint 的智能提示](https://github.com/Tdahuyou/react/tree/main/0015.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%B3%A8%E9%87%8A/README.md#5--demo2---jsx-eslint-的智能提示)
  

- [x] [0009. 动态插值 - 在 jsx 中使用大括号实现](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md) <!-- [locale](./0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#2--links)
  - [3. 📒 在 JSX 中使用 JS 表达式](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#3--在-jsx-中使用-js-表达式)
  - [4. 🤖 Hedy Lamarr 是谁？](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC%20-%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0/README.md#4--hedy-lamarr-是谁)
  

- [x] [0017. 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md) <!-- [locale](./0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#1--summary)
  - [2. 💻 demo - 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#2--demo---在-jsx-中书写内联样式-style)
  - [3. 💻 demo - 在 JSX 中的 style 不能写成字符串形式](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#3--demo---在-jsx-中的-style-不能写成字符串形式)
  - [4. 🤖 在 JSX 中书写内联样式 style](https://github.com/Tdahuyou/react/tree/main/0017.%20%E5%9C%A8%20JSX%20%E4%B8%AD%E4%B9%A6%E5%86%99%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F%20style/README.md#4--在-jsx-中书写内联样式-style)
  

#### 1.4.1. 条件渲染、列表渲染

- [ ] [0010. 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md) <!-- [locale](./0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#2--links)
  - [3. 📝 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#3--条件渲染)
  - [4. 💻 demo - 条件渲染](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#4--demo---条件渲染)
  - [5. 📝 对比 vue](https://github.com/Tdahuyou/react/tree/main/0010.%20%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93/README.md#5--对比-vue)
  

- [ ] [0011. 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md) <!-- [locale](./0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#2--links)
  - [3. 🔗 en-words](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#3--en-words)
  - [4. 📝 doc - 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#4--doc---列表渲染)
  - [5. 💻 列表渲染](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#5--列表渲染)
  - [6. 📒 “列表渲染”中的“列表”是什么？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#6--列表渲染中的列表是什么)
  - [7. 🤖 列表渲染如果没有给定 id，react 会报错，请问 react 是如何识别列表渲染的？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#7--列表渲染如果没有给定-idreact-会报错请问-react-是如何识别列表渲染的)
    - [7.1. 为什么需要 `key`？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#71-为什么需要-key)
    - [7.2. 如何提供 `key`](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#72-如何提供-key)
    - [7.3. 错误示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#73-错误示例)
    - [7.4. 总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#74-总结)
  - [8. 🤖 如果把每一个 li 都写出来，而不是使用 map，那么不指定 id 会报错吗？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#8--如果把每一个-li-都写出来而不是使用-map那么不指定-id-会报错吗)
    - [8.1. 示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#81-示例)
    - [8.2. 总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#82-总结)
  - [9. 🤖 如果要渲染的内容是一个数组，并且数组的某些项是 react 元素，那么 react 会要求每一个 react 元素都需要具备 key 对吗？](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#9--如果要渲染的内容是一个数组并且数组的某些项是-react-元素那么-react-会要求每一个-react-元素都需要具备-key-对吗)
    - [9.1. 为什么需要 `key`](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#91-为什么需要-key)
    - [9.2. 示例](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#92-示例)
    - [9.3. 动态生成的元素](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#93-动态生成的元素)
    - [9.4. 总结](https://github.com/Tdahuyou/react/tree/main/0011.%20%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93/README.md#94-总结)
  

## 2. dangerouslySetInnerHTML

- [x] [0016. dangerouslySetInnerHTML](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md) <!-- [locale](./0016.%20dangerouslySetInnerHTML/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#2--links)
  - [3. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#3--notes)
  - [4. 💻 dangerouslySetInnerHTML 的基本使用](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#4--dangerouslysetinnerhtml-的基本使用)
  - [5. 🤖 请介绍一下 dangerouslySetInnerHTML](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#5--请介绍一下-dangerouslysetinnerhtml)
    - [5.1. 为什么需要 `dangerouslySetInnerHTML`？](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#51-为什么需要-dangerouslysetinnerhtml)
    - [5.2. 基本用法](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#52-基本用法)
    - [5.3. 安全注意事项](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#53-安全注意事项)
    - [5.4. 使用示例](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#54-使用示例)
      - [5.4.1. 1. 1. 1. 1. 安装 `DOMPurify`](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#541-1-1-1-1-安装-dompurify)
      - [5.4.2. 2. 2. 2. 2. 示例代码](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#542-2-2-2-2-示例代码)
    - [5.5. 解释](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#55-解释)
    - [5.6. 运行结果](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#56-运行结果)
    - [5.7. 总结](https://github.com/Tdahuyou/react/tree/main/0016.%20dangerouslySetInnerHTML/README.md#57-总结)
  

## 3. ref

- [ ] [0007. ref](https://github.com/Tdahuyou/react/tree/main/0007.%20ref/README.md) <!-- [locale](./0007.%20ref/README.md) -->  
  - [1. ⏰ TODO：完善 demo，和笔记。](https://github.com/Tdahuyou/react/tree/main/0007.%20ref/README.md#1--todo完善-demo和笔记)
  

## 4. 组件篇

### 4.1. 认识组件

- [x] [0021. 在 React 中，一个组件都有哪些部分组成？](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md) <!-- [locale](./0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md#1--summary)
  - [2. 🤖 在 React 中，一个组件都有哪些部分组成？](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F/README.md#2--在-react-中一个组件都有哪些部分组成)
  

- [x] [0022. 函数组件概述](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md) <!-- [locale](./0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#1--summary)
  - [2. 📒 函数组件的基本形式](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#2--函数组件的基本形式)
  - [3. 📒 使用箭头函数来定义组件](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#3--使用箭头函数来定义组件)
  - [4. 📒 默认 Props](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#4--默认-props)
  - [5. 📒 使用 Hooks](https://github.com/Tdahuyou/react/tree/main/0022.%20%E5%87%BD%E6%95%B0%E7%BB%84%E4%BB%B6%E6%A6%82%E8%BF%B0/README.md#5--使用-hooks)
  

- [x] [0023. 什么是类组件](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md) <!-- [locale](./0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#1--summary)
  - [2. 🤖 什么是类组件](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#2--什么是类组件)
    - [2.1. 类组件的基本形式](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#21-类组件的基本形式)
    - [2.2. 状态（State）](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#22-状态state)
    - [2.3. 生命周期方法](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#23-生命周期方法)
    - [2.4. 默认 Props](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#24-默认-props)
    - [2.5. 总结](https://github.com/Tdahuyou/react/tree/main/0023.%20%E4%BB%80%E4%B9%88%E6%98%AF%E7%B1%BB%E7%BB%84%E4%BB%B6/README.md#25-总结)
  

- [x] [0024. 什么是单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md) <!-- [locale](./0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#1--summary)
  - [2. 🤖 什么是单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#2--什么是单向数据流)
    - [2.1. 单向数据流的优点](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#21-单向数据流的优点)
    - [2.2. React 中的单向数据流](https://github.com/Tdahuyou/react/tree/main/0024.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81/README.md#22-react-中的单向数据流)
  

### 4.2. 组件名

- [ ] [0002. react 组件名的命名规则](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md) <!-- [locale](./0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#2--links)
  - [3. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#3--notes)
  - [4. 💻 demo - react 组件名的命名规则](https://github.com/Tdahuyou/react/tree/main/0002.%20react%20%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99/README.md#4--demo---react-组件名的命名规则)
  

### 4.3. 样式

- [ ] [0004. 使用 className 添加样式名](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md) <!-- [locale](./0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#2--links)
  - [3. 📒 添加样式](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#3--添加样式)
  - [4. 🤔 问：为什么不直接使用 class 来添加样式，而是使用 className 呢？](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#4--问为什么不直接使用-class-来添加样式而是使用-classname-呢)
  - [5. 💻 demo - className 基本使用](https://github.com/Tdahuyou/react/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20className%20%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F%E5%90%8D/README.md#5--demo---classname-基本使用)
  

### 4.4. 属性

### 4.5. 了解属性的基本使用

- [x] [0019. 组件属性的传递和接收](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md) <!-- [locale](./0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md#1--summary)
  - [2. 💻 函数组件和类组件的属性传递](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md#2--函数组件和类组件的属性传递)
  - [3. 🤖 为什么控制台有 4 次输出？](https://github.com/Tdahuyou/react/tree/main/0019.%20%E7%BB%84%E4%BB%B6%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BC%A0%E9%80%92%E5%92%8C%E6%8E%A5%E6%94%B6/README.md#3--为什么控制台有-4-次输出)
  

### 4.6. 通过 children 属性传递内容
- [ ] [0005. 通过 props 和 children 来传递元素内容](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md) <!-- [locale](./0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#1--summary)
  - [2. 📒 对比 vue 中的 slot](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#2--对比-vue-中的-slot)
  - [3. 📒 传递元素内容](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#3--传递元素内容)
  - [4. 💻 demo](https://github.com/Tdahuyou/react/tree/main/0005.%20%E9%80%9A%E8%BF%87%20props%20%E5%92%8C%20children%20%E6%9D%A5%E4%BC%A0%E9%80%92%E5%85%83%E7%B4%A0%E5%86%85%E5%AE%B9/README.md#4--demo)
  

### 4.7. 布尔属性
- [x] [0025. 什么是布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md) <!-- [locale](./0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md) -->  
  - [1. 📒 什么是布尔属性](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#1--什么是布尔属性)
  - [2. 📒 布尔属性名称的由来](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#2--布尔属性名称的由来)
  - [3. 📒 布尔属性的特点](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#3--布尔属性的特点)
  - [4. 📒 常见的布尔属性示例](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#4--常见的布尔属性示例)
  - [5. 💻 布尔属性使用示例](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#5--布尔属性使用示例)
  - [6. 💻 布尔属性在 React 中的应用](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#6--布尔属性在-react-中的应用)
    - [6.1. 注意事项](https://github.com/Tdahuyou/react/tree/main/0025.%20%E4%BB%80%E4%B9%88%E6%98%AF%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7/README.md#61-注意事项)
  

- [x] [0026. 布尔属性的简写](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md) <!-- [locale](./0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md#1--summary)
  - [2. 💻 布尔属性的简写](https://github.com/Tdahuyou/react/tree/main/0026.%20%E5%B8%83%E5%B0%94%E5%B1%9E%E6%80%A7%E7%9A%84%E7%AE%80%E5%86%99/README.md#2--布尔属性的简写)
  

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
  - [2. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#2--summary)
  - [3. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#3--links)
  - [4. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#4--notes)
  - [5. 💻 demo](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#5--demo)
  - [6. 🤖 AI](https://github.com/Tdahuyou/react/tree/main/0027.%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/README.md#6--ai)
  

### 4.12. hooks

### 4.13. hoc

### 4.14. 内置组件

- [ ] [0014. React.Fragment](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md) <!-- [locale](./0014.%20React.Fragment/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#2--links)
  - [3. 💻 React.Fragment 并不会生成真实 DOM](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#3--reactfragment-并不会生成真实-dom)
  - [4. 💻 React.Fragment 渲染列表](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#4--reactfragment-渲染列表)
  - [5. 🤖 请介绍一下 React.Fragment](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#5--请介绍一下-reactfragment)
    - [5.1. 为什么使用 `React.Fragment`？](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#51-为什么使用-reactfragment)
    - [5.2. 基本用法](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#52-基本用法)
      - [5.2.1. 1. 1. 1. 1. 使用 `<React.Fragment>` 标签](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#521-1-1-1-1-使用-<reactfragment>-标签)
      - [5.2.2. 2. 2. 2. 2. 使用短语法 `<></>`](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#522-2-2-2-2-使用短语法-<><>)
    - [5.3. 传递属性](https://github.com/Tdahuyou/react/tree/main/0014.%20React.Fragment/README.md#53-传递属性)
  

## 5. 状态管理

### 5.1. redux

- [x] [0028. redux 的基本使用](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--summary)
  - [2. 🔗 redux 官方文档](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--redux-官方文档)
  - [3. 📒 redux 是什么？](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--redux-是什么)
  - [4. 📒 redux 核心概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#4--redux-核心概念)
  - [5. 📒 纯函数](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#5--纯函数)
  - [6. 📒 redux 的工具和生态系统](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#6--redux-的工具和生态系统)
  - [7. 📒 本节会用到的一些依赖](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#7--本节会用到的一些依赖)
  - [8. 💻 demos.1 - 脱离 react 单独使用 redux 来管理状态数据](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#8--demos1---脱离-react-单独使用-redux-来管理状态数据)
  - [9. 💻 demos.2 - redux 的基本使用 - createStore 版](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#9--demos2---redux-的基本使用---createstore-版)
  - [10. 💻 demos.2 - redux 的基本使用 - @reduxjs/toolkit 版](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#10--demos2---redux-的基本使用---@reduxjstoolkit-版)
  - [11. 💻 demos.2 - redux 的基本使用 - @reduxjs/toolkit 版（模块化）](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#11--demos2---redux-的基本使用---@reduxjstoolkit-版模块化)
  - [12. 🤖 我想要深入了解有关 redux 的内容，应该问你哪些问题呢？](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#12--我想要深入了解有关-redux-的内容应该问你哪些问题呢)
    - [12.1. 基本概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#121-基本概念)
    - [12.2. 高级概念](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#122-高级概念)
    - [12.3. 最佳实践](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#123-最佳实践)
    - [12.4. 实际应用](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#124-实际应用)
    - [12.5. 其他问题](https://github.com/Tdahuyou/react/tree/main/0028.%20redux%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#125-其他问题)
  

- [ ] [0029. 为什么说前端的 mvc 已死](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md) <!-- [locale](./0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#2--links)
  - [3. 📒 notes](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#3--notes)
  - [4. 🤖 为什么说前端的 mvc 已死？](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#4--为什么说前端的-mvc-已死)
    - [4.1. **复杂的状态管理**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#41-**复杂的状态管理**)
    - [4.2. **组件化**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#42-**组件化**)
    - [4.3. **单向数据流**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#43-**单向数据流**)
    - [4.4. **虚拟 DOM**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#44-**虚拟-dom**)
    - [4.5. **社区和生态系统**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#45-**社区和生态系统**)
    - [4.6. **开发体验**](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#46-**开发体验**)
    - [4.7. 总结](https://github.com/Tdahuyou/react/tree/main/0029.%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E5%89%8D%E7%AB%AF%E7%9A%84%20mvc%20%E5%B7%B2%E6%AD%BB/README.md#47-总结)
  

- [x] [0030. redux 中的 action](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md) <!-- [locale](./0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#2--links)
  - [3. 💻 脱离 react 单独使用 redux 来管理状态数据](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#3--脱离-react-单独使用-redux-来管理状态数据)
  - [4. 📒 action 是什么？有什么用？](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#4--action-是什么有什么用)
  - [5. 📒 redux 部分源码 - 判断 action 是否合法的逻辑](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#5--redux-部分源码---判断-action-是否合法的逻辑)
  - [6. 💻 action 必须是一个平面对象](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#6--action-必须是一个平面对象)
  - [7. 💻 action 的 type 属性必须是 string 类型](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#7--action-的-type-属性必须是-string-类型)
  - [8. 📒 type 的硬编码问题](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#8--type-的硬编码问题)
  - [9. 📒 action 的创建函数](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#9--action-的创建函数)
  - [10. 📒 `bindActionCreators`](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#10--bindactioncreators)
  - [11. 💻 action 的创建函数以及工具方法 `bindActionCreators`](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#11--action-的创建函数以及工具方法-bindactioncreators)
  - [12. 🤖 如何验证一个对象是否是 plain-object？](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#12--如何验证一个对象是否是-plain-object)
  - [13. 🤖 为什么 type 必须是 string 类型，符号类型不行](https://github.com/Tdahuyou/react/tree/main/0030.%20redux%20%E4%B8%AD%E7%9A%84%20action/README.md#13--为什么-type-必须是-string-类型符号类型不行)
  

- [ ] [0031. store、reducer、action 三者之间的关系](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md) <!-- [locale](./0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#1--summary)
  - [2. 📒 store](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#2--store)
  - [3. 📒 reducer](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#3--reducer)
  - [4. 📒 action](https://github.com/Tdahuyou/react/tree/main/0031.%20store%E3%80%81reducer%E3%80%81action%20%E4%B8%89%E8%80%85%E4%B9%8B%E9%97%B4%E7%9A%84%E5%85%B3%E7%B3%BB/README.md#4--action)
  

## 6. 第三方库

- [ ] [0006. react-modal 的基本使用](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--links)
  - [3. 📒 认识 contentLabel 属性](https://github.com/Tdahuyou/react/tree/main/0006.%20react-modal%20%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--认识-contentlabel-属性)
  

- [x] [0012. react-monaco-editor 基本使用](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--links)
  - [3. 📒 先说说结论](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--先说说结论)
  - [4. 📒 单词 monaco](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#4--单词-monaco)
  - [5. 📒 安装 @monaco-editor/react](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#5--安装-@monaco-editorreact)
  - [6. 💻 引入 Editor 组件](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#6--引入-editor-组件)
  - [7. 💻 Editor 组件的一些钩子 onChange、onMount、beforeMount、onValidate](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#7--editor-组件的一些钩子-onchangeonmountbeforemountonvalidate)
  - [8. 💻 获取编辑器的当前值的两种方式](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#8--获取编辑器的当前值的两种方式)
  - [9. 💻 将 Editor 组件设置为只读的](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#9--将-editor-组件设置为只读的)
  - [10. 💻 通过 editor 实例读写编辑器中的内容](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#10--通过-editor-实例读写编辑器中的内容)
  - [11. 💻 实战练习 - 模仿 matatastudio 的代码预览效果封装一个代码预览组件](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#11--实战练习---模仿-matatastudio-的代码预览效果封装一个代码预览组件)
  - [12. 📒 相关业务背景信息 + 遇到的坑 + 解决方案](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#12--相关业务背景信息-+-遇到的坑-+-解决方案)
    - [12.1. 解决办法 1 - 在线 - 使用代理](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#121-解决办法-1---在线---使用代理)
    - [12.2. 解决办法 2 - 在线 - 下载资源丢到自己的 CDN 上](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#122-解决办法-2---在线---下载资源丢到自己的-cdn-上)
    - [12.3. 解决办法 3 - 离线 - 手动下载相关模块](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#123-解决办法-3---离线---手动下载相关模块)
    - [12.4. 解决办法 4 - 离线 - use monaco-editor as an npm package](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#124-解决办法-4---离线---use-monaco-editor-as-an-npm-package)
  - [13. 🤖 请介绍一下 react-monaco-editor](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#13--请介绍一下-react-monaco-editor)
    - [13.1. 功能特点](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#131-功能特点)
    - [13.2. 安装](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#132-安装)
    - [13.3. 基本用法](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#133-基本用法)
    - [13.4. 高级配置](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#134-高级配置)
    - [13.5. 结论](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#135-结论)
  - [14. 🤖 monaco 名称的由来](https://github.com/Tdahuyou/react/tree/main/0012.%20react-monaco-editor%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#14--monaco-名称的由来)
  

- [x] [0033. react-tooltip 基本使用](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#2--links)
  - [3. 📒 react-tooltip 概述](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#3--react-tooltip-概述)
  - [4. 📒 安装 react-tooltip](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#4--安装-react-tooltip)
  - [5. 📒 核心依赖的版本](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#5--核心依赖的版本)
  - [6. 📒 引入 react-tooltip](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#6--引入-react-tooltip)
  - [7. 📒 关于 css 引入的一些注意事项](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#7--关于-css-引入的一些注意事项)
  - [8. 💻 了解 react-tooltip 的基本使用](https://github.com/Tdahuyou/react/tree/main/0033.%20react-tooltip%20%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/README.md#8--了解-react-tooltip-的基本使用)
  

## 7. 工程化

- [x] [0008. 使用 vite 快速初始化一个 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md) <!-- [locale](./0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md) -->  
  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#1--summary)
  - [2. 🔗 vite 官网](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#2--vite-官网)
  - [3. 📒 使用 pnpm 的实际操作流程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#3--使用-pnpm-的实际操作流程)
  - [4. 📒 使用 vite 创建 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#4--使用-vite-创建-react-工程)
  - [5. 📒 启动用 vite 创建的 react 工程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#5--启动用-vite-创建的-react-工程)
  - [6. 🤖 解释命令 - `npm create vite@latest my-react-app -- --template react`](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#6--解释命令---npm-create-vite@latest-my-react-app------template-react)
    - [6.1. 整体流程](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#61-整体流程)
    - [6.2. 总结](https://github.com/Tdahuyou/react/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20vite%20%E5%BF%AB%E9%80%9F%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%80%E4%B8%AA%20react%20%E5%B7%A5%E7%A8%8B/README.md#62-总结)
  

- [ ] [0036. 快速搭建一个基于 vite、antd 的 react 项目](https://github.com/Tdahuyou/react/tree/main/0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md) <!-- [locale](./0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md) -->  
  - [1. 🔗 antd 官方文档 - 在 vite 中使用 antd](https://github.com/Tdahuyou/react/tree/main/0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md#1--antd-官方文档---在-vite-中使用-antd)
  - [2. 📒 使用 pnpm 实现安装和初始化的流程](https://github.com/Tdahuyou/react/tree/main/0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md#2--使用-pnpm-实现安装和初始化的流程)
  - [3. 💻 demos.1 - 测试按钮组件的使用](https://github.com/Tdahuyou/react/tree/main/0036.%20%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%9F%BA%E4%BA%8E%20vite%E3%80%81antd%20%E7%9A%84%20react%20%E9%A1%B9%E7%9B%AE/README.md#3--demos1---测试按钮组件的使用)
  

## 8. 小练习

- [x] [0018. demo-图片定时切换](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md) <!-- [locale](./0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md) -->  
  - [1. 📝 Summary](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md#1--summary)
  - [2. 🔗 links](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md#2--links)
  - [3. 💻 demo](https://github.com/Tdahuyou/react/tree/main/0018.%20demo-%E5%9B%BE%E7%89%87%E5%AE%9A%E6%97%B6%E5%88%87%E6%8D%A2/README.md#3--demo)
  

## 9. ⏰ 待分组

- [ ] [0037. 学习 antd Message 组件的使用](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md) <!-- [locale](./0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md) -->  
  - [1. 🔗 Message 全局提示](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md#1--message-全局提示)
  - [2. 💻 demos.1 - 了解 Message 的基本使用](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md#2--demos1---了解-message-的基本使用)
  - [3. 💻 demos.2 - 理解 contextHolder 的作用](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md#3--demos2---理解-contextholder-的作用)
  - [4. 🔗 来自官方文档的回复：为什么 message 不能获取 context、redux 的内容和 ConfigProvider 的 locale/prefixCls/theme 等配置？](https://github.com/Tdahuyou/react/tree/main/0037.%20%E5%AD%A6%E4%B9%A0%20antd%20Message%20%E7%BB%84%E4%BB%B6%E7%9A%84%E4%BD%BF%E7%94%A8/README.md#4--来自官方文档的回复为什么-message-不能获取-contextredux-的内容和-configprovider-的-localeprefixclstheme-等配置)
  
