import { FC } from 'react';
import CountriesList from '../components/CountriesList/CountriesList';
import { useGetAllCountriesQuery } from '../api/countriesApi';
import OptionsForm from '../components/OptionsForm/OptionsForm';

const HomePage: FC = () => {
  const { data = [] } = useGetAllCountriesQuery();

  return (
    <>
      <OptionsForm />
      <CountriesList countriesList={data} />
    </>
  );
};

export default HomePage;
