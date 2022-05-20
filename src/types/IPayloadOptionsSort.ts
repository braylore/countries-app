import { SortValueEnum } from '../constants/sortEnums';

export interface IPayloadOptionsSort {
  sortType: `${SortValueEnum}`;
  direction: '-up' | '-down';
}
