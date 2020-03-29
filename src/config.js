const SERVE = true; // 是否使用线上服务器

const HOST = "https://esunr.xyz:8080/api/esunrIndex"; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "EsunR-Blog"; // 个人网站名字

const BLOG_URL = "https://blog.esunr.xyz"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/EsunR"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://www.esunr.xyz:8080/api/utils/bingPic"; // 背景图片url，留空默认为必应每日图片

const SORT_DATA = [
  { sortId: 1, title: "示例分类1" },
  { sortId: 2, title: "示例分类2" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = "豫ICP备18045315号"; // 网站备案号，留空不显示

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
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
