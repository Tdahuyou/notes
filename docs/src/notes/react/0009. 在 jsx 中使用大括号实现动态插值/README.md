# [0009. 在 jsx 中使用大括号实现动态插值](https://github.com/Tdahuyou/react/tree/main/0009.%20%E5%9C%A8%20jsx%20%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%8B%AC%E5%8F%B7%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E6%8F%92%E5%80%BC)

<!-- region:toc -->
- [1. 📒 在 JSX 中使用 JS 表达式](#1--在-jsx-中使用-js-表达式)
- [2. 🔍 Hedy Lamarr 是谁？](#2--hedy-lamarr-是谁)
<!-- endregion:toc -->
- 在 jsx 中可以使用 `{}` 语法来动态插入 js 表达式。
- 类似于 vue 中的指令 v-bind 的作用。
- JSX 让你可以在 Jaavascript 中嵌入 HTML 语法。而大括号可以让你在 JSX 中 “回到” JavaScript 中，这样你就可以从你的代码中嵌入一些变量并展示给用户。
- 在 JSX 的大括号中插入 null、undefined、false 这些值，是不会显示的，如果要显示的话则不应该丢到大括号中，应该直接书写，将其事做普通的字符串来显示。
- 在 JSX 的大括号中插入普通对象（比如 `{ foo: 123, bar: 'abc' }`）是无法渲染的，会报错。

## 1. 📒 在 JSX 中使用 JS 表达式

- JSX 让你可以在 Jaavascript 中嵌入 HTML 语法，而大括号可以让你在 JSX 中 “回到” JavaScript 中，这样你就可以从你的代码中嵌入一些变量并展示给用户。例如，这将显示 user.name：

```jsx
return (
  <h1>
    {user.name}
  </h1>
);
```

- 你还可以将 JSX 属性 “转义到 JavaScript”，但你必须使用大括号而非引号。例如，
  - `className="avatar"` 是将 "avatar" 字符串传递给 className，作为 CSS 的 class。
  - `src={user.imageUrl}` 会读取 JavaScript 的 user.imageUrl 变量，然后将该值作为 src 属性。

```jsx
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

- 你也可以把更为复杂的表达式放入 JSX 的大括号内，例如 [字符串拼接](https://javascript.info/operators#string-concatenation-with-binary)：

```jsx
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

最终渲染效果如下：

![](assets/2024-09-24-14-17-10.png)


## 2. 🔍 Hedy Lamarr 是谁？

- https://www.douban.com/personage/27246464/
  - 豆瓣 - 海蒂·拉玛 Hedy Lamarr
- https://en.wikipedia.org/wiki/Hedy_Lamarr
  - wiki - Hedy Lamarr
- Hedy Lamarr（1914年11月9日—2000年1月19日），原名海德维希·爱娃·玛丽亚·基斯勒（Hedwig Eva Maria Kiesler），是一位奥地利裔美国女演员，同时也是一位发明家。她在电影界的生涯跨越了从无声电影到有声电影的时代，并在好莱坞黄金时代成为了一位著名的影星。
- Lamarr 出生于奥地利维也纳的一个犹太家庭，在她的早期职业生涯中，她在欧洲电影界崭露头角。18岁时，她出演了争议性的电影《狂喜》（Ecstasy, 1933），该片因其大胆的裸露场景而引起了轰动。随后，她与一位比她年长很多的军火商弗里茨·曼德尔结婚，这段婚姻并不幸福，最终她逃离了丈夫，并前往巴黎，后来移居美国。
- 在美国，Lamarr 更名为 Hedy Lamarr 并开始了她的好莱坞生涯。她出演了许多成功的电影，包括《齐格菲女郎》（Ziegfeld Girl, 1941）和《塞缪尔·戈德温的天堂》（Heavenly Partners, 1947）等。
- 除了她的演艺事业外，Lamarr 还是一名才华横溢的发明家。她对技术非常感兴趣，并与音乐家乔治·安泰尔共同开发了一种称为“频率跳变”（frequency hopping）的技术，这项技术最初是为了帮助盟军在第二次世界大战期间对抗德国潜艇的干扰信号。虽然当时这项专利没有被广泛使用，但它的原理后来成为了现代无线通信技术的基础之一，包括Wi-Fi、蓝牙以及手机网络等。
- 直到晚年，Hedy Lamarr 的科学贡献才逐渐被人们所认识。1997年，她获得了电子前沿基金会（Electronic Frontier Foundation, EFF）颁发的先锋奖，以表彰她在扩展频谱通信领域的贡献。尽管她的名字可能不如她的银幕形象那样广为人知，但她作为一位先驱女性科学家的地位是不可否认的。