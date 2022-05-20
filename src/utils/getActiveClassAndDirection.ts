export const getActiveClassAndDirection = (activeSort: string) => {
  const activeClass = activeSort.split('-')[0];
  let activeDirection = activeSort.split('-')[1];

  if (!activeDirection) {
    activeDirection = '';
  }

  return { activeClass, activeDirection };
};
