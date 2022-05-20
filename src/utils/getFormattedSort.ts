import { IPayloadOptionsSort } from '../types/IPayloadOptionsSort';
import { SelectedSort } from '../types/SelectedOptions';

export const getFormattedSort = (sort: SelectedSort): IPayloadOptionsSort => {
  const sortType = sort.split(' ')[0];
  let direction = '';

  if (sort.split(' ')[1] === '\u25B2') {
    direction += '-up';
  } else {
    direction += '-down';
  }
  return { sortType, direction } as IPayloadOptionsSort;
};
