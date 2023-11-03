# 1. 关于

Blog-Index 通用网站导航

[CHANGELOG | 更新日志](./CHANGELOG.md)

![](https://img.shields.io/badge/Base-Vue3-brightgreen.svg)
![](https://img.shields.io/badge/Build-Vite-orange.svg)
![](https://img.shields.io/badge/Installer-Yarn-blue.svg)

![](./demo/show.png)

这是一个基于 Vue 的通用网站导航页面，你可以将其放在个人网站的首页作为您博客的引导页面或者是您其他项目的引导页。使用自适应布局兼容多端显示，方便游客浏览您的个人网站，背景图来自于 Bing 每日图片。

# 2. 使用方法

## 2.1 一键部署

## 2.2 手动部署

### 拉取代码并安装依赖

本地环境要求（可使用 volar 自动切换环境）：

- node >= 18
- yarn 1.22.19

拉取代码并安装依赖：

```sh
git clone https://github.com/EsunR/Blog-Index.git
cd ./Blog-Index
yarn install
```

### 按需修改配置文件

修改 src/config.ts 文件中的内容。

### 打包编译

```sh
yarn build
```

将 dist 目录下的文件部署到服务器即可。

# 3. 未来计划

- [x] 使用 Vite + Vue3 + Typescript 搭建项目
- [x] 优化代码结构，减轻包体积
- [x] 重构已有功能
  - [x] 重构首页组件
  - [x] 重构抽屉组件
- [x] 采用 SSG 构建静态页面
- [ ] 优化配置文件，加入主题相关配置
- [ ] 更好的 seo
- [ ] 自动暗夜模式
- [ ] 加入站点统计
