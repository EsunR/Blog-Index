interface ISortDataItem {
  sortId: number;
  title: string;
}

interface IPageDataItem {
  pageId: number;
  sortId: number;
  title: string;
  subtitle: string;
  url: string;
  icon: string;
}

const SORT_DATA: ISortDataItem[] = [
  { sortId: 1, title: "示例分类1" },
  { sortId: 2, title: "示例分类2" },
];

const PAGES_DATA: IPageDataItem[] = [
  {
    pageId: 1,
    sortId: 1,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.com/",
    icon: "",
  },
  {
    pageId: 2,
    sortId: 2,
    title: "主标题",
    subtitle: "副标题",
    url: "http://www.YourWebPage.xyz/",
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
  ICP_CODE: "",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGAN: [
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
  SORT_DATA,
  /**
   * 网站分类列表
   */
  PAGES_DATA,
  HTML_HEAD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
