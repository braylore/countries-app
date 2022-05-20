import { ICountry } from '../types/ICountry';

export const getSlicedCountries = (range: number, currentPage: number, countries: ICountry[]): ICountry[] => {
  return countries.slice(range * currentPage - range, range * currentPage);
};
