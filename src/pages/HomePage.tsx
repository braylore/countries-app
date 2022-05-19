import { FC } from 'react';
import CountriesList from '../components/CountriesList/CountriesList';
import { useGetAllCountriesQuery } from '../api/countriesApi';

const HomePage: FC = () => {
  const { data = [] } = useGetAllCountriesQuery();

  return <CountriesList countriesList={data} />;
};

export default HomePage;
