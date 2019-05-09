# EsunR-Blog 通用网站导航

## About | 关于

![](https://img.shields.io/badge/Base-Vue2.2-brightgreen.svg)
![](https://img.shields.io/badge/Build-Vue--Cli3-orange.svg)
![](https://img.shields.io/badge/Installer-Npm/Yarn-red.svg)

这是一个基于 Vue 的通用网站导航页面，你可以将其放在个人网站的首页作为您博客的引导页面或者是您其他项目的引导页。兼容了多平台的显示效果（基于Flex布局），方便游客浏览您的个人网站。

页面分为两部分，一个是全屏的展示页，一个是导航抽屉页，阅读下面的“使用方法”来为您的网站配置基本信息与导航信息，[点击查看网站示例。](https://www.esunr.xyz)


![](http://markdown.img.esunr.xyz/show.png)

编译后文件大小：

| File                                |    Size    |   Gzipped |
| :---------------------------------- | :--------: | --------: |
| dist\js\chunk-vendors.f05012da.js   | 132.81 KiB | 45.92 KiB |
| dist\js\app.bca32cd8.js             | 10.11 KiB  |  4.00 KiB |
| dist\css\chunk-vendors.788b09de.css | 154.83 KiB | 27.29 KiB |
| dist\css\app.f7274e1c.css           |  6.21 KiB  |  1.40 KiB |

## How to use | 使用方法

在本项目中，你只需要将网站的相关信息按要求填入配置文件，之后再编译整个项目就可以生成一个适用于你的网站的导航页面。

如果你想通过更高级的形式，参阅 `API.md` 和 `DataBase.md` 来为项目添加一个后台服务器，可以更方便管理数据。

### 1. 配置信息

在 `/src/common.vue` 存放了项目的基本配置信息，配置示例如下：

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
```

另外在编译前，你需要将 `/src/assets/logo.svg` 替换为你的网站LOGO，注意格式必须为 `svg` 文件，同时将 `/oublic/favicon.ico` 替换为你网站的 favicon。

如果想要使用线上服务器来加载数据，请将 `SERVE` 设置为 `true` 并将 `HOST` 填写你的服务器接口地址，同时需要按照 [API.md](./API.md) 规范来编写后台API接口，以及 [DataBase.md](./DataBase.md) 来创建数据库。

### 2. 编译
确保已安装 `npm` 以及 `vue-cli` 等工具，运行：

```
$ npm run build

// 或者

$ yarn build
```

生成的文件将存放在 `/dist` 目录下，Enjoy!





