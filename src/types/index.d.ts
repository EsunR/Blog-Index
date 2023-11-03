interface WebsiteSort {
  id: number;
  title: string;
}

interface WebsiteItem {
  sortId: number;
  title: string;
  description?: string;
  url: string;
  icon?: string;
  color?: string;
}
