import { ICountry } from '../types/ICountry';

export const fixWrongApiArea = (countries: ICountry[]) => {
  const correctData: ICountry[] = JSON.parse(JSON.stringify(countries));

  if (correctData.length) {
    correctData.forEach((c) => {
      c.area = c.area === -1 ? 61399 : c.area;
    });
  }
  return correctData;
};
