## 2024.3.29

feat:

- 网站分类配置结构支持嵌套写法

旧写法：

```ts
const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "示例分类1" },
  { id: 2, title: "友情链接" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "主标题",
    url: "http://www.your-web-page.com/",
    icon: "",
    color: "#0171CD",
  },
  {
    sortId: 2,
    title: "EsunR Blog",
    description: "EsunR 的博客",
    url: "https://www.esunr.xyz",
    icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
  },
];
```

新写法：

```ts
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "示例分类1",
    sites: [
      {
        title: "主标题",
        url: "http://www.your-web-page.com/",
        icon: "",
        color: "#0171CD",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];
```

## 2023.11.3

feat:

- 将 Vue3 版本的代码作为正式版进行发布；
- 支持使用图片链接替换页面中间的 Logo，并会对其进行预加载；

fix:

- 修复为 Drawer 中的网站配置图标 url 后不显示的问题；
- 修复 Drawer 内 Grid 布局错位的问题；

## 2023.11.1

feat:

- 点击抽屉顶部位于边缘的 Tabs 时，会自动向中间滚动一定的距离；

## 2023.10.29

feat:

- 抽屉的顶部 Tabs 按钮支持左右滑动，现在可以添加更多的分类了；
- 空的分类内容添加了提醒文字；

build:

- 添加 postcss 支持；
