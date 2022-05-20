import { Grid, Typography } from '@mui/material';
import { IoCheckmark, IoClose } from 'react-icons/io5';
import ReactTooltip from 'react-tooltip';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetCountryByCodeQuery } from '../../api/countriesApi';
import Tooltip from '../UI/Tooltip/Tooltip';
import { CountryInfo } from '../../types/CountryInfo';
import { useColorMode } from '../../hooks/useColorMode';
import styles from './countryDetails.module.scss';

interface ICountryDetailsProps {
  countryInfo: CountryInfo;
}

const CountryDetails: FC<ICountryDetailsProps> = ({ countryInfo }) => {
  const { mode } = useColorMode();

  const {
    altImg,
    area,
    capital,
    carSigns,
    continents,
    currencies,
    giniCoefficient,
    googleMaps,
    flagImg,
    independent,
    landlocked,
    languages,
    countryName,
    nativeName,
    officialName,
    openStreetMaps,
    population,
    region,
    subregion,
    timezones,
    traffic,
    startOfWeek,
    tld,
    borders
  } = countryInfo;

  const { data: borderCountries = [] } = useGetCountryByCodeQuery(borders.join(','), {
    skip: borders.length === 0
  });

  return (
    <>
      <Typography
        textAlign="center"
        variant="h4"
        component="h2"
        fontWeight={500}
      >
        {countryName}
      </Typography>
      <Grid
        className={styles.grid}
        container
        spacing={3}
      >
        <Grid
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className={styles.img}
          alt={altImg}
          src={flagImg}
          component="img"
          item
        />
        <Grid
          sm={6}
          md={4}
          component="ul"
          item
        >
          <li>
            <b>Official Name: </b>
            {officialName}
          </li>
          <li>
            <b>Capital: </b>
            {capital}
          </li>
          <li>
            <b>Region: </b>
            {region}
          </li>
          <li>
            <b>Subregion: </b>
            {subregion}
          </li>
          <li>
            <b>Native Name: </b>
            {nativeName}
          </li>
          <li>
            <b>Continents: </b>
            {continents}
          </li>
          <li>
            <b>Population: </b>
            {population}
          </li>
          <li>
            <b>Area: </b>
            {area}
            &nbsp; km
            <sup>2</sup>
          </li>
          <li>
            <b>Languages: </b>
            {Array.isArray(languages) ? (
              <Tooltip
                label="show languages"
                textArr={languages}
              />
            ) : (
              languages
            )}
          </li>
          <li>
            <b>Traffic: </b>
            {traffic}
          </li>
          <li>
            <b>Car Signs: </b>
            {carSigns}
          </li>
          <li className={styles.iconWrapper}>
            <b>Landlocked: </b>
            {landlocked ? <IoCheckmark /> : <IoClose />}
          </li>
          <li className={styles.iconWrapper}>
            <b>Independent: </b>
            {independent ? <IoCheckmark /> : <IoClose />}
          </li>
          <li>
            <b>Timezones: </b>
            {Array.isArray(timezones) ? (
              <Tooltip
                label="show timezones"
                textArr={timezones}
              />
            ) : (
              timezones
            )}
          </li>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={8}
          lg={8}
          xl={8}
          component="div"
          item
        >
          <div className={styles.wrapper}>
            <b>Border Countries:</b>
            {borders.length ? (
              <div className={styles.bordersWrapper}>
                {borderCountries.map((country) => {
                  return (
                    <div key={country.name.common}>
                      <Link to={`/${country.name.official}`}>
                        <img
                          data-tip={country.name.common}
                          className={styles.borderFlag}
                          src={country.flags.png}
                          alt={`${country.name.common} flag`}
                        />
                        <ReactTooltip
                          className={`${styles.tooltip} 
                            ${styles[mode]} 
                            ${styles['place-top']}`}
                          place="top"
                          type="dark"
                          effect="solid"
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>There is no border countries</div>
            )}
          </div>
        </Grid>
        <Grid
          sm={6}
          md={4}
          lg={4}
          xl={4}
          component="ul"
          item
        >
          <li>
            <b>Start Of Week: </b>
            {startOfWeek}
          </li>
          <li>
            <b>Currencies: </b>
            {Array.isArray(currencies) ? (
              <Tooltip
                label="show currencies"
                textArr={currencies}
              />
            ) : (
              currencies
            )}
          </li>
          <li>
            <b>Top-Level Domain: </b>
            {tld.length ? tld.join(' ') : '-'}
          </li>
          <li>
            <b>Gini Coefficient: </b>
            {giniCoefficient}
          </li>
          <li>
            <a
              className={styles.link}
              href={googleMaps}
            >
              GoogleMaps
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href={openStreetMaps}
            >
              OpenStreetMaps
            </a>
          </li>
        </Grid>
      </Grid>
    </>
  );
};

export default CountryDetails;
