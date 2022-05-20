import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortValueEnum } from '../../constants/sortEnums';
import {
  FiltersTrafficValueEnum,
  FiltersBooleanValueEnum,
  FiltersRegionValueEnum,
  FiltersNameEnum
} from '../../constants/filtersEnums';
import { PayloadOptionsFilters } from '../../types/PayloadOptionsFilters';

export type OptionsSliceSort = `${SortValueEnum}-${'up' | 'down'}` | 'none';

export interface IOptionsSliceFilters {
  [FiltersNameEnum.carSide]: keyof typeof FiltersTrafficValueEnum;
  [FiltersNameEnum.landlocked]: keyof typeof FiltersBooleanValueEnum;
  [FiltersNameEnum.region]: keyof typeof FiltersRegionValueEnum;
  [FiltersNameEnum.unMember]: keyof typeof FiltersBooleanValueEnum;
}

interface IOptionsState {
  filters: IOptionsSliceFilters;
  sort: OptionsSliceSort;
  searchQuery: string;
}

const initialState: IOptionsState = {
  filters: {
    region: 'all',
    carSide: 'all',
    landlocked: 'all',
    unMember: 'all'
  },
  sort: 'none',
  searchQuery: ''
};

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    optionsSortChanged: (state, action: PayloadAction<SortValueEnum>) => {
      if (state.sort.includes(action.payload)) {
        if (state.sort.slice(-2) === 'up') {
          state.sort = `${action.payload}-down`;
        } else {
          state.sort = 'none';
        }
      } else {
        state.sort = `${action.payload}-up`;
      }
    },
    optionsFilterChanged: (state, action: PayloadAction<PayloadOptionsFilters>) => {
      state.filters = {
        ...state.filters,
        ...action.payload
      };
    }
  }
});

export const { optionsSortChanged, optionsFilterChanged } = optionsSlice.actions;
export default optionsSlice.reducer;
