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

// 网站分类列表
const SORT_DATA: ISortDataItem[] = [
  { sortId: 1, title: "示例分类1" },
  { sortId: 2, title: "示例分类2" },
];

// 网站分类列表
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
  BLOG_NAME: import.meta.env.VITE_BLOG_NAME,
  BLOG_URL: import.meta.env.VITE_BLOG_URL,
  GITHUB_URL: import.meta.env.VITE_GITHUB_URL,
  BACKGROUND_IMG_URL: import.meta.env.VITE_BACKGROUND_IMG_URL,
  ICP_CODE: import.meta.env.VITE_ICP_CODE,
  FOOTER_INFO: import.meta.env.VITE_FOOTER_INFO,
  SLOGAN: import.meta.env.VITE_SLOGAN,
  SORT_DATA,
  PAGES_DATA,
};

export default GLOBAL_CONFIG;
