# [0021. 在 React 中，一个组件都有哪些部分组成？](https://github.com/Tdahuyou/react/tree/main/0021.%20%E5%9C%A8%20React%20%E4%B8%AD%EF%BC%8C%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%83%A8%E5%88%86%E7%BB%84%E6%88%90%EF%BC%9F)

<!-- region:toc -->
- [1. 🤖 在 React 中，一个组件都有哪些部分组成？](#1--在-react-中一个组件都有哪些部分组成)
<!-- endregion:toc -->
- ⏰ pending

## 1. 🤖 在 React 中，一个组件都有哪些部分组成？

在 React 中，一个组件可以由多个部分组成，这些部分共同定义了组件的行为、外观以及与用户和其他组件的交互方式。以下是构成 React 组件的主要部分：

1. **组件定义**:
   - **函数组件**: 使用 JavaScript 函数来定义的组件。这种组件通常使用 `function` 关键字或箭头函数来声明，并且返回 JSX 代码。
     ```jsx
     function MyComponent() {
       return <div>Hello, world!</div>;
     }
     ```
   - **类组件**: 使用 ES6 类（class）语法定义的组件。类组件继承自 `React.Component` 并且必须实现 `render` 方法。
     ```jsx
     class MyComponent extends React.Component {
       render() {
         return <div>Hello, world!</div>;
       }
     }
     ```

2. **Props (属性)**:
   - Props 是从父组件传递给子组件的数据。它们是只读的，意味着子组件不能修改接收到的 props。
   - 在函数组件中，props 作为参数传入。
     ```jsx
     function MyComponent(props) {
       return <div>{props.message}</div>;
     }
     ```
   - 在类组件中，props 通过 `this.props` 访问。
     ```jsx
     class MyComponent extends React.Component {
       render() {
         return <div>{this.props.message}</div>;
       }
     }
     ```

3. **State (状态)**:
   - State 是组件内部管理的数据，它可以在组件的生命周期内被改变，并且当 state 发生变化时，组件会重新渲染。
   - 在函数组件中，可以使用 `useState` 钩子来声明 state。
     ```jsx
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
   - 在类组件中，state 通过 `this.state` 和 `this.setState` 来管理和更新。
     ```jsx
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

4. **生命周期方法**:
   - 生命周期方法允许你在特定时刻执行逻辑，例如组件挂载、更新和卸载的时候。
   - 在类组件中，有多个生命周期方法如 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 等。
   - 在函数组件中，可以使用 `useEffect` 钩子来替代大部分的生命周期方法。

5. **事件处理**:
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

6. **条件渲染**:
   - 根据不同的条件显示或隐藏组件的部分内容。
     ```jsx
     function Greeting(props) {
       const isLoggedIn = props.isLoggedIn;
       if (isLoggedIn) {
         return <UserGreeting />;
       }
       return <GuestGreeting />;
     }
     ```

7. **列表和键**:
   - 当你需要渲染多个相似的元素时，通常需要使用数组来映射并创建一组元素。
   - 每个元素都需要一个唯一的 `key` 属性，以帮助 React 识别哪些元素改变了、添加了或者删除了。
     ```jsx
     const numbers = [1, 2, 3, 4, 5];
     const listItems = numbers.map((number) =>
       <li key={number.toString()}>{number}</li>
     );
     ```

8. **样式**:
   - 可以通过内联样式、CSS 类名或是 CSS-in-JS 库来应用样式。

9. **Context API**:
   - Context 提供了一种在组件树中传递数据的方法，而不需要手动将 props 逐层传递下去。

10. **Hooks**:
    - Hooks 允许你在不编写类的情况下使用 state 和其他 React 特性。
    - 常见的 hooks 包括 `useState`, `useEffect`, `useContext`, `useReducer` 等。

以上就是 React 组件的基本组成部分。根据你的具体需求，你可能还会用到更多高级的概念和技术。

