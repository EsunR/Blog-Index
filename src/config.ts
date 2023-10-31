const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "示例分类1" },
  { id: 2, title: "示例分类2" },
  { id: 3, title: "示例分类3" },
  { id: 4, title: "示例分类4" },
  { id: 5, title: "示例分类5" },
  { id: 6, title: "示例分类6" },
  { id: 7, title: "示例分类7" },
  { id: 8, title: "示例分类8" },
  { id: 9, title: "示例分类9" },
  { id: 10, title: "示例分类10" },
  { id: 11, title: "示例分类11" },
  { id: 12, title: "示例分类12" },
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
    sortId: 1,
    title: "主标题",
    description: "网站描述",
    url: "http://www.your-web-page.com/",
    icon: "",
  },
  {
    sortId: 2,
    title: "主标题",
    description: "网站描述",
    url: "http://www.your-web-page.xyz/",
    icon: "",
  },
];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "EsunR-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.esunr.xyz",
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "京ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  TKD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
