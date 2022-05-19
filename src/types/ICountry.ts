export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  landlocked: boolean;
  borders: string[] | [];
  area: number;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    svg: string;
    png: string;
  };
  startOfWeek: string;
  unMember: boolean;
  independent: boolean;
  gini: {
    [key: string]: number;
  };
  currencies: {
    [key: string]: { name: string; symbol: string };
  };
  tld: string[];
}
