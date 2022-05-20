export const isSelectedBtn = (sortType: string, activeSortType: string): boolean => {
  return activeSortType.includes(sortType);
};
