import { ICountry } from '../types/ICountry';

export const getFormattedCountryInfo = (country: ICountry[]) => {
  const { region, landlocked, continents, independent } = country[0];
  const { googleMaps, openStreetMaps } = country[0].maps;
  const flagImg = country[0].flags.svg;
  const altImg = `${country[0].name.common} flag`;
  const countryName = country[0].name.common;
  const officialName = country[0].name.official || '-';
  const capital = country[0].capital || '-';
  const subregion = country[0].subregion || '-';
  const area = country[0].area === -1 ? (61399).toLocaleString() : country[0].area.toLocaleString();
  const traffic = `${country[0].car.side} side`;
  const carSigns = country[0].car?.signs?.join(' ') || '-';
  const population = country[0].population.toLocaleString();
  const startOfWeek = country[0].startOfWeek || '-';
  const tld = country[0].tld || ['-'];
  const borders = country[0].borders || [];

  let currencies: string | string[] = '-';
  if (country[0].currencies) {
    currencies = [
      `${Object.entries(country[0].currencies)[0][0]} : ${Object.entries(country[0].currencies)[0][1].name}` +
        `, symbol: ${Object.entries(country[0].currencies)[0][1].symbol}`
    ];
  }

  let nativeName = '-';
  if (country[0].name.nativeName) {
    nativeName = Object.entries(country[0].name.nativeName)[0][1].common;
  }

  let timezones: string | string[];
  if (country[0].timezones.length > 1) {
    timezones = country[0].timezones;
  } else {
    [timezones] = country[0].timezones;
  }

  let languages: string | string[];
  if (country[0].languages) {
    if (Object.entries(country[0].languages).length > 1) {
      languages = Object.entries(country[0].languages).map((elem) => {
        return elem.join(': ');
      });
    } else {
      languages = Object.entries(country[0].languages)[0].join(' : ');
    }
  } else {
    languages = '-';
  }

  let giniCoefficient: string | string[] = '-';
  if (country[0].gini) {
    giniCoefficient = Object.entries(country[0].gini).map((elem) => elem.join(': '));
  }

  return {
    flagImg,
    altImg,
    area,
    population,
    openStreetMaps,
    googleMaps,
    giniCoefficient,
    languages,
    timezones,
    independent,
    landlocked,
    continents,
    traffic,
    carSigns,
    countryName,
    officialName,
    capital,
    subregion,
    region,
    currencies,
    nativeName,
    startOfWeek,
    tld,
    borders
  };
};
