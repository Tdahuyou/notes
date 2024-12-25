# eslint

<!-- region:toc -->
- [eslint](#eslint)
  - [1. 初步认识 eslint](#1-初步认识-eslint)
<!-- endregion:toc -->

## 1. 初步认识 eslint

- [ ] [0001. eslint 是什么？](https://github.com/Tdahuyou/eslint/tree/main/0001.%20eslint%20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F/README.md) <!-- [locale](./0001.%20eslint%20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F/README.md) -->  
  - [1. 🔗 links](https://github.com/Tdahuyou/eslint/tree/main/0001.%20eslint%20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F/README.md#1--links)
  - [2. 📒 eslint 简介](https://github.com/Tdahuyou/eslint/tree/main/0001.%20eslint%20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F/README.md#2--eslint-简介)
  - [3. 📒 eslint 的一些主要功能和用途](https://github.com/Tdahuyou/eslint/tree/main/0001.%20eslint%20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F/README.md#3--eslint-的一些主要功能和用途)
  - [4. 💻 demo - 基础示例 - 尝试添加规则：程序中的引号必须使用单引号](https://github.com/Tdahuyou/eslint/tree/main/0001.%20eslint%20%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F/README.md#4--demo---基础示例---尝试添加规则程序中的引号必须使用单引号)
  

- [ ] [0002. eslint 的配置文件的命名](https://github.com/Tdahuyou/eslint/tree/main/0002.%20eslint%20%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%9A%84%E5%91%BD%E5%90%8D/README.md) <!-- [locale](./0002.%20eslint%20%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%9A%84%E5%91%BD%E5%90%8D/README.md) -->  
  - [1. 🔗 官方文档 > Configuration File](https://github.com/Tdahuyou/eslint/tree/main/0002.%20eslint%20%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%9A%84%E5%91%BD%E5%90%8D/README.md#1--官方文档->-configuration-file)
  - [2. 📒 eslint 的配置文件名称的更多写法](https://github.com/Tdahuyou/eslint/tree/main/0002.%20eslint%20%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E7%9A%84%E5%91%BD%E5%90%8D/README.md#2--eslint-的配置文件名称的更多写法)
  

- [ ] [0003. VSCode 中的 eslint 插件](https://github.com/Tdahuyou/eslint/tree/main/0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md) <!-- [locale](./0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md) -->  
  - [1. 🔗 vscode marketplace eslint](https://github.com/Tdahuyou/eslint/tree/main/0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md#1--vscode-marketplace-eslint)
  - [2. 📒 VS Code ESLint extension 简介](https://github.com/Tdahuyou/eslint/tree/main/0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md#2--vs-code-eslint-extension-简介)
  - [3. 📒 主要功能](https://github.com/Tdahuyou/eslint/tree/main/0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md#3--主要功能)
  - [4. 📒 安装与设置](https://github.com/Tdahuyou/eslint/tree/main/0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md#4--安装与设置)
  - [5. 📒 常见配置](https://github.com/Tdahuyou/eslint/tree/main/0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md#5--常见配置)
  - [6. 📒 常见的初始配置流程](https://github.com/Tdahuyou/eslint/tree/main/0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md#6--常见的初始配置流程)
  - [7. 📒 常见问题](https://github.com/Tdahuyou/eslint/tree/main/0003.%20VSCode%20%E4%B8%AD%E7%9A%84%20eslint%20%E6%8F%92%E4%BB%B6/README.md#7--常见问题)
  

- [ ] [0004. 使用 no-unused-vars 配置规则：未使用的变量报错](https://github.com/Tdahuyou/eslint/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20no-unused-vars%20%E9%85%8D%E7%BD%AE%E8%A7%84%E5%88%99%EF%BC%9A%E6%9C%AA%E4%BD%BF%E7%94%A8%E7%9A%84%E5%8F%98%E9%87%8F%E6%8A%A5%E9%94%99/README.md) <!-- [locale](./0004.%20%E4%BD%BF%E7%94%A8%20no-unused-vars%20%E9%85%8D%E7%BD%AE%E8%A7%84%E5%88%99%EF%BC%9A%E6%9C%AA%E4%BD%BF%E7%94%A8%E7%9A%84%E5%8F%98%E9%87%8F%E6%8A%A5%E9%94%99/README.md) -->  
  - [1. 🔗 eslint 官方文档 > no-unused-vars](https://github.com/Tdahuyou/eslint/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20no-unused-vars%20%E9%85%8D%E7%BD%AE%E8%A7%84%E5%88%99%EF%BC%9A%E6%9C%AA%E4%BD%BF%E7%94%A8%E7%9A%84%E5%8F%98%E9%87%8F%E6%8A%A5%E9%94%99/README.md#1--eslint-官方文档->-no-unused-vars)
  - [2. 📒 `no-unused-vars` 简介](https://github.com/Tdahuyou/eslint/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20no-unused-vars%20%E9%85%8D%E7%BD%AE%E8%A7%84%E5%88%99%EF%BC%9A%E6%9C%AA%E4%BD%BF%E7%94%A8%E7%9A%84%E5%8F%98%E9%87%8F%E6%8A%A5%E9%94%99/README.md#2--no-unused-vars-简介)
  - [3. 💻 demo - `'no-unused-vars': 'error'`](https://github.com/Tdahuyou/eslint/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20no-unused-vars%20%E9%85%8D%E7%BD%AE%E8%A7%84%E5%88%99%EF%BC%9A%E6%9C%AA%E4%BD%BF%E7%94%A8%E7%9A%84%E5%8F%98%E9%87%8F%E6%8A%A5%E9%94%99/README.md#3--demo---'no-unused-vars'-'error')
  - [4. 📒 忽略模式概述](https://github.com/Tdahuyou/eslint/tree/main/0004.%20%E4%BD%BF%E7%94%A8%20no-unused-vars%20%E9%85%8D%E7%BD%AE%E8%A7%84%E5%88%99%EF%BC%9A%E6%9C%AA%E4%BD%BF%E7%94%A8%E7%9A%84%E5%8F%98%E9%87%8F%E6%8A%A5%E9%94%99/README.md#4--忽略模式概述)
  

- [ ] [0005. eslint 配置格式](https://github.com/Tdahuyou/eslint/tree/main/0005.%20eslint%20%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F/README.md) <!-- [locale](./0005.%20eslint%20%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F/README.md) -->  
  - [1. 📒 eslint 的配置文件都有哪些格式？](https://github.com/Tdahuyou/eslint/tree/main/0005.%20eslint%20%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F/README.md#1--eslint-的配置文件都有哪些格式)
  - [2. 💻 `.eslintrc.js` (JavaScript)](https://github.com/Tdahuyou/eslint/tree/main/0005.%20eslint%20%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F/README.md#2--eslintrcjs-(javascript))
  - [3. 💻 `.eslintrc.json` (JSON)](https://github.com/Tdahuyou/eslint/tree/main/0005.%20eslint%20%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F/README.md#3--eslintrcjson-(json))
  - [4. 💻 `.eslintrc.yaml` 或 `.eslintrc.yml` (YAML)](https://github.com/Tdahuyou/eslint/tree/main/0005.%20eslint%20%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F/README.md#4--eslintrcyaml-或-eslintrcyml-(yaml))
  - [5. 💻 `.eslintrc.cjs` (CommonJS)](https://github.com/Tdahuyou/eslint/tree/main/0005.%20eslint%20%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F/README.md#5--eslintrccjs-(commonjs))
  - [6. 💻 包管理器配置文件（如 `package.json`）](https://github.com/Tdahuyou/eslint/tree/main/0005.%20eslint%20%E9%85%8D%E7%BD%AE%E6%A0%BC%E5%BC%8F/README.md#6--包管理器配置文件如-packagejson)
  

- [ ] [0006. 忽略文件 .eslintignore](https://github.com/Tdahuyou/eslint/tree/main/0006.%20%E5%BF%BD%E7%95%A5%E6%96%87%E4%BB%B6%20.eslintignore/README.md) <!-- [locale](./0006.%20%E5%BF%BD%E7%95%A5%E6%96%87%E4%BB%B6%20.eslintignore/README.md) -->  
  - [1. 📒 忽略文件 `.eslintignore` 简介](https://github.com/Tdahuyou/eslint/tree/main/0006.%20%E5%BF%BD%E7%95%A5%E6%96%87%E4%BB%B6%20.eslintignore/README.md#1--忽略文件-eslintignore-简介)
  
