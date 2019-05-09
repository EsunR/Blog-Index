## 1. 获取分类
url: /getSort GET

返回：
```js
{
  code: 1,
  data: [
    {sortId: 1, title: "Paly Ground"},
    {sortId: 2, title: "My Info"}
  ]
}
```

## 2. 获取页面
url: /getPages GET

发送：
```
/getPages?sortId=1
```

返回：
```js
{
  code: 1,
  data: [
    {pageId: 1, sortId: 1, title: "个人博客", subTitle: "这是我的个人博客页面", url: "http://www.esunr.xyz/", cover: ""},
    {pageId: 2, sortId: 1, title: "个人博客", subTitle: "这是我的个人博客页面", url: "http://www.esunr.xyz/", cover: ""}
  ]
}
```
