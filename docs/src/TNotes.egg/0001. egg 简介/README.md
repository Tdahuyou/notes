# [0001. egg 简介](https://github.com/Tdahuyou/TNotes.egg/tree/main/notes/0001.%20egg%20%E7%AE%80%E4%BB%8B)

<!-- region:toc -->

- [1. 📒 什么是 Egg.js](#1--什么是-eggjs)
- [2. 📒 Egg.js 核心特点](#2--eggjs-核心特点)
- [3. 📒 Egg.js 的目录结构约定](#3--eggjs-的目录结构约定)
- [4. 📒 Egg.js 中的一些核心概念](#4--eggjs-中的一些核心概念)
- [5. 📒 Egg.js 的使用场景](#5--eggjs-的使用场景)
- [6. 🔗 References](#6--references)

<!-- endregion:toc -->

## 1. 📒 什么是 Egg.js

- Egg.js 是一个基于 **Koa** 的 **企业级 Node.js 框架**，由 **阿里巴巴** 团队开发并开源。
- Egg.js 旨在为开发者提供一套高效、稳定且易于扩展的解决方案，用于构建现代化的 Web 应用和服务端应用。
- Egg.js 在 Koa 的基础上进行了封装和增强，提供了更多的内置功能和 **约定**，使得开发者可以更专注于业务逻辑，而无需过多关注底层框架的实现细节。
- Egg.js 是一个功能强大且灵活的企业级 Node.js 框架，它结合了 Koa 的轻量级特性和自身丰富的内置功能，为开发者提供了一套高效的开发工具。无论是小型项目还是大型企业级应用，Egg.js 都能很好地满足需求。如果你正在寻找一个稳定、易用且社区活跃的框架，Egg.js 是一个值得尝试的选择。

## 2. 📒 Egg.js 核心特点

- **基于 Koa**
  - Egg.js 构建在 Koa 之上，继承了 Koa 的轻量级中间件机制（洋葱模型）和异步流程控制能力。
  - 开发者可以直接使用 Koa 的中间件生态，也可以通过 Egg.js 提供的插件机制进行扩展。
- **约定优于配置**
  - Egg.js 遵循“约定优于配置”的原则，通过目录结构和命名规范来减少配置的复杂性。
  - 例如，控制器、服务、路由等都有固定的目录结构，开发者只需按照约定放置文件即可。
- **插件机制**
  - Egg.js 提供了强大的插件系统，允许开发者通过插件扩展框架的功能。
  - 插件可以复用代码，降低项目之间的耦合度，同时也方便社区贡献和共享。
- **渐进式开发**
  - Egg.js 支持渐进式开发模式，既适合小型项目快速启动，也能满足大型项目的复杂需求。
  - 通过插件和自定义扩展，开发者可以根据项目需求逐步引入新功能。
- **内置功能丰富**
  - Egg.js 内置了许多常用的功能模块，如日志管理、配置管理、定时任务、多进程支持等。
  - 这些功能开箱即用，减少了开发者重复造轮子的工作。
- **企业级支持**
  - Egg.js 被广泛应用于阿里巴巴集团内部及外部的多个生产环境，经过了大规模流量的验证。
  - 它的设计目标是为企业级应用提供高可靠性和高性能。

## 3. 📒 Egg.js 的目录结构约定

- Egg.js 的目录结构遵循严格的约定，以下是一个典型的项目结构：

```
├── app
│   ├── controller    // 控制器，处理请求逻辑
│   ├── service       // 服务层，封装业务逻辑
│   ├── middleware    // 自定义中间件
│   ├── router.js     // 路由配置
│   └── extend        // 扩展框架功能
├── config
│   ├── config.default.js  // 默认配置
│   ├── config.prod.js     // 生产环境配置
│   └── plugin.js          // 插件配置
├── logs                // 日志文件
├── test                // 测试代码
└── package.json        // 项目依赖
```

- ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-03-06-16-19-33.png)
- 官方提到的“约定优于配置”，其实也就是在强调这样的目录结构。
- 事先约定好 xxx 目录书写 xxx 逻辑，大伙都按照同样的规范来书写代码。这样别人在看你的代码或者你看别人的代码，都能够非常清晰的了解到这部分的模块是用来干啥的，能够有效降低沟通成本。

## 4. 📒 Egg.js 中的一些核心概念

- **Router**
  - 路由用于定义 URL 和 Controller 方法之间的映射关系。
- **Controller**
  - 是负责处理用户请求的模块，通常用于解析请求参数、调用 Service 层逻辑，并返回响应数据。
- **Service**
  - 是业务逻辑的核心，负责封装复杂的业务处理逻辑，供 Controller 调用。
- **Middleware**
  - 中间件用于拦截和处理请求，类似于 Koa 的中间件机制。
  - Egg.js 提供了一些内置中间件，也支持自定义中间件。
- **Plugin**
  - 插件是 Egg.js 的扩展机制，用于添加新功能或修改现有功能。
  - 插件可以独立开发和发布，便于复用。
- **Config**
  - 配置文件用于管理项目的运行时配置，支持多环境（如开发、测试、生产）的配置分离。

## 5. 📒 Egg.js 的使用场景

Egg.js 适用于以下场景：

- **Web 应用开发**：快速搭建 RESTful API 或传统的 MVC 应用。
- **微服务架构**：通过插件和扩展支持微服务开发。
- **企业级应用**：需要高可靠性、高性能和可扩展性的项目。
- **前后端分离**：作为后端 API 服务，与前端框架（如 React、Vue）配合使用。

## 6. 🔗 References

::: details

- https://github.com/eggjs/egg
  - Egg.js Github 仓库
- https://www.eggjs.org/zh-CN
  - Egg.js 官网
  - 有中文和英文两个版本，翻译得都挺好。
- https://github.com/eggjs/egg/tree/master/site/docs
  - 官方文档的 markdown 源码。
  - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2025-03-26-22-33-19.png)

:::
