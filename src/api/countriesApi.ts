import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ALL_COUNTRIES, getCountryByName, getCountryByCode } from '../constants/urls';
import { ICountry } from '../types/ICountry';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<ICountry[], void>({
      query: () => ALL_COUNTRIES
    }),
    getCountryByName: builder.query<ICountry[], string>({
      query: (name) => getCountryByName(name)
    }),
    getCountryByCode: builder.query<ICountry[], string>({
      query: (codes) => getCountryByCode(codes)
    })
  })
});

export const { useGetAllCountriesQuery, useGetCountryByNameQuery, useGetCountryByCodeQuery } = countriesApi;
