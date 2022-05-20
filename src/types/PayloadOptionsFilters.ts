import {
  FiltersRegionValueEnum,
  FiltersNameEnum,
  FiltersTrafficValueEnum,
  FiltersBooleanValueEnum
} from '../constants/filtersEnums';

type ActionTrafficFilter = {
  [FiltersNameEnum.carSide]: keyof typeof FiltersTrafficValueEnum;
};

type ActionLandlockedFilter = {
  [FiltersNameEnum.landlocked]: keyof typeof FiltersBooleanValueEnum;
};

type ActionRegionFilter = {
  [FiltersNameEnum.region]: keyof typeof FiltersRegionValueEnum;
};

type ActionUnmemberFilter = {
  [FiltersNameEnum.unMember]: keyof typeof FiltersBooleanValueEnum;
};

export type PayloadOptionsFilters =
  | ActionTrafficFilter
  | ActionLandlockedFilter
  | ActionRegionFilter
  | ActionUnmemberFilter;
