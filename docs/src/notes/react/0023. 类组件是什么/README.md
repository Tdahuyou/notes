# [0023. 类组件是什么](https://github.com/Tdahuyou/react/tree/main/0023.%20%E7%B1%BB%E7%BB%84%E4%BB%B6%E6%98%AF%E4%BB%80%E4%B9%88)

<!-- region:toc -->
- [1. 🤖 什么是类组件](#1--什么是类组件)
  - [1.1. 类组件的基本形式](#11-类组件的基本形式)
  - [1.2. 状态（State）](#12-状态state)
  - [1.3. 生命周期方法](#13-生命周期方法)
  - [1.4. 默认 Props](#14-默认-props)
  - [1.5. 总结](#15-总结)
<!-- endregion:toc -->
- ⏰ pending

## 1. 🤖 什么是类组件

类组件是 React 中定义组件的另一种方式，它基于 ES6 的类（class）语法。类组件扩展了 `React.Component` 类，并且必须实现一个名为 `render` 的方法，该方法返回要渲染到 DOM 的 JSX 代码。类组件可以拥有自己的状态（state）和生命周期方法，这使得它们在处理复杂逻辑时非常有用。

### 1.1. 类组件的基本形式

一个基本的类组件看起来像这样：

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

在这个例子中，`Welcome` 是一个类组件，它继承自 `React.Component`。`render` 方法返回了一个 `<h1>` 元素，其中包含了通过 `this.props` 传递进来的 `name` 属性。

### 1.2. 状态（State）

类组件可以通过 `this.state` 来管理自己的状态。状态是一个对象，可以在构造函数中初始化，并通过 `this.setState` 方法来更新。当状态改变时，组件会自动重新渲染。

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
```

在这个例子中，`Counter` 组件有一个 `count` 状态，并提供了一个按钮来增加这个计数器的值。

### 1.3. 生命周期方法

类组件提供了多种生命周期方法，这些方法允许你在组件的不同阶段执行特定的操作。以下是几个常见的生命周期方法：

- **constructor**: 初始化 state 和绑定事件处理器。
- **componentDidMount**: 在组件挂载后立即调用，通常用来发送网络请求或设置订阅。
- **shouldComponentUpdate**: 决定是否需要更新组件，可以用于性能优化。
- **componentDidUpdate**: 在组件更新后调用，可以用来触发网络请求或进行 DOM 操作。
- **componentWillUnmount**: 在组件卸载前调用，用于清理工作，如取消订阅或清除定时器。

```jsx
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // 模拟异步数据获取
    setTimeout(() => {
      this.setState({ data: 'Data fetched' });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      console.log('Data has changed:', this.state.data);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>{this.state.data || 'Loading...'}</div>;
  }
}
```

在这个例子中，`Example` 组件在挂载后模拟了一个数据获取的过程，并在数据更新时记录一条消息。同时，当组件即将卸载时，它也会记录一条消息。

### 1.4. 默认 Props

你可以为类组件设置默认的 props 值，通过定义 `defaultProps` 静态属性：

```jsx
class Welcome extends Component {
  static defaultProps = {
    name: 'Guest'
  };

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

或者直接在 `props` 对象上解构并赋值默认值：

```jsx
class Welcome extends Component {
  render() {
    const { name = 'Guest' } = this.props;
    return <h1>Hello, {name}</h1>;
  }
}
```

### 1.5. 总结

类组件是一种强大的方式来构建可重用的 UI 组件，特别是在你需要使用状态、生命周期方法或是其他高级特性时。然而，随着 React Hooks 的引入，许多原本只能在类组件中完成的任务现在也可以在函数组件中实现，这使得函数组件成为了新的标准。尽管如此，了解类组件仍然是很重要的，因为它们在很多现有的 React 项目中仍然广泛使用。

