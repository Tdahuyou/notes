# git

<!-- region:toc -->
- [git](#git)
  - [1. 分支](#1-分支)
  - [2. 远程仓库](#2-远程仓库)
  - [3. git 配置](#3-git-配置)
  - [4. 错误处理](#4-错误处理)
<!-- endregion:toc -->


## 1. 分支

- [x] [0006. 分支重命名](https://github.com/Tdahuyou/git/tree/main/0006.%20%E5%88%86%E6%94%AF%E9%87%8D%E5%91%BD%E5%90%8D/README.md) <!-- [locale](./0006.%20%E5%88%86%E6%94%AF%E9%87%8D%E5%91%BD%E5%90%8D/README.md) -->  
  - [1. 💻 分支重命名](https://github.com/Tdahuyou/git/tree/main/0006.%20%E5%88%86%E6%94%AF%E9%87%8D%E5%91%BD%E5%90%8D/README.md#1--分支重命名)
    - [1.1. 重命名本地分支](https://github.com/Tdahuyou/git/tree/main/0006.%20%E5%88%86%E6%94%AF%E9%87%8D%E5%91%BD%E5%90%8D/README.md#11-重命名本地分支)
    - [1.2. 重命名远程分支](https://github.com/Tdahuyou/git/tree/main/0006.%20%E5%88%86%E6%94%AF%E9%87%8D%E5%91%BD%E5%90%8D/README.md#12-重命名远程分支)
    - [1.3. 注意事项](https://github.com/Tdahuyou/git/tree/main/0006.%20%E5%88%86%E6%94%AF%E9%87%8D%E5%91%BD%E5%90%8D/README.md#13-注意事项)
  

## 2. 远程仓库

- [x] [0001. 修改指定远程仓库的 url](https://github.com/Tdahuyou/git/tree/main/0001.%20%E4%BF%AE%E6%94%B9%E6%8C%87%E5%AE%9A%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%20url/README.md) <!-- [locale](./0001.%20%E4%BF%AE%E6%94%B9%E6%8C%87%E5%AE%9A%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%20url/README.md) -->  
  - [1. 💻 使用 `git remote set-url` 命令](https://github.com/Tdahuyou/git/tree/main/0001.%20%E4%BF%AE%E6%94%B9%E6%8C%87%E5%AE%9A%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%20url/README.md#1--使用-git-remote-set-url-命令)
  - [2. 💻 直接编辑 `.git/config` 文件](https://github.com/Tdahuyou/git/tree/main/0001.%20%E4%BF%AE%E6%94%B9%E6%8C%87%E5%AE%9A%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%20url/README.md#2--直接编辑-gitconfig-文件)
  - `git remote set-url origin 新的URL`
  

## 3. git 配置

- [x] [0005. git proxy 配置](https://github.com/Tdahuyou/git/tree/main/0005.%20git%20proxy%20%E9%85%8D%E7%BD%AE/README.md) <!-- [locale](./0005.%20git%20proxy%20%E9%85%8D%E7%BD%AE/README.md) -->  
  - [1. 📒 常见的超时报错 443 日志](https://github.com/Tdahuyou/git/tree/main/0005.%20git%20proxy%20%E9%85%8D%E7%BD%AE/README.md#1--常见的超时报错-443-日志)
  - [2. 💻 查看代理配置 => git config --get http.proxy](https://github.com/Tdahuyou/git/tree/main/0005.%20git%20proxy%20%E9%85%8D%E7%BD%AE/README.md#2--查看代理配置-=>-git-config---get-httpproxy)
  - [3. 💻 设置代理配置 => git config http.proxy 代理地址](https://github.com/Tdahuyou/git/tree/main/0005.%20git%20proxy%20%E9%85%8D%E7%BD%AE/README.md#3--设置代理配置-=>-git-config-httpproxy-代理地址)
  - [4. 💻 取消代理配置 => git config --global --unset http.proxy](https://github.com/Tdahuyou/git/tree/main/0005.%20git%20proxy%20%E9%85%8D%E7%BD%AE/README.md#4--取消代理配置-=>-git-config---global---unset-httpproxy)
  - [5. 💻 验证配置 => git config --list](https://github.com/Tdahuyou/git/tree/main/0005.%20git%20proxy%20%E9%85%8D%E7%BD%AE/README.md#5--验证配置-=>-git-config---list)
  

## 4. 错误处理

记录一些在开发时遇到的 git 错误。

- [x] [0002. 尝试变更到远程仓库时遇到 Permission denied (publickey) 错误](https://github.com/Tdahuyou/git/tree/main/0002.%20%E5%B0%9D%E8%AF%95%E5%8F%98%E6%9B%B4%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%97%B6%E9%81%87%E5%88%B0%20Permission%20denied%20(publickey)%20%E9%94%99%E8%AF%AF/README.md) <!-- [locale](./0002.%20%E5%B0%9D%E8%AF%95%E5%8F%98%E6%9B%B4%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%97%B6%E9%81%87%E5%88%B0%20Permission%20denied%20(publickey)%20%E9%94%99%E8%AF%AF/README.md) -->  
  - [1. 💻 尝试将代码推送到 GitHub 时遇到 Permission denied (publickey). 错误的解决流程](https://github.com/Tdahuyou/git/tree/main/0002.%20%E5%B0%9D%E8%AF%95%E5%8F%98%E6%9B%B4%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E6%97%B6%E9%81%87%E5%88%B0%20Permission%20denied%20(publickey)%20%E9%94%99%E8%AF%AF/README.md#1--尝试将代码推送到-github-时遇到-permission-denied-(publickey)-错误的解决流程)
  

- [x] [0004. 处理每次使用 SSH 密钥进行身份验证时都需要输入密码短语（passphrase）的问题](https://github.com/Tdahuyou/git/tree/main/0004.%20%E5%A4%84%E7%90%86%E6%AF%8F%E6%AC%A1%E4%BD%BF%E7%94%A8%20SSH%20%E5%AF%86%E9%92%A5%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E6%97%B6%E9%83%BD%E9%9C%80%E8%A6%81%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E7%9F%AD%E8%AF%AD%EF%BC%88passphrase%EF%BC%89%E7%9A%84%E9%97%AE%E9%A2%98/README.md) <!-- [locale](./0004.%20%E5%A4%84%E7%90%86%E6%AF%8F%E6%AC%A1%E4%BD%BF%E7%94%A8%20SSH%20%E5%AF%86%E9%92%A5%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E6%97%B6%E9%83%BD%E9%9C%80%E8%A6%81%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E7%9F%AD%E8%AF%AD%EF%BC%88passphrase%EF%BC%89%E7%9A%84%E9%97%AE%E9%A2%98/README.md) -->  
  - [1. 📒 问题分析](https://github.com/Tdahuyou/git/tree/main/0004.%20%E5%A4%84%E7%90%86%E6%AF%8F%E6%AC%A1%E4%BD%BF%E7%94%A8%20SSH%20%E5%AF%86%E9%92%A5%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E6%97%B6%E9%83%BD%E9%9C%80%E8%A6%81%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E7%9F%AD%E8%AF%AD%EF%BC%88passphrase%EF%BC%89%E7%9A%84%E9%97%AE%E9%A2%98/README.md#1--问题分析)
  - [2. 💻 使用 `ssh-agent` 守护进程](https://github.com/Tdahuyou/git/tree/main/0004.%20%E5%A4%84%E7%90%86%E6%AF%8F%E6%AC%A1%E4%BD%BF%E7%94%A8%20SSH%20%E5%AF%86%E9%92%A5%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E6%97%B6%E9%83%BD%E9%9C%80%E8%A6%81%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E7%9F%AD%E8%AF%AD%EF%BC%88passphrase%EF%BC%89%E7%9A%84%E9%97%AE%E9%A2%98/README.md#2--使用-ssh-agent-守护进程)
  - [3. 💻 使用无密码短语的密钥](https://github.com/Tdahuyou/git/tree/main/0004.%20%E5%A4%84%E7%90%86%E6%AF%8F%E6%AC%A1%E4%BD%BF%E7%94%A8%20SSH%20%E5%AF%86%E9%92%A5%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E6%97%B6%E9%83%BD%E9%9C%80%E8%A6%81%E8%BE%93%E5%85%A5%E5%AF%86%E7%A0%81%E7%9F%AD%E8%AF%AD%EF%BC%88passphrase%EF%BC%89%E7%9A%84%E9%97%AE%E9%A2%98/README.md#3--使用无密码短语的密钥)
  

- [x] [0003. git clone 报 RPC failed 错误](https://github.com/Tdahuyou/git/tree/main/0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md) <!-- [locale](./0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md) -->  
  - [1. 💻 git clone => ❌ RPC failed](https://github.com/Tdahuyou/git/tree/main/0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md#1--git-clone-=>--rpc-failed)
  - [2. 💻 其他解决方案](https://github.com/Tdahuyou/git/tree/main/0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md#2--其他解决方案)
    - [2.1. 检查网络连接](https://github.com/Tdahuyou/git/tree/main/0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md#21-检查网络连接)
    - [2.2. 分段克隆](https://github.com/Tdahuyou/git/tree/main/0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md#22-分段克隆)
    - [2.3. 使用 SSH 克隆](https://github.com/Tdahuyou/git/tree/main/0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md#23-使用-ssh-克隆)
    - [2.4. 检查防火墙和代理设置](https://github.com/Tdahuyou/git/tree/main/0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md#24-检查防火墙和代理设置)
    - [2.5. 更新 Git](https://github.com/Tdahuyou/git/tree/main/0003.%20git%20clone%20%E6%8A%A5%20RPC%20failed%20%E9%94%99%E8%AF%AF/README.md#25-更新-git)
  - 解决办法：`git config --global http.sslVerify false`
  
