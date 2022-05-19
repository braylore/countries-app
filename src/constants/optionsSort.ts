import { SortLabelEnum, SortValueEnum } from './sortEnums';

export const optionsSort = {
  text: 'Sort by',
  elements: [
    {
      label: SortLabelEnum.Area,
      value: SortValueEnum.area
    },
    {
      label: SortLabelEnum.Name,
      value: SortValueEnum.name
    },
    {
      label: SortLabelEnum.Borders,
      value: SortValueEnum.borders
    },
    {
      label: SortLabelEnum.Population,
      value: SortValueEnum.population
    }
  ]
};
