import { Grid } from '@mui/material';
import { FC } from 'react';
import CountriesListItem from '../CountriesListItem/CountriesListItem';
import { ICountry } from '../../types/ICountry';

interface ICountriesListProps {
  countriesList: ICountry[];
}

const CountriesList: FC<ICountriesListProps> = ({ countriesList }) => {
  return (
    <Grid
      justifyContent="center"
      container
      spacing={4}
      component="ul"
    >
      {countriesList.map(({ name, flags, capital, population, area }) => {
        return (
          <CountriesListItem
            area={area.toLocaleString()}
            population={population.toLocaleString()}
            capital={capital.join(' ')}
            key={name.common}
            name={name.common}
            flag={flags.png}
          />
        );
      })}
    </Grid>
  );
};

export default CountriesList;
