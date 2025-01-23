# [0021. 组件的基本组成](https://github.com/Tdahuyou/react/tree/main/0021.%20%E7%BB%84%E4%BB%B6%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%BB%84%E6%88%90)

<!-- region:toc -->
- [1. 📒 组件的 3 大基本组成结构](#1--组件的-3-大基本组成结构)
- [2. 📒 认识函数组件和类组件的基本写法](#2--认识函数组件和类组件的基本写法)
- [3. 📒 组件的属性 - Props](#3--组件的属性---props)
- [4. 📒 组件的状态 - State](#4--组件的状态---state)
- [5. 📒 组件的生命周期方法](#5--组件的生命周期方法)
- [6. 📒 组件的事件](#6--组件的事件)
- [7. 📒 组件模板语法 - 条件渲染、列表渲染](#7--组件模板语法---条件渲染列表渲染)
- [8. 📒 组件样式](#8--组件样式)
- [9. 📒 组件的 Context API](#9--组件的-context-api)
- [10. 📒 组件的 Hooks](#10--组件的-hooks)
<!-- endregion:toc -->

## 1. 📒 组件的 3 大基本组成结构

在 React 中，一个组件可以由多个部分组成，这些部分共同定义了组件的 **结构**、**外观** 以及 **行为**。

1. **结构** 指的是组件的 HTML 结构，包括标签、属性、文本内容等，这部分通常由 JSX 来描述。
2. **外观** 指的是组件的样式、布局、动画等，这部分由 CSS 来描述。
3. **行为** 指的是组件的逻辑，比如与用户和其他组件的交互方式等，这部分由 JavaScript 来描述。

## 2. 📒 认识函数组件和类组件的基本写法

::: code-group

```jsx [函数组件]
// 函数组件是使用 JavaScript 函数来定义的组件。
// 函数组件通常使用 function 关键字或箭头函数来声明，并且返回 JSX 代码。
function MyComponent() {
 return <div>Hello, world!</div>;
}
```

```jsx [类组件]
// 类组件是使用 ES6 类（class）语法定义的组件。
// 类组件继承自 React.Component 并且必须实现 render 方法。
class MyComponent extends React.Component {
 render() {
   return <div>Hello, world!</div>;
 }
}
```

:::

## 3. 📒 组件的属性 - Props

- Props 是从父组件传递给子组件的数据。它们是只读的，意味着子组件不能修改接收到的 props。

::: code-group

```jsx [函数组件]
// 在函数组件中，props 作为参数传入。
function MyComponent(props) {
  return <div>{props.message}</div>;
}
```

```jsx [类组件]
// 在类组件中，props 通过 this.props 访问。
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}
```

:::

## 4. 📒 组件的状态 - State

- State 是组件内部管理的数据，它可以在组件的生命周期内被改变，并且当 state 发生变化时，组件会重新渲染。

::: code-group

```jsx [函数组件]
// 在函数组件中，可以使用 useState 钩子来声明 state。
import React, { useState } from 'react';

function MyComponent() {
 const [count, setCount] = useState(0);

 return (
   <div>
     <p>You clicked {count} times</p>
     <button onClick={() => setCount(count + 1)}>
       Click me
     </button>
   </div>
 );
}
```

```jsx [类组件]
// 在类组件中，state 通过 this.state 和 this.setState 来管理和更新。
class MyComponent extends React.Component {
 constructor(props) {
   super(props);
   this.state = { count: 0 };
 }

 render() {
   return (
     <div>
       <p>You clicked {this.state.count} times</p>
       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
         Click me
       </button>
     </div>
   );
 }
}
```

:::

## 5. 📒 组件的生命周期方法

- 生命周期方法允许你在特定时刻执行逻辑，例如组件挂载、更新和卸载的时候。
- 在类组件中，有多个生命周期方法如 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 等。
- 在函数组件中，可以使用 `useEffect` 钩子来替代大部分的生命周期方法。

## 6. 📒 组件的事件

- 事件处理允许你响应用户的操作，比如点击按钮、输入文本等。
- 在 JSX 中，你可以为元素添加事件处理器，它们通常是回调函数。
```jsx
function MyComponent() {
 const handleClick = () => {
   console.log('Button was clicked!');
 };

 return <button onClick={handleClick}>Click me</button>;
}
```

## 7. 📒 组件模板语法 - 条件渲染、列表渲染

::: code-group

```jsx [条件渲染]
// 根据不同的条件显示或隐藏组件的部分内容。
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

```jsx [列表渲染]
// 当你需要渲染多个相似的元素时，通常需要使用数组来映射并创建一组元素。
// 每个元素都需要一个唯一的 key 属性，以帮助 React 识别哪些元素改变了、添加了或者删除了。
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);
```

:::

## 8. 📒 组件样式

- 可以通过内联样式 `style`、CSS 类名 `className` 或是 `CSS-in-JS 库` 等其他手段来应用样式。

## 9. 📒 组件的 Context API

- Context 提供了一种在组件树中传递数据的方法，而不需要手动将 props 逐层传递下去。

## 10. 📒 组件的 Hooks

- Hooks 允许你在不编写类的情况下使用 state 和其他 React 特性。
- 常见的 hooks 包括 `useState`, `useEffect`, `useContext`, `useReducer` 等。


