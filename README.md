# Blog-Index 通用网站导航

![](https://img.shields.io/badge/Base-Vue2.2-brightgreen.svg)
![](https://img.shields.io/badge/Build-Vue--Cli3-orange.svg)
![](https://img.shields.io/badge/Installer-Yarn-blue.svg)

![](./demo/show.png)

> 本项目正在尝试使用 Vue3 进行重构，并尝试接入更多的新功能，切入 dev 分支可以查看当前的新代码进度 ~ 感谢 Starred

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=blog-index) [稳定版预览地址(master branch)](https://blog-index.vercel.app/)

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=blog-index-git-dev-esunr) [开发版预览地址(dev branch)](https://blog-index-git-dev-esunr.vercel.app/)

## About | 关于

这是一个基于 Vue 的通用网站导航页面，你可以将其放在个人网站的首页作为您博客的引导页面或者是您其他项目的引导页。兼容了多平台的显示效果（基于Flex布局），方便游客浏览您的个人网站，背景图来自于Bing每日图片。

页面分为两部分，一个是全屏的展示页，一个是导航抽屉页，阅读下面的“使用方法”来为您的网站配置基本信息与导航信息，[点击查看网站示例（目前已改为实时更新dev分支的预览效果）](https://www.esunr.xyz)。

## How to use | 使用方法

安装依赖：

```shell
yarn install
```

开发模式：

```shell
yarn serve
```

本项目中，提供了两种使用方法：

一种是只需要将网站的相关信息按要求填入配置文件，之后再编译整个项目就可以生成一个适用于你的网站的静态导航页面；

另一种则是为页面添加后台数据支持，详情请参阅下文的第2步。

### 1. 配置信息

本项目的配置文件存放在 `/src/config.js` 中，你可以进入该文件进行修改~

另外在编译前，你需要将 `/src/assets/logo.svg` 替换为你的网站LOGO，注意格式必须为 `svg` 文件，同时将 `/public/favicon.ico` 替换为你网站的 favicon。

### 2. 添加服务器支持（可选）
如果想要使用后台服务器来加加载和管理数据，请将 `SERVE` 设置为 `true` 并将 `HOST` 填写为你的服务器接口地址，这样前台页面就会使用Ajax来向你添加的服务器地址来请求数据。同时你需要按照 [API.md](./API.md) 规范来编写后台API接口，以及按照 [DataBase.md](./DataBase.md) 规范来创建数据库。

> 连接后台后则无需填写 `config.js` 中的 `PAGES_DATA` 和 `SORT_DATA` 数据。

### 3. 编译
确保已安装 `yarn` 以及安装好了项目依赖之后运行：

```
$ yarn build
```

生成的文件将存放在 `/dist` 目录下，Enjoy!

### 4. 自动化部署方案

点击按钮一键部署到 Vercel：

[![](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2FEsunR%2FBlog-Index)

参考文章：[《使用 Vercel 全自动部署个人网站》](https://blog.esunr.xyz/2022/07/0cce6064286a.html)
