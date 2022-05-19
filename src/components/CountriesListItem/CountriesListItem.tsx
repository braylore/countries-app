import { Grid, Typography, Paper, Box } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ICountriesListItemProps {
  name: string;
  flag: string;
  capital: string;
  population: string;
  area: string;
}

const CountriesListItem: FC<ICountriesListItemProps> = ({ name, flag, capital, population, area }) => {
  return (
    <Grid
      component="li"
      item
      xl={4}
    >
      <Link to={`/${name}`}>
        <Paper>
          <img
            loading="lazy"
            src={flag}
            alt={`${name} flag`}
          />
          <Box
            sx={{
              p: 2
            }}
          >
            <Typography
              component="h3"
              sx={{
                textAlign: 'center',
                fontSize: '22px',
                marginBottom: '40px',
                height: '35px'
              }}
            >
              <b>{name}</b>
            </Typography>
            <Typography>
              <b> Population: </b>
              {population}
            </Typography>
            <Typography>
              <b>Area: </b>
              {area}
              km
              <sup>2</sup>
            </Typography>
            <Typography>
              <b>Capital: </b>
              {capital || '-'}
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default CountriesListItem;
