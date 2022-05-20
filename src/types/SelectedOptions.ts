import { FiltersNameEnum, FiltersRegionValueEnum } from '../constants/filtersEnums';
import { SortValueEnum } from '../constants/sortEnums';

type SelectedFiltersRegion = [FiltersNameEnum.region, `${FiltersRegionValueEnum}`];
type SelectedFiltersCarSide = [FiltersNameEnum.carSide, `${'all' | 'Left-side' | 'Right-side'}`];
type SelectedFiltersLandlocked = [FiltersNameEnum.landlocked, `${'all' | 'Non-landlocked' | 'Landlocked'}`];
type SelectedFiltersUnMember = [FiltersNameEnum.unMember, `${'all' | 'UN members' | 'Non-UN members'}`];

export type SelectedFilters =
  | SelectedFiltersRegion
  | SelectedFiltersCarSide
  | SelectedFiltersLandlocked
  | SelectedFiltersUnMember;

export type SelectedSort = `${SortValueEnum} ${'\u25B2' | '\u25BC'}`;
