import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ALL_COUNTRIES } from '../constants/urls';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<any, void>({
      query: () => ALL_COUNTRIES
    })
  })
});

export const { useGetAllCountriesQuery } = countriesApi;
