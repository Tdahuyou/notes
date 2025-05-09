# [0005. Snipaste 截图工具](https://github.com/Tdahuyou/TNotes.notes/tree/main/notes/0005.%20Snipaste%20%E6%88%AA%E5%9B%BE%E5%B7%A5%E5%85%B7)

<!-- region:toc -->

- [📺 bilibili 👉 TNotes 合集](https://space.bilibili.com/407241004)
  - [bilibili.TNotes.notes.0005.1](https://www.bilibili.com/video/BV1QR4y1y7GG)
  - [bilibili.TNotes.notes.0005.2](https://www.bilibili.com/video/BV1Ak4y1h7st)
- [1. 📒 内容概述](#1--内容概述)
- [2. 📺 bilibili 在线视频 👉🏻 截图工具 | snipaste 的使用分享](#2--bilibili-在线视频--截图工具--snipaste-的使用分享)
- [3. 📺 bilibili 在线视频 👉🏻 使用 snipaste 截图工具截取图片文件的正确做法](#3--bilibili-在线视频--使用-snipaste-截图工具截取图片文件的正确做法)
- [4. 🔍 查看我的 snipaste 首选项配置](#4--查看我的-snipaste-首选项配置)
- [5. 💻 实现网页长截图](#5--实现网页长截图)
- [6. 💻 文本截图](#6--文本截图)
- [7. 💻 快速截全屏](#7--快速截全屏)
- [8. ⏰ 使用贴图，快速拼出简易的封面](#8--使用贴图快速拼出简易的封面)
- [9. 🤔 snipaste 将来来会支持长截图（滚动截图）功能吗？](#9--snipaste-将来来会支持长截图滚动截图功能吗)
- [10. 🤔 snipaste 的设计初衷是？](#10--snipaste-的设计初衷是)
- [11. 🤔 对于 snipaste 来说，何为一次完整的截图？](#11--对于-snipaste-来说何为一次完整的截图)
- [12. 🤔 如何开启自动检测窗口？](#12--如何开启自动检测窗口)
- [13. 🤔 如何实现无损截图？](#13--如何实现无损截图)
- [14. 🤔 能被复制的内容就能被贴出来吗？](#14--能被复制的内容就能被贴出来吗)
- [15. 🔗 References](#15--references)

<!-- endregion:toc -->

## 1. 📒 内容概述

- 这篇笔记主要介绍个人截止目前 `2025 年 3 月 2 日 11:11:07` 还在使用的一款截图工具 snipaste。笔记篇幅较长，大致介绍了以下这些点：
  - Snipaste 是什么？
  - 取色
  - 贴图
  - 文本截图
  - 快速截全屏
  - 自动检测窗口
  - 无损截图
  - 使用浏览器命令实现网页长截图
  - Snipaste 的设计初衷是？
  - 汇总并答复网友反馈的相关问题
  - ……

## 2. 📺 bilibili 在线视频 👉🏻 截图工具 | snipaste 的使用分享

<BilibiliOutsidePlayer id="BV1QR4y1y7GG" />

- https://www.bilibili.com/video/BV1QR4y1y7GG/
- bilibili 在线视频 👉🏻 截图工具 | snipaste 的使用分享
- 视频较长 21min，主要介绍了个人日常在使用 snipaste 这款工具时，用到的那些功能。并没有将 snipaste 的所有功能都拿出来介绍。
- 视频内容主要包括 **常用功能介绍** + **补充说明** 两大部分。
  - 常用功能：
    - 取色
    - 贴图
    - 拼图
    - 剪切板贴图
    - 透明度调节
    - 缩略图
    - 历史记录
  - 补充说明：
    - 截长图问题
    - 识别问题（仅介绍 mac 端）
- 以上罗列的是在录制视频之前，想到的几个核心点，在视频中都有对应的片段说明，点击对应的分段即可查阅：
  - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-41-05.png)

## 3. 📺 bilibili 在线视频 👉🏻 使用 snipaste 截图工具截取图片文件的正确做法

<BilibiliOutsidePlayer id="BV1Ak4y1h7st" />

- https://www.bilibili.com/video/BV1Ak4y1h7st
- bilibili 在线视频 👉🏻 使用 snipaste 截图工具截取图片文件的正确做法
- 先来看看传统截图工具的做法，这里以微信截图工具为例，若需要截取一张图片，一共分为两步：
  1. 框选截图区域
  2. 完成截图
- 【省流】一句话阐述视频内容
  - 其实视频中介绍的做法，从剪切板中将图片贴出来（实际上就是 **贴图**）。这种做法的前提是图片文件可以被复制。
  - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-45-39.png)
- 【优势分析】相较于传统的做法，贴图做法都有哪些优势呢？下面我们简单罗列几点：
- **透明背景**
  - **需求描述：** 有一张带有透明背景的 png 图片，如何将这个图片截下来，同时需要确保图片依旧带有透明背景呢？
  - **传统做法：** 做不到……
  - **snipaste：** 如果图片文件本身就是有透明的背景的，那么贴出来的图依旧是带有透明背景的。
- **轻易裁剪页面上的不规则图片**
  - **需求描述：** 头像也是图片，但是很多站点，头像并不是一个方方正正的矩形，此时使用截图工具该如何截取完整的头像原图呢？
  - **传统做法：** 截图行为会受到容器边界的影响，无法截取完整的图片。
  - **snipaste：** 如果使用 snipaste 的话，解决起来就非常简单，复制完图片之后，直接贴出来就好了…… 以 B 站的圆形头像为例，截出来的效果也是一个完整的图片文件。
- **无需担心大图溢出容器**
  - **需求描述：** 有一张图片，一个屏幕装不下它，如何一键将图片截下来呢？
  - **传统做法：** 没法一键截图，不过可以滚动容器，每次截取图片的一部分
  - **snipaste：** 无论图片多长，多宽，只要能够选中图片的一角，就可以快速将整张图片截下来
- **保持图片的原有尺寸**
- ……

## 4. 🔍 查看我的 snipaste 首选项配置

- 下面记录了个人在 `23.03.03` 时的 snipaste 首选项配置。之后的配置可能会有所变化，不过在这个时间点之前录制的视频，使用的是这些配置。

::: swiper

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-58-42.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-56-14.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-56-59.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-57-17.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-57-29.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-57-37.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-57-43.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-57-49.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-57-55.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-58-02.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-58-08.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-58-14.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-58-36.png)

:::

- 这部分配置仅仅是起到一个参考作用，具体如何配置，根据个人的使用习惯来配即可。

## 5. 💻 实现网页长截图

- snipaste 自身不带有长截图功能，下面记录的是其它解决方案的实现流程。个人使用的是 chrome 浏览器，不同浏览器的做法也许会有所不同……
- **【流程说明】**
  - **打开 chrome 浏览器，随便进入一个你需要截取的网**
    - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-04-25.png)
  - **打开开发者工具**
    - 方式 1：右键页面任意位置，选择检查
      - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-05-12.png)
    - 方式 2：按下键盘上的 F12 按钮，成功打开之后，将会看到页面上会出现这样一个工具板块。
      - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-06-39.png)
  - **Run command**
    - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-06-58.png)
    - 可以记一下图片中标注的 Run command 的快捷键 `cmd shift p`，这样下次直接按快捷键就可以 Run command 了。
  - **输入 Capture full size screenshot 搜索对应的命令，点击命令即可截取全网页。**
    - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-07-40.png)
    - 其实不需要输入全，在我们键入内容的同时，它就会帮我们自动匹配对应的命令，只要找到「Capture full size screenshot」命令（只要输入 full 就可以找到）然后点击它即可。
- **🤔 如果不想截取整个页面，指向截取某个区域，该如何做呢？**
  - [bilibili 在线视频 👉🏻 截图工具 | snipaste 的使用分享](https://www.bilibili.com/video/BV1QR4y1y7GG/) 中的长截图部分有介绍到详细步骤，自行回看即可……
  - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-09-33.png)

## 6. 💻 文本截图

- 【常见应用场景】
  - 代码块
    - 如果是代码块的话，比如从 VSCode 这样的 IDE 中复制代码，在贴图时将会自动将主题样式带上，可读性会好很多。
  - word 文档
  - ……
- 【操作流程】
  - 选中想要看的文本内容
  - 按下 `cmd C` 将内容复制到剪切板中
  - 按下 `option V` 将内容贴到桌面上

## 7. 💻 快速截全屏

这一需求是网友在评论中询问的内容。

1. 按下 `option A` 进入截图模式
2. 按下 `cmd A` 将截图区域选择为全屏
3. 双击鼠标左键，将截取的图片贴到桌面上（如果不需要贴出来，那么可以跳过该步骤）
4. 按下 `cmd C` 复制截取的内容到剪切板中

## 8. ⏰ 使用贴图，快速拼出简易的封面

贴图的一个使用场景 —— 快速拼出一些简单的封面，完成一些简单的封面设计需求。下面将以以下这个视频的封面的制作为例来进行介绍。

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-12-21.png)

一、视频封面制作流程介绍。

1. 准备素材
2. 准备一个纯色的背景
3. 调整素材到合适位置后重新截图

二、……

> 语言显得苍白无力，还是找时间录制视频来说明吧，一顿操作下来估计也用不到 2min。

## 9. 🤔 snipaste 将来来会支持长截图（滚动截图）功能吗？

- ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-14-05.png)
- 搜了一下，在 github 上找到了相关资料 - [🔍 Snipaste Issues #19](https://github.com/Snipaste/feedback/issues/19)，原来这个需求鸽了 6 年。不过，按照作者的说法是会的。

## 10. 🤔 snipaste 的设计初衷是？

- 答：**做临时笔记**
- 在【[少数派](https://sspai.com/)】上看到了一篇有关 snipaste 的文章，介绍了有关 snipaste 的相关内容，里面提到了作者对于 snipaste 的设计初衷的回复。感觉作者的这个回复很 nice，因为自己在使用 snipaste 时，更多时候也不是将其视作一个截图工具来使用，而是当做一个临时笔记来用。把一些想要看的内容给临时贴到屏幕上来看，如果是纯文本的话，每个贴图还能作为文本的容器，需要这些文本时随取随用即可。
  - [幕后丨他做了最强免费「截图」工具 Snipaste 后，还有上万字的话想说 - 少数派](https://sspai.com/post/35097)，这是某次在少数派上看到的文章 —— 一篇关于作者的采访，简言之就是这东西做出来是为了方便自身学习的，想写就写，自身没需求就不写……
    - snipaste 的目的就是用图片来做笔记，临时的笔记，所以是贴在屏幕上而不是放在笔记本里。（这是作者的原话）以下是来自文章中的截图。
    - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-18-14.png)

## 11. 🤔 对于 snipaste 来说，何为一次完整的截图？

这部分主要是对网友的问题做一个简单的回复。

**【问题背景】**

视频发布后，在收到的评论中有不少人反馈截图用起来怪怪的。

这很可能是因为大家适应了类似微信自带的截图工具这样的截图模式 —— 框选完区域后，图片就自动跑到了剪切板中。

但是在个人发布的视频中，每次选完区域后，图片是被贴到了桌面上，然后再右键复制贴出来的图片到剪切板中。因为多了一个步骤，这个步骤对于很多初次使用 snipaste 这种截图模式的人来讲，可能确实会比较陌生。于是写了这个回答，对个人截图的流程做一个详细的说明。

**【截图流程】**

1. 进入截图状态 `option A`
2. 框选截图区域，将截图贴到桌面上
3. 对贴图进行二次处理
   1. 选中贴图，按下空格键，会在贴图底部出现贴图的操作按钮
   2. 注意：如果在首选项中配置了截图直接到剪切板，那么不会有这一步
4. 复制贴图
   1. 方式 1：选中想要复制的贴图，按下 `Cmd C`
   2. 方式 2：右键想要复制的贴图，点击「复制图像」
5. 关闭贴图

**【注意】贴图 ≠ 完成截图**

在上述步骤中，第二步成功将图片贴到桌面上，并不意味着图片已经复制了。

因为图片仅仅是被贴出来了，还没有复制到剪切板中，这是俩不同的步骤（可以通过配置，让贴出来的图片自动写入剪切板）。在将图片贴出来之后，我们还需要将其复制到剪切板中。想要将贴图复制到剪切板中，可以选中贴图后，按下 `Ctrl C` 完成复制；也可以右键贴图，点击复制按钮完成复制。

**有关【首选项】个人配置的补充说明**

截屏的快捷键默认并非 `option + A`，这是我自定义的快捷键，可以在首选项中配置自己习惯的截图快捷键，可以参考 👉🏻 这篇笔记中的 —— 我的 snipaste 首选项配置。

## 12. 🤔 如何开启自动检测窗口？

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-19-45.png)

**【方案 1】**

1. 打开首选项
2. 勾选「自动检测窗口」

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-19-54.png)

**【方案 2】**

若视频窗口的位置在屏幕上相对比较固定的话，那么可以通过 `R` 恢复历史截屏区域来快速定位视频窗口的位置。

1. 第一次截图时，手动框选出网页中央的视频窗口区域
2. 再次进入截图模式时，按下 R，会自动恢复到第一步框选的截图区域

## 13. 🤔 如何实现无损截图？

::: swiper

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-20-05.png)

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-20-31.png)

:::

经网友反馈，说是即便设置为 100 完全不压缩，实际上截出来的效果还是感觉被压缩了。这可能和个人使用的文档编辑器有关，大部分文档编辑器都会自动对上传的图片进行压缩处理，导致图片变得相对比较模糊。当然，也有可能是 snipaste 本身无法做到无损截图。

> 因工种不同，有些人对截图图像的质量要求比较高。可能专门做图像设计相关工作的对图像质量比较敏感，不过对于身为码农的我而言，图像质量始终配置的都是 `-1`，对于截取的图片，还真看不太出来图像是否被压缩了。

## 14. 🤔 能被复制的内容就能被贴出来吗？

答：**是的。**

![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-14-21-04.png)

但凡是可以复制的内容，都能贴出来，更多玩法自己开发即可。本文档记录的内容，大多也都是贴图的一些玩法。

## 15. 🔗 References

::: details

- https://www.snipaste.com/
  - snipaste 官网，自行下载安装 snipaste。
- https://docs.snipaste.com/zh-cn/
  - snipaste 说明文档，记录了有关 snipaste 工具的相关视频说明，对于不理解的点可以访问该链接查看帮助说明。
- https://github.com/liulex
  - snipaste 作者 LeLiu 的 github。
  - 从 github 的信息来看，作者是一位广州人……
    - ![](https://cdn.jsdelivr.net/gh/Tdahuyou/imgs@main/2024-12-13-13-37-34.png)
- https://github.com/Snipaste/feedback/issues/19
  - 有关 snipaste 的反馈 —— 关于滚屏截屏支持讨论。
- https://sspai.com/post/35097
  - 幕后丨他做了最强免费「截图」工具 Snipaste 后，还有上万字的话想说 - 少数派

:::
