import { useMemo } from 'react';
import { IOptionsSliceFilters, OptionsSliceSort } from '../store/reducers/optionsSlice';
import { SelectedFilters, SelectedSort } from '../types/SelectedOptions';

export const useSelectedOptions = (filters: IOptionsSliceFilters, sortType: OptionsSliceSort) => {
  const selectedFilters = useMemo(() => {
    const formattedFilters = Object.entries(filters).map((filter) => {
      let foramttedFilterType = 'all';

      if (filter[1] !== 'all') {
        if (filter[0] === 'region') {
          // eslint-disable-next-line prefer-destructuring
          foramttedFilterType = filter[1];
        } else if (filter[0] === 'carSide') {
          if (filter[1] === 'left') {
            foramttedFilterType = 'Left-side';
          } else {
            foramttedFilterType = 'Right-side';
          }
        } else if (filter[0] === 'landlocked') {
          if (filter[1] === 'true') {
            foramttedFilterType = 'Landlocked';
          } else {
            foramttedFilterType = 'Non-landlocked';
          }
        } else if (filter[0] === 'unMember') {
          if (filter[1] === 'true') {
            foramttedFilterType = 'UN members';
          } else {
            foramttedFilterType = 'Non-UN members';
          }
        }
      }
      return [filter[0], foramttedFilterType] as SelectedFilters;
    });

    return formattedFilters;
  }, [filters]);

  const selectedSort = useMemo(() => {
    let formattedSort = 'none';

    if (sortType !== 'none') {
      if (sortType.slice(-2) === 'up') {
        formattedSort = `${sortType.split('-')[0]} \u25B2`;
      } else {
        formattedSort = `${sortType.split('-')[0]} \u25BC`;
      }
    }

    return formattedSort as SelectedSort | 'none';
  }, [sortType]);

  return { selectedSort, selectedFilters };
};
