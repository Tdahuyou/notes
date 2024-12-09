# svg

<!-- region:toc -->
- [svg](#svg)
  - [1. svg 在线免费教程](#1-svg-在线免费教程)
  - [2. svg 起步](#2-svg-起步)
  - [3. 基本图形绘制](#3-基本图形绘制)
  - [4. path](#4-path)
  - [5. 描边和填充](#5-描边和填充)
  - [6. 复用](#6-复用)
  - [7. svg 与 js、html、css 的结合](#7-svg-与-jshtmlcss-的结合)
  - [8. 练习](#8-练习)
<!-- endregion:toc -->

## 1. svg 在线免费教程

## 2. svg 起步

- [x] [0043. 理解 svg 是什么](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md) <!-- [locale](./0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md) -->  
  - [1. 🔗 en-words - scalable、vector、graphics](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#1--en-words---scalablevectorgraphics)
  - [2. 📒 SVG 是什么](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#2--svg-是什么)
    - [2.1. Scalable Vector Graphics](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#21-scalable-vector-graphics)
  - [3. 📒 SVG 的一些特点](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#3--svg-的一些特点)
    - [3.1. 易于编辑](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#31-易于编辑)
    - [3.2. 矢量图](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#32-矢量图)
    - [3.3. 和传统的前端技术可以很好地结合](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#33-和传统的前端技术可以很好地结合)
    - [3.4. 滤镜功能](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#34-滤镜功能)
    - [3.5. 兼容性 nice](https://github.com/Tdahuyou/svg/tree/main/0043.%20%E7%90%86%E8%A7%A3%20svg%20%E6%98%AF%E4%BB%80%E4%B9%88/README.md#35-兼容性-nice)
  - 知识点
    - 需要知道 SVG 是什么。
    - 需要知道 SVG 都有哪些特点，适合用来做些什么东西。
    - Scalable Vector Graphics 这是 SVG 的全称，需要理解每个词所表示的含义，别学完了 SVG 之后还不知道 SVG 的全称是什么。
  - 备注：文中有很多描述其实是重复的，虽然换了种说法，但是实际上描述的都是同样的内容。不过多次重复提到的内容，也恰恰是比较重要的点。
  

- [ ] [0044. 对比 svg 和 canvas](https://github.com/Tdahuyou/svg/tree/main/0044.%20%E5%AF%B9%E6%AF%94%20svg%20%E5%92%8C%20canvas/README.md) <!-- [locale](./0044.%20%E5%AF%B9%E6%AF%94%20svg%20%E5%92%8C%20canvas/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/svg/tree/main/0044.%20%E5%AF%B9%E6%AF%94%20svg%20%E5%92%8C%20canvas/README.md#1--links)
  - [2. 📒 对比 svg 和 canvas](https://github.com/Tdahuyou/svg/tree/main/0044.%20%E5%AF%B9%E6%AF%94%20svg%20%E5%92%8C%20canvas/README.md#2--对比-svg-和-canvas)
  - [3. 📒 svg、canvas 的应用场景](https://github.com/Tdahuyou/svg/tree/main/0044.%20%E5%AF%B9%E6%AF%94%20svg%20%E5%92%8C%20canvas/README.md#3--svgcanvas-的应用场景)
  - 文档中提供了一张表格，记录了这俩玩意儿之间的一些差异。可以等学完了 svg、canvas 的内容之后再来回看这篇文档中提到的内容。
  - 总结：
    - **如果你需要高质量的图形，如图标和矢量图，且希望它们具有良好的缩放性和可访问性，那么 SVG 可能是更好的选择。**
    - **如果你的项目涉及到复杂的动画、游戏或需要大量动态图形处理，Canvas 将可能提供更好的性能和灵活性。**
  

- [ ] [0045. 区分 Image 和 Graphic](https://github.com/Tdahuyou/svg/tree/main/0045.%20%E5%8C%BA%E5%88%86%20Image%20%E5%92%8C%20Graphic/README.md) <!-- [locale](./0045.%20%E5%8C%BA%E5%88%86%20Image%20%E5%92%8C%20Graphic/README.md) -->  
  - [1. 📒 Image vs. Graphic](https://github.com/Tdahuyou/svg/tree/main/0045.%20%E5%8C%BA%E5%88%86%20Image%20%E5%92%8C%20Graphic/README.md#1--image-vs-graphic)
  - 图像（Image）通常指的是 **像素数据的集合**，这些数据以栅格或点阵的形式存储。
  - 图形（Graphic）更多指的是 **通过数学表达式定义的图形**，例如 SVG 中的形状（圆形、矩形、路径等）。
  - 备注：自己能够理解 Image vs. Graphic 之间的区别即可，没必要死扣图形、图像两者的区别。从中文表述层面来看，它们大多时候都是被混用的，图、图形、图像，在书面表达中我们通常会将其视作同样的东西。比如：“A：请使用 canvas 绘制一个图形，要求颜色是……”，“B：不对，canvas 画的是图像（巴拉巴拉）” —— 没必要。
  

- [ ] [0046. 理解 svg 的 xmlns 属性](https://github.com/Tdahuyou/svg/tree/main/0046.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20xmlns%20%E5%B1%9E%E6%80%A7/README.md) <!-- [locale](./0046.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20xmlns%20%E5%B1%9E%E6%80%A7/README.md) -->  
  - [1. 🔗 菜鸟教程 - xml 命名空间](https://github.com/Tdahuyou/svg/tree/main/0046.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20xmlns%20%E5%B1%9E%E6%80%A7/README.md#1--菜鸟教程---xml-命名空间)
  - [2. 💻 demos.1 - 带有命名空间 `xmlns="http://www.w3.org/2000/svg"`](https://github.com/Tdahuyou/svg/tree/main/0046.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20xmlns%20%E5%B1%9E%E6%80%A7/README.md#2--demos1---带有命名空间-xmlns="httpwwww3org2000svg")
  - [3. 💻 demos.2 - 不带命名空间 `xmlns="http://www.w3.org/2000/svg"`](https://github.com/Tdahuyou/svg/tree/main/0046.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20xmlns%20%E5%B1%9E%E6%80%A7/README.md#3--demos2---不带命名空间-xmlns="httpwwww3org2000svg")
  - [4. 📒 结果分析](https://github.com/Tdahuyou/svg/tree/main/0046.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20xmlns%20%E5%B1%9E%E6%80%A7/README.md#4--结果分析)
  - [5. 💻 demos.3 - 在 html 中嵌入 svg](https://github.com/Tdahuyou/svg/tree/main/0046.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20xmlns%20%E5%B1%9E%E6%80%A7/README.md#5--demos3---在-html-中嵌入-svg)
  - 本节介绍的是 xmlns，这是一个属性，用于指定 XML 文档的命名空间。它决定了 svg 文件是否能够被正常渲染，在正式开始学习 svg 的绘图规则之前，有必要了解一下 `xmlns="http://www.w3.org/2000/svg"` 这条声明的作用。
  - 本节内容：模拟一个要求 - 在 100*100 的视口中，渲染一个圆心位置是 `(50, 50)`，半径是 `20` 的红色圆形，然后通过 demos 来对比带命名空间和不带命名空间的区别。
  

- [ ] [0047. 理解 svg 的 version 属性](https://github.com/Tdahuyou/svg/tree/main/0047.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20version%20%E5%B1%9E%E6%80%A7/README.md) <!-- [locale](./0047.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20version%20%E5%B1%9E%E6%80%A7/README.md) -->  
  - [1. 🔗 MDN - svg version 属性](https://github.com/Tdahuyou/svg/tree/main/0047.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20version%20%E5%B1%9E%E6%80%A7/README.md#1--mdn---svg-version-属性)
  - [2. 📒 认识 version 属性](https://github.com/Tdahuyou/svg/tree/main/0047.%20%E7%90%86%E8%A7%A3%20svg%20%E7%9A%84%20version%20%E5%B1%9E%E6%80%A7/README.md#2--认识-version-属性)
  - version 属性的值只有两种情况：`1.0` 和 `1.1`。
  - version 属性已经被抛弃了，你可以认为它是一个无效属性。
  

- [ ] [0009. vscode svg 插件](https://github.com/Tdahuyou/svg/tree/main/0009.%20vscode%20svg%20%E6%8F%92%E4%BB%B6/README.md) <!-- [locale](./0009.%20vscode%20svg%20%E6%8F%92%E4%BB%B6/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0009.%20vscode%20svg%20%E6%8F%92%E4%BB%B6/README.md#1--notes)
  

- [ ] [0001. 在 html 中嵌入 svg](https://github.com/Tdahuyou/svg/tree/main/0001.%20%E5%9C%A8%20html%20%E4%B8%AD%E5%B5%8C%E5%85%A5%20svg/README.md) <!-- [locale](./0001.%20%E5%9C%A8%20html%20%E4%B8%AD%E5%B5%8C%E5%85%A5%20svg/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0001.%20%E5%9C%A8%20html%20%E4%B8%AD%E5%B5%8C%E5%85%A5%20svg/README.md#1--notes)
  

- [ ] [0002. 根元素 svg 的数量](https://github.com/Tdahuyou/svg/tree/main/0002.%20%E6%A0%B9%E5%85%83%E7%B4%A0%20svg%20%E7%9A%84%E6%95%B0%E9%87%8F/README.md) <!-- [locale](./0002.%20%E6%A0%B9%E5%85%83%E7%B4%A0%20svg%20%E7%9A%84%E6%95%B0%E9%87%8F/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0002.%20%E6%A0%B9%E5%85%83%E7%B4%A0%20svg%20%E7%9A%84%E6%95%B0%E9%87%8F/README.md#1--notes)
  

- [ ] [0035. 绘制坐标系网格](https://github.com/Tdahuyou/svg/tree/main/0035.%20%E7%BB%98%E5%88%B6%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BD%91%E6%A0%BC/README.md) <!-- [locale](./0035.%20%E7%BB%98%E5%88%B6%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BD%91%E6%A0%BC/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0035.%20%E7%BB%98%E5%88%B6%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BD%91%E6%A0%BC/README.md#1--notes)
  

- [ ] [0034. 理解 viewBox 视口](https://github.com/Tdahuyou/svg/tree/main/0034.%20%E7%90%86%E8%A7%A3%20viewBox%20%E8%A7%86%E5%8F%A3/README.md) <!-- [locale](./0034.%20%E7%90%86%E8%A7%A3%20viewBox%20%E8%A7%86%E5%8F%A3/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0034.%20%E7%90%86%E8%A7%A3%20viewBox%20%E8%A7%86%E5%8F%A3/README.md#1--notes)
  

## 3. 基本图形绘制

- [ ] [0005. 使用 line 绘制直线](https://github.com/Tdahuyou/svg/tree/main/0005.%20%E4%BD%BF%E7%94%A8%20line%20%E7%BB%98%E5%88%B6%E7%9B%B4%E7%BA%BF/README.md) <!-- [locale](./0005.%20%E4%BD%BF%E7%94%A8%20line%20%E7%BB%98%E5%88%B6%E7%9B%B4%E7%BA%BF/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0005.%20%E4%BD%BF%E7%94%A8%20line%20%E7%BB%98%E5%88%B6%E7%9B%B4%E7%BA%BF/README.md#1--notes)
  

- [ ] [0007. 使用 polyline 绘制折线](https://github.com/Tdahuyou/svg/tree/main/0007.%20%E4%BD%BF%E7%94%A8%20polyline%20%E7%BB%98%E5%88%B6%E6%8A%98%E7%BA%BF/README.md) <!-- [locale](./0007.%20%E4%BD%BF%E7%94%A8%20polyline%20%E7%BB%98%E5%88%B6%E6%8A%98%E7%BA%BF/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0007.%20%E4%BD%BF%E7%94%A8%20polyline%20%E7%BB%98%E5%88%B6%E6%8A%98%E7%BA%BF/README.md#1--notes)
  

- [ ] [0008. 使用 rect 绘制矩形](https://github.com/Tdahuyou/svg/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20rect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2/README.md) <!-- [locale](./0008.%20%E4%BD%BF%E7%94%A8%20rect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0008.%20%E4%BD%BF%E7%94%A8%20rect%20%E7%BB%98%E5%88%B6%E7%9F%A9%E5%BD%A2/README.md#1--notes)
  

- [ ] [0006. 使用 polygon 绘制多边形](https://github.com/Tdahuyou/svg/tree/main/0006.%20%E4%BD%BF%E7%94%A8%20polygon%20%E7%BB%98%E5%88%B6%E5%A4%9A%E8%BE%B9%E5%BD%A2/README.md) <!-- [locale](./0006.%20%E4%BD%BF%E7%94%A8%20polygon%20%E7%BB%98%E5%88%B6%E5%A4%9A%E8%BE%B9%E5%BD%A2/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0006.%20%E4%BD%BF%E7%94%A8%20polygon%20%E7%BB%98%E5%88%B6%E5%A4%9A%E8%BE%B9%E5%BD%A2/README.md#1--notes)
  

- [ ] [0003. 使用 circle 绘制圆形](https://github.com/Tdahuyou/svg/tree/main/0003.%20%E4%BD%BF%E7%94%A8%20circle%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BD%A2/README.md) <!-- [locale](./0003.%20%E4%BD%BF%E7%94%A8%20circle%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BD%A2/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0003.%20%E4%BD%BF%E7%94%A8%20circle%20%E7%BB%98%E5%88%B6%E5%9C%86%E5%BD%A2/README.md#1--notes)
  

- [ ] [0004. 使用 ellipse 绘制椭圆形](https://github.com/Tdahuyou/svg/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20ellipse%20%E7%BB%98%E5%88%B6%E6%A4%AD%E5%9C%86%E5%BD%A2/README.md) <!-- [locale](./0004.%20%E4%BD%BF%E7%94%A8%20ellipse%20%E7%BB%98%E5%88%B6%E6%A4%AD%E5%9C%86%E5%BD%A2/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20ellipse%20%E7%BB%98%E5%88%B6%E6%A4%AD%E5%9C%86%E5%BD%A2/README.md#1--notes)
  

- [ ] [0031. 使用属性 x、y、dx、dy 控制文本的绘制位置](https://github.com/Tdahuyou/svg/tree/main/0031.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20x%E3%80%81y%E3%80%81dx%E3%80%81dy%20%E6%8E%A7%E5%88%B6%E6%96%87%E6%9C%AC%E7%9A%84%E7%BB%98%E5%88%B6%E4%BD%8D%E7%BD%AE/README.md) <!-- [locale](./0031.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20x%E3%80%81y%E3%80%81dx%E3%80%81dy%20%E6%8E%A7%E5%88%B6%E6%96%87%E6%9C%AC%E7%9A%84%E7%BB%98%E5%88%B6%E4%BD%8D%E7%BD%AE/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0031.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20x%E3%80%81y%E3%80%81dx%E3%80%81dy%20%E6%8E%A7%E5%88%B6%E6%96%87%E6%9C%AC%E7%9A%84%E7%BB%98%E5%88%B6%E4%BD%8D%E7%BD%AE/README.md#1--notes)
  

- [ ] [0029. 使用属性 text-anchor 设置文本的水平对齐方式](https://github.com/Tdahuyou/svg/tree/main/0029.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20text-anchor%20%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E7%9A%84%E6%B0%B4%E5%B9%B3%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F/README.md) <!-- [locale](./0029.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20text-anchor%20%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E7%9A%84%E6%B0%B4%E5%B9%B3%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0029.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20text-anchor%20%E8%AE%BE%E7%BD%AE%E6%96%87%E6%9C%AC%E7%9A%84%E6%B0%B4%E5%B9%B3%E5%AF%B9%E9%BD%90%E6%96%B9%E5%BC%8F/README.md#1--notes)
  

- [ ] [0030. 使用属性 textLength 约束文本长度](https://github.com/Tdahuyou/svg/tree/main/0030.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20textLength%20%E7%BA%A6%E6%9D%9F%E6%96%87%E6%9C%AC%E9%95%BF%E5%BA%A6/README.md) <!-- [locale](./0030.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20textLength%20%E7%BA%A6%E6%9D%9F%E6%96%87%E6%9C%AC%E9%95%BF%E5%BA%A6/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0030.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20textLength%20%E7%BA%A6%E6%9D%9F%E6%96%87%E6%9C%AC%E9%95%BF%E5%BA%A6/README.md#1--notes)
  

- [ ] [0032. 通过 text 的其他属性来控制文本样式](https://github.com/Tdahuyou/svg/tree/main/0032.%20%E9%80%9A%E8%BF%87%20text%20%E7%9A%84%E5%85%B6%E4%BB%96%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%8E%A7%E5%88%B6%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F/README.md) <!-- [locale](./0032.%20%E9%80%9A%E8%BF%87%20text%20%E7%9A%84%E5%85%B6%E4%BB%96%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%8E%A7%E5%88%B6%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0032.%20%E9%80%9A%E8%BF%87%20text%20%E7%9A%84%E5%85%B6%E4%BB%96%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%8E%A7%E5%88%B6%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F/README.md#1--notes)
  

- [ ] [0019. 使用 tspan 更细粒度地控制 text 中的内容](https://github.com/Tdahuyou/svg/tree/main/0019.%20%E4%BD%BF%E7%94%A8%20tspan%20%E6%9B%B4%E7%BB%86%E7%B2%92%E5%BA%A6%E5%9C%B0%E6%8E%A7%E5%88%B6%20text%20%E4%B8%AD%E7%9A%84%E5%86%85%E5%AE%B9/README.md) <!-- [locale](./0019.%20%E4%BD%BF%E7%94%A8%20tspan%20%E6%9B%B4%E7%BB%86%E7%B2%92%E5%BA%A6%E5%9C%B0%E6%8E%A7%E5%88%B6%20text%20%E4%B8%AD%E7%9A%84%E5%86%85%E5%AE%B9/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0019.%20%E4%BD%BF%E7%94%A8%20tspan%20%E6%9B%B4%E7%BB%86%E7%B2%92%E5%BA%A6%E5%9C%B0%E6%8E%A7%E5%88%B6%20text%20%E4%B8%AD%E7%9A%84%E5%86%85%E5%AE%B9/README.md#1--notes)
  

- [ ] [0018. 使用 textPath 实现按照指定路径绘制文本](https://github.com/Tdahuyou/svg/tree/main/0018.%20%E4%BD%BF%E7%94%A8%20textPath%20%E5%AE%9E%E7%8E%B0%E6%8C%89%E7%85%A7%E6%8C%87%E5%AE%9A%E8%B7%AF%E5%BE%84%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC/README.md) <!-- [locale](./0018.%20%E4%BD%BF%E7%94%A8%20textPath%20%E5%AE%9E%E7%8E%B0%E6%8C%89%E7%85%A7%E6%8C%87%E5%AE%9A%E8%B7%AF%E5%BE%84%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0018.%20%E4%BD%BF%E7%94%A8%20textPath%20%E5%AE%9E%E7%8E%B0%E6%8C%89%E7%85%A7%E6%8C%87%E5%AE%9A%E8%B7%AF%E5%BE%84%E7%BB%98%E5%88%B6%E6%96%87%E6%9C%AC/README.md#1--notes)
  

## 4. path

- [ ] [0012. 使用 path 绘制直线](https://github.com/Tdahuyou/svg/tree/main/0012.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E7%9B%B4%E7%BA%BF/README.md) <!-- [locale](./0012.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E7%9B%B4%E7%BA%BF/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0012.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E7%9B%B4%E7%BA%BF/README.md#1--notes)
  

- [ ] [0011. 使用 path 绘制弧](https://github.com/Tdahuyou/svg/tree/main/0011.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E5%BC%A7/README.md) <!-- [locale](./0011.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E5%BC%A7/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0011.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E5%BC%A7/README.md#1--notes)
  

- [ ] [0010. 使用 path 绘制二次贝塞尔曲线](https://github.com/Tdahuyou/svg/tree/main/0010.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E4%BA%8C%E6%AC%A1%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF/README.md) <!-- [locale](./0010.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E4%BA%8C%E6%AC%A1%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0010.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E4%BA%8C%E6%AC%A1%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF/README.md#1--notes)
  

- [ ] [0014. 使用 path 绘制三次贝塞尔曲线](https://github.com/Tdahuyou/svg/tree/main/0014.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E4%B8%89%E6%AC%A1%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF/README.md) <!-- [locale](./0014.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E4%B8%89%E6%AC%A1%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0014.%20%E4%BD%BF%E7%94%A8%20path%20%E7%BB%98%E5%88%B6%E4%B8%89%E6%AC%A1%E8%B4%9D%E5%A1%9E%E5%B0%94%E6%9B%B2%E7%BA%BF/README.md#1--notes)
  

- [ ] [0013. 绘制【扫码】图标](https://github.com/Tdahuyou/svg/tree/main/0013.%20%E7%BB%98%E5%88%B6%E3%80%90%E6%89%AB%E7%A0%81%E3%80%91%E5%9B%BE%E6%A0%87/README.md) <!-- [locale](./0013.%20%E7%BB%98%E5%88%B6%E3%80%90%E6%89%AB%E7%A0%81%E3%80%91%E5%9B%BE%E6%A0%87/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0013.%20%E7%BB%98%E5%88%B6%E3%80%90%E6%89%AB%E7%A0%81%E3%80%91%E5%9B%BE%E6%A0%87/README.md#1--notes)
  

- [ ] [0036. 绘制【群】图标](https://github.com/Tdahuyou/svg/tree/main/0036.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%BE%A4%E3%80%91%E5%9B%BE%E6%A0%87/README.md) <!-- [locale](./0036.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%BE%A4%E3%80%91%E5%9B%BE%E6%A0%87/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0036.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%BE%A4%E3%80%91%E5%9B%BE%E6%A0%87/README.md#1--notes)
  

## 5. 描边和填充

- [ ] [0028. 使用属性 stroke、stroke-width、stroke-opacity、stroke-linecap 设置描边样式](https://github.com/Tdahuyou/svg/tree/main/0028.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke%E3%80%81stroke-width%E3%80%81stroke-opacity%E3%80%81stroke-linecap%20%E8%AE%BE%E7%BD%AE%E6%8F%8F%E8%BE%B9%E6%A0%B7%E5%BC%8F/README.md) <!-- [locale](./0028.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke%E3%80%81stroke-width%E3%80%81stroke-opacity%E3%80%81stroke-linecap%20%E8%AE%BE%E7%BD%AE%E6%8F%8F%E8%BE%B9%E6%A0%B7%E5%BC%8F/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0028.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke%E3%80%81stroke-width%E3%80%81stroke-opacity%E3%80%81stroke-linecap%20%E8%AE%BE%E7%BD%AE%E6%8F%8F%E8%BE%B9%E6%A0%B7%E5%BC%8F/README.md#1--notes)
  

- [ ] [0027. 使用属性 stroke-linejoin 设置线条连接处样式](https://github.com/Tdahuyou/svg/tree/main/0027.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-linejoin%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E8%BF%9E%E6%8E%A5%E5%A4%84%E6%A0%B7%E5%BC%8F/README.md) <!-- [locale](./0027.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-linejoin%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E8%BF%9E%E6%8E%A5%E5%A4%84%E6%A0%B7%E5%BC%8F/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0027.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-linejoin%20%E8%AE%BE%E7%BD%AE%E7%BA%BF%E6%9D%A1%E8%BF%9E%E6%8E%A5%E5%A4%84%E6%A0%B7%E5%BC%8F/README.md#1--notes)
  

- [ ] [0025. 使用属性 stroke-dasharray 设置虚线](https://github.com/Tdahuyou/svg/tree/main/0025.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-dasharray%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF/README.md) <!-- [locale](./0025.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-dasharray%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0025.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-dasharray%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF/README.md#1--notes)
  

- [ ] [0026. 使用属性 stroke-dashoffset 设置虚线的偏移](https://github.com/Tdahuyou/svg/tree/main/0026.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-dashoffset%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF%E7%9A%84%E5%81%8F%E7%A7%BB/README.md) <!-- [locale](./0026.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-dashoffset%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF%E7%9A%84%E5%81%8F%E7%A7%BB/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0026.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20stroke-dashoffset%20%E8%AE%BE%E7%BD%AE%E8%99%9A%E7%BA%BF%E7%9A%84%E5%81%8F%E7%A7%BB/README.md#1--notes)
  

- [ ] [0015. 使用属性 fill、fill-opacity 设置填充样式](https://github.com/Tdahuyou/svg/tree/main/0015.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20fill%E3%80%81fill-opacity%20%E8%AE%BE%E7%BD%AE%E5%A1%AB%E5%85%85%E6%A0%B7%E5%BC%8F/README.md) <!-- [locale](./0015.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20fill%E3%80%81fill-opacity%20%E8%AE%BE%E7%BD%AE%E5%A1%AB%E5%85%85%E6%A0%B7%E5%BC%8F/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0015.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20fill%E3%80%81fill-opacity%20%E8%AE%BE%E7%BD%AE%E5%A1%AB%E5%85%85%E6%A0%B7%E5%BC%8F/README.md#1--notes)
  

- [ ] [0023. 使用 stroke-dasharray 模拟加载中动画效果](https://github.com/Tdahuyou/svg/tree/main/0023.%20%E4%BD%BF%E7%94%A8%20stroke-dasharray%20%E6%A8%A1%E6%8B%9F%E5%8A%A0%E8%BD%BD%E4%B8%AD%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C/README.md) <!-- [locale](./0023.%20%E4%BD%BF%E7%94%A8%20stroke-dasharray%20%E6%A8%A1%E6%8B%9F%E5%8A%A0%E8%BD%BD%E4%B8%AD%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0023.%20%E4%BD%BF%E7%94%A8%20stroke-dasharray%20%E6%A8%A1%E6%8B%9F%E5%8A%A0%E8%BD%BD%E4%B8%AD%E5%8A%A8%E7%94%BB%E6%95%88%E6%9E%9C/README.md#1--notes)
  

- [ ] [0024. 使用属性 fill-rule 设置填充规则](https://github.com/Tdahuyou/svg/tree/main/0024.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20fill-rule%20%E8%AE%BE%E7%BD%AE%E5%A1%AB%E5%85%85%E8%A7%84%E5%88%99/README.md) <!-- [locale](./0024.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20fill-rule%20%E8%AE%BE%E7%BD%AE%E5%A1%AB%E5%85%85%E8%A7%84%E5%88%99/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0024.%20%E4%BD%BF%E7%94%A8%E5%B1%9E%E6%80%A7%20fill-rule%20%E8%AE%BE%E7%BD%AE%E5%A1%AB%E5%85%85%E8%A7%84%E5%88%99/README.md#1--notes)
  

- [ ] [0037. 绘制【眼睛】图标](https://github.com/Tdahuyou/svg/tree/main/0037.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%9C%BC%E7%9D%9B%E3%80%91%E5%9B%BE%E6%A0%87/README.md) <!-- [locale](./0037.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%9C%BC%E7%9D%9B%E3%80%91%E5%9B%BE%E6%A0%87/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0037.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%9C%BC%E7%9D%9B%E3%80%91%E5%9B%BE%E6%A0%87/README.md#1--notes)
  

## 6. 复用

- [ ] [0017. 使用 g 作为容器](https://github.com/Tdahuyou/svg/tree/main/0017.%20%E4%BD%BF%E7%94%A8%20g%20%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8/README.md) <!-- [locale](./0017.%20%E4%BD%BF%E7%94%A8%20g%20%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0017.%20%E4%BD%BF%E7%94%A8%20g%20%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8/README.md#1--notes)
  

- [ ] [0020. 使用 use 引用图形](https://github.com/Tdahuyou/svg/tree/main/0020.%20%E4%BD%BF%E7%94%A8%20use%20%E5%BC%95%E7%94%A8%E5%9B%BE%E5%BD%A2/README.md) <!-- [locale](./0020.%20%E4%BD%BF%E7%94%A8%20use%20%E5%BC%95%E7%94%A8%E5%9B%BE%E5%BD%A2/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0020.%20%E4%BD%BF%E7%94%A8%20use%20%E5%BC%95%E7%94%A8%E5%9B%BE%E5%BD%A2/README.md#1--notes)
  

- [ ] [0016. 使用 defs 定义图形](https://github.com/Tdahuyou/svg/tree/main/0016.%20%E4%BD%BF%E7%94%A8%20defs%20%E5%AE%9A%E4%B9%89%E5%9B%BE%E5%BD%A2/README.md) <!-- [locale](./0016.%20%E4%BD%BF%E7%94%A8%20defs%20%E5%AE%9A%E4%B9%89%E5%9B%BE%E5%BD%A2/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0016.%20%E4%BD%BF%E7%94%A8%20defs%20%E5%AE%9A%E4%B9%89%E5%9B%BE%E5%BD%A2/README.md#1--notes)
  

## 7. svg 与 js、html、css 的结合

- [ ] [0021. 使用 css 控制 svg 样式](https://github.com/Tdahuyou/svg/tree/main/0021.%20%E4%BD%BF%E7%94%A8%20css%20%E6%8E%A7%E5%88%B6%20svg%20%E6%A0%B7%E5%BC%8F/README.md) <!-- [locale](./0021.%20%E4%BD%BF%E7%94%A8%20css%20%E6%8E%A7%E5%88%B6%20svg%20%E6%A0%B7%E5%BC%8F/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0021.%20%E4%BD%BF%E7%94%A8%20css%20%E6%8E%A7%E5%88%B6%20svg%20%E6%A0%B7%E5%BC%8F/README.md#1--notes)
  

- [ ] [0022. 使用 js 控制 svg 实现 CRUD 操作](https://github.com/Tdahuyou/svg/tree/main/0022.%20%E4%BD%BF%E7%94%A8%20js%20%E6%8E%A7%E5%88%B6%20svg%20%E5%AE%9E%E7%8E%B0%20CRUD%20%E6%93%8D%E4%BD%9C/README.md) <!-- [locale](./0022.%20%E4%BD%BF%E7%94%A8%20js%20%E6%8E%A7%E5%88%B6%20svg%20%E5%AE%9E%E7%8E%B0%20CRUD%20%E6%93%8D%E4%BD%9C/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0022.%20%E4%BD%BF%E7%94%A8%20js%20%E6%8E%A7%E5%88%B6%20svg%20%E5%AE%9E%E7%8E%B0%20CRUD%20%E6%93%8D%E4%BD%9C/README.md#1--notes)
  

## 8. 练习

- [ ] [0013. 绘制【扫码】图标](https://github.com/Tdahuyou/svg/tree/main/0013.%20%E7%BB%98%E5%88%B6%E3%80%90%E6%89%AB%E7%A0%81%E3%80%91%E5%9B%BE%E6%A0%87/README.md) <!-- [locale](./0013.%20%E7%BB%98%E5%88%B6%E3%80%90%E6%89%AB%E7%A0%81%E3%80%91%E5%9B%BE%E6%A0%87/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0013.%20%E7%BB%98%E5%88%B6%E3%80%90%E6%89%AB%E7%A0%81%E3%80%91%E5%9B%BE%E6%A0%87/README.md#1--notes)
  

- [ ] [0036. 绘制【群】图标](https://github.com/Tdahuyou/svg/tree/main/0036.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%BE%A4%E3%80%91%E5%9B%BE%E6%A0%87/README.md) <!-- [locale](./0036.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%BE%A4%E3%80%91%E5%9B%BE%E6%A0%87/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0036.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%BE%A4%E3%80%91%E5%9B%BE%E6%A0%87/README.md#1--notes)
  

- [ ] [0037. 绘制【眼睛】图标](https://github.com/Tdahuyou/svg/tree/main/0037.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%9C%BC%E7%9D%9B%E3%80%91%E5%9B%BE%E6%A0%87/README.md) <!-- [locale](./0037.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%9C%BC%E7%9D%9B%E3%80%91%E5%9B%BE%E6%A0%87/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0037.%20%E7%BB%98%E5%88%B6%E3%80%90%E7%9C%BC%E7%9D%9B%E3%80%91%E5%9B%BE%E6%A0%87/README.md#1--notes)
  

- [ ] [0033. 简易动态坐标系制作](https://github.com/Tdahuyou/svg/tree/main/0033.%20%E7%AE%80%E6%98%93%E5%8A%A8%E6%80%81%E5%9D%90%E6%A0%87%E7%B3%BB%E5%88%B6%E4%BD%9C/README.md) <!-- [locale](./0033.%20%E7%AE%80%E6%98%93%E5%8A%A8%E6%80%81%E5%9D%90%E6%A0%87%E7%B3%BB%E5%88%B6%E4%BD%9C/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0033.%20%E7%AE%80%E6%98%93%E5%8A%A8%E6%80%81%E5%9D%90%E6%A0%87%E7%B3%BB%E5%88%B6%E4%BD%9C/README.md#1--notes)
  

- [ ] [0039. 练习 - 绘制静态折线图](https://github.com/Tdahuyou/svg/tree/main/0039.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E9%9D%99%E6%80%81%E6%8A%98%E7%BA%BF%E5%9B%BE/README.md) <!-- [locale](./0039.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E9%9D%99%E6%80%81%E6%8A%98%E7%BA%BF%E5%9B%BE/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0039.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E9%9D%99%E6%80%81%E6%8A%98%E7%BA%BF%E5%9B%BE/README.md#1--notes)
  

- [ ] [0038. 练习 - 绘制动态折线图](https://github.com/Tdahuyou/svg/tree/main/0038.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E5%8A%A8%E6%80%81%E6%8A%98%E7%BA%BF%E5%9B%BE/README.md) <!-- [locale](./0038.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E5%8A%A8%E6%80%81%E6%8A%98%E7%BA%BF%E5%9B%BE/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0038.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E5%8A%A8%E6%80%81%E6%8A%98%E7%BA%BF%E5%9B%BE/README.md#1--notes)
  

- [ ] [0040. 练习 - 绘制柱状图](https://github.com/Tdahuyou/svg/tree/main/0040.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E6%9F%B1%E7%8A%B6%E5%9B%BE/README.md) <!-- [locale](./0040.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E6%9F%B1%E7%8A%B6%E5%9B%BE/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0040.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E6%9F%B1%E7%8A%B6%E5%9B%BE/README.md#1--notes)
  

- [ ] [0042. 练习 - 绘制静态的饼图](https://github.com/Tdahuyou/svg/tree/main/0042.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E9%9D%99%E6%80%81%E7%9A%84%E9%A5%BC%E5%9B%BE/README.md) <!-- [locale](./0042.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E9%9D%99%E6%80%81%E7%9A%84%E9%A5%BC%E5%9B%BE/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0042.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E9%9D%99%E6%80%81%E7%9A%84%E9%A5%BC%E5%9B%BE/README.md#1--notes)
  

- [ ] [0041. 练习 - 绘制动态饼图](https://github.com/Tdahuyou/svg/tree/main/0041.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E5%8A%A8%E6%80%81%E9%A5%BC%E5%9B%BE/README.md) <!-- [locale](./0041.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E5%8A%A8%E6%80%81%E9%A5%BC%E5%9B%BE/README.md) -->  
  - [1. 📒 notes](https://github.com/Tdahuyou/svg/tree/main/0041.%20%E7%BB%83%E4%B9%A0%20-%20%E7%BB%98%E5%88%B6%E5%8A%A8%E6%80%81%E9%A5%BC%E5%9B%BE/README.md#1--notes)
  
