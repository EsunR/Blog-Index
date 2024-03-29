type WebsiteSort = WebsiteSortOld | WebsiteSortNew;

type WebsiteSortOld = {
  id: number;
  title: string;
};

type WebsiteSortNew = {
  title: string;
  sites?: Omit<WebsiteItem, "sortId">[];
};

interface WebsiteItem {
  sortId: number;
  title: string;
  description?: string;
  url: string;
  icon?: string;
  color?: string;
}
