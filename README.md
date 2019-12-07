# EsunR-Blog 通用网站导航

## About | 关于

![](https://img.shields.io/badge/Base-Vue2.2-brightgreen.svg)
![](https://img.shields.io/badge/Build-Vue--Cli3-orange.svg)
![](https://img.shields.io/badge/Installer-Npm/Yarn-red.svg)

这是一个基于 Vue 的通用网站导航页面，你可以将其放在个人网站的首页作为您博客的引导页面或者是您其他项目的引导页。兼容了多平台的显示效果（基于Flex布局），方便游客浏览您的个人网站，背景图来自于Bing每日图片。

页面分为两部分，一个是全屏的展示页，一个是导航抽屉页，阅读下面的“使用方法”来为您的网站配置基本信息与导航信息，[点击查看网站示例](https://www.esunr.xyz)。

![](http://markdown.img.esunr.xyz/show.png)

编译后文件大小：

| File                                |    Size    |   Gzipped |
| :---------------------------------- | :--------: | --------: |
| dist\js\chunk-vendors.f05012da.js   | 132.81 KiB | 45.92 KiB |
| dist\js\app.bca32cd8.js             | 10.11 KiB  |  4.00 KiB |
| dist\css\chunk-vendors.788b09de.css | 154.83 KiB | 27.29 KiB |
| dist\css\app.f7274e1c.css           |  6.21 KiB  |  1.40 KiB |

## How to use | 使用方法

本项目中，提供了两种使用方法：

一种是只需要将网站的相关信息按要求填入配置文件，之后再编译整个项目就可以生成一个适用于你的网站的静态导航页面；

另一种则是为页面添加后台数据支持，详情请参阅下文的第2步。

### 1. 配置信息

在 `/src/config.js` 存放了项目的基本配置信息，配置示例如下：

```js
const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "EsunR-Blog"; // 个人网站名字

const BLOG_URL = "https://www.esunr.xyz/blog/"; // 个人网站链接（请填写完整链接）

const SORT_DATA = [
  { sortId: 1, title: "示例分类1" },
  { sortId: 2, title: "示例分类2" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.com/",
    icon: ""
  },
  {
    pageId: 2,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
    icon: ""
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方随机显示的标题

const GITHUB = "https://github.com/EsunR"; // 右上角 Github 徽章的跳转地址，配置留空不显示

const FOOTER_INFO = true; // 是否显抽屉右下角的 "Designed By EsunR"
```

另外在编译前，你需要将 `/src/assets/logo.svg` 替换为你的网站LOGO，注意格式必须为 `svg` 文件，同时将 `/oublic/favicon.ico` 替换为你网站的 favicon。

### 2. 添加服务器支持（可选）
如果想要使用后台服务器来加加载和管理数据，请将 `SERVE` 设置为 `true` 并将 `HOST` 填写为你的服务器接口地址，这样前台页面就会使用Ajax来向你添加的服务器地址来请求数据。同时你需要按照 [API.md](./API.md) 规范来编写后台API接口，以及按照 [DataBase.md](./DataBase.md) 规范来创建数据库。

> 连接后台后则无需填写 `config.js` 中的 `PAGES_DATA` 和 `SORT_DATA` 数据。

### 3. 编译
确保已安装 `npm` 以及 `vue-cli` 等工具，运行：

```
$ npm run build

// 或者

$ yarn build
```

生成的文件将存放在 `/dist` 目录下，Enjoy!





