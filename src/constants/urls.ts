export const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = 'all?fields=name,capital,car,landlocked,flags,region,population,area,unMember,borders';

export const getCountryByName = (name: string) => `name/${name}?fullText=true`;

export const getCountryByCode = (codes: string) => `alpha?codes=${codes}`;
