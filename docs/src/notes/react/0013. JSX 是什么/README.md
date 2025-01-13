# [0013. JSX 是什么](https://github.com/Tdahuyou/react/tree/main/0013.%20JSX%20%E6%98%AF%E4%BB%80%E4%B9%88)

<!-- region:toc -->
- [1. 📒 JSX 是什么？](#1--jsx-是什么)
- [2. 📒 JSX 的本质](#2--jsx-的本质)
- [3. 📒 必须单根](#3--必须单根)
- [4. 📒 必须要有结束标记](#4--必须要有结束标记)
- [5. 📒 JSX 的基本特点](#5--jsx-的基本特点)
- [6. 💻 一个简单的 React 组件示例](#6--一个简单的-react-组件示例)
<!-- endregion:toc -->
- 简单介绍了 JSX 的一些基础知识点。

## 1. 📒 JSX 是什么？

- JSX 是 JavaScript XML 的缩写，它是 React 中用于描述用户界面的一种语法扩展。
- JSX 是由 Facebook 起草的 JS 扩展语法，是一种将 HTML 和 JavaScript 混合使用的扩展语法。
- 虽然 JSX 看起来很像 HTML，但实际上它是 JavaScript 的一部分，并且最终会被编译成纯 JavaScript 代码。
- JSX 允许开发者在 JavaScript 代码中直接编写类似 HTML 的结构，这样可以更直观地将 UI 与逻辑结合起来。

## 2. 📒 JSX 的本质

- 从数据类型层面来看，JSX 本质上是一个 JS 对象。
- JSX 会被 babel 编译，最终会被转换为 React.createElement 函数调用，是一个 React Element 对象。

## 3. 📒 必须单根

- 每个 JSX 表达式，有且仅有一个根节点。
- 如果有多个根，可以使用 `<React.Fragment></React.Fragment>` 来包裹这些根节点。
- `<React.Fragment></React.Fragment>` 可以简写为 `<></>`。

## 4. 📒 必须要有结束标记

- 每个 JSX 元素必须有结束标记（XML 规范）。

## 5. 📒 JSX 的基本特点

1. **声明式**：JSX 是声明式的，这意味着你可以描述你的应用应该显示什么，而不是如何进行 DOM 操作来改变应用的状态。这使得代码更容易理解和维护。
2. **嵌入表达式**：你可以在 JSX 中使用大括号 `{}` 来嵌入任何有效的 JavaScript 表达式。例如，变量、函数调用或计算结果都可以被嵌入到 JSX 中。
3. **属性**：JSX 属性和 HTML 属性非常相似，但有一些不同之处。例如，`class` 在 HTML 中对应 `className` 在 JSX 中，因为 `class` 是 JavaScript 的保留字。
4. **事件处理**：JSX 中的事件处理函数是以驼峰命名法（camelCase）来写的，比如 `onClick` 而不是 `onclick`。这些事件处理函数接收一个事件对象作为参数。
5. **自闭合标签**：对于没有内容的元素，如 `<img>` 或 `<input>`，JSX 支持自闭合标签，即 `<img src={imageSrc} />`。
6. **注释**：在 JSX 中添加注释需要使用花括号 `{/* ... */}`。

## 6. 💻 一个简单的 React 组件示例

下面是一个简单的 React 组件示例，展示了 JSX 的使用：

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>; // 使用了 jsx
}

const element = <Welcome name="Sara" />; // 使用了 jsx
```

- 在这个例子中，`<Welcome name="Sara" />` 是一个 JSX 表达式，它表示一个 `Welcome` 组件的实例，传递了 `name` 属性。这个组件内部返回了一个包含动态内容的 `<h1>` 标签。
- 当你在项目中使用 JSX 时，通常会通过 Babel 这样的工具将 JSX 代码转换为纯 JavaScript 代码。Babel 会把 JSX 代码转换成 `React.createElement` 函数调用，这是 React 用来创建虚拟 DOM 节点的方法。例如，上面的 JSX 代码会被编译成如下形式：

```javascript
import React from 'react';

function Welcome(props) {
  return React.createElement(
    "h1",
    null,
    "Hello, ",
    props.name
  );
}

const element = React.createElement(Welcome, {name: "Sara"});
```

- 由此可见，其实 JSX 并不是开发 React 项目所必需的，你如果更喜欢使用 `React.createElement(Welcome, {name: "Sara"})` 这种写法而非 `<Welcome name="Sara" />` 这种写法的话，那么完全可以舍弃 JSX。
- 尽管 JSX 不是必需的，但它极大地提高了开发效率和代码的可读性，因此在 React 社区中得到了广泛的应用。

