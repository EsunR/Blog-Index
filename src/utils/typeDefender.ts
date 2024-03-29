export function isWebsiteSortsOld(
  websiteSorts: WebsiteSort[],
  websiteItems: WebsiteItem[]
): websiteSorts is WebsiteSortOld[] {
  // 如果 websiteSorts 的每一项都有 id 并且没有 sites 字段
  const isWebsiteSortOld = websiteSorts.every(
    (sort) =>
      (sort as WebsiteSortOld).id !== undefined &&
      !(sort as WebsiteSortNew).sites
  );
  // 且 websiteItems 的每一项都有 sortId
  const hasWebsiteItems =
    websiteItems instanceof Array &&
    websiteItems.length > 0 &&
    websiteItems.every((item) => item.sortId !== undefined);
  // 则认为是旧版
  return isWebsiteSortOld && hasWebsiteItems;
}
