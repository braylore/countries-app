import { useMemo } from 'react';
import { ICountry } from '../types/ICountry';
import { FiltersRegionValueEnum, FiltersTrafficValueEnum, FiltersBooleanValueEnum } from '../constants/filtersEnums';
import { OptionsSliceSort } from '../store/reducers/optionsSlice';
import { fixWrongApiArea } from '../utils/fixWrongApiArea';

export const useFilteredCountries = (
  countries: ICountry[],
  carFilter: keyof typeof FiltersTrafficValueEnum,
  landlockedFilter: keyof typeof FiltersBooleanValueEnum,
  regionFilter: keyof typeof FiltersRegionValueEnum,
  unFilter: keyof typeof FiltersBooleanValueEnum
) => {
  const processingCountries = useMemo(() => {
    let countriesArr = fixWrongApiArea(countries);

    if (carFilter !== 'all') {
      countriesArr = countriesArr.filter((country) => country.car.side === carFilter);
    }
    if (landlockedFilter !== 'all') {
      countriesArr = countriesArr.filter((country) => `${country.landlocked}` === landlockedFilter);
    }
    if (regionFilter !== 'all') {
      countriesArr = countriesArr.filter((country) => country.region === regionFilter);
    }
    if (unFilter !== 'all') {
      countriesArr = countriesArr.filter((country) => `${country.unMember}` === unFilter);
    }

    return countriesArr;
  }, [countries, carFilter, landlockedFilter, regionFilter, unFilter]);

  return processingCountries;
};

export const useSortedAndFilteredCountries = (
  countries: ICountry[],
  carFilter: keyof typeof FiltersTrafficValueEnum,
  landlockedFilter: keyof typeof FiltersBooleanValueEnum,
  regionFilter: keyof typeof FiltersRegionValueEnum,
  unFilter: keyof typeof FiltersBooleanValueEnum,
  sortType: OptionsSliceSort
) => {
  const processingCountries = useFilteredCountries(countries, carFilter, landlockedFilter, regionFilter, unFilter);

  const sortedAndFilteredCountries = useMemo(() => {
    switch (sortType) {
      case 'name-up': {
        return [...processingCountries].sort((a, b) => {
          return a.name.common.localeCompare(b.name.common);
        });
      }
      case 'name-down': {
        return [...processingCountries]
          .sort((a, b) => {
            return a.name.common.localeCompare(b.name.common);
          })
          .reverse();
      }
      case 'population-up': {
        return [...processingCountries].sort((a, b) => {
          if (a.population > b.population) {
            return 1;
          }
          if (a.population < b.population) {
            return -1;
          }
          return 0;
        });
      }
      case 'population-down': {
        return [...processingCountries].sort((a, b) => {
          if (a.population > b.population) {
            return -1;
          }
          if (a.population < b.population) {
            return 1;
          }
          return 0;
        });
      }
      case 'area-up': {
        return [...processingCountries].sort((a, b) => {
          if (a.area > b.area) {
            return 1;
          }
          if (a.area < b.area) {
            return -1;
          }
          return 0;
        });
      }
      case 'area-down': {
        return [...processingCountries].sort((a, b) => {
          if (a.area > b.area) {
            return -1;
          }
          if (a.area < b.area) {
            return 1;
          }
          return 0;
        });
      }
      case 'borders-up': {
        return [...processingCountries].sort((a, b) => {
          if (a.borders.length > b.borders.length) {
            return 1;
          }
          if (a.borders.length < b.borders.length) {
            return -1;
          }
          return 0;
        });
      }
      case 'borders-down': {
        return [...processingCountries].sort((a, b) => {
          if (a.borders.length > b.borders.length) {
            return -1;
          }
          if (a.borders.length < b.borders.length) {
            return 1;
          }
          return 0;
        });
      }
      default:
        return [...processingCountries];
    }
  }, [processingCountries, sortType]);

  return sortedAndFilteredCountries;
};

export const useFoundSortedAndFilteredCountries = (
  countries: ICountry[],
  carFilter: keyof typeof FiltersTrafficValueEnum,
  landlockedFilter: keyof typeof FiltersBooleanValueEnum,
  regionFilter: keyof typeof FiltersRegionValueEnum,
  unFilter: keyof typeof FiltersBooleanValueEnum,
  sortType: OptionsSliceSort,
  searchQuery: string
) => {
  const processingCountries = useSortedAndFilteredCountries(
    countries,
    carFilter,
    landlockedFilter,
    regionFilter,
    unFilter,
    sortType
  );

  const foundSortedAndFilteredCountries = useMemo(() => {
    return processingCountries.filter(({ name }) => name.common.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [processingCountries, searchQuery]);

  return foundSortedAndFilteredCountries;
};
