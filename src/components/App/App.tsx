import Header from '../Header/Header';
import CountriesList from '../CountriesList/CountriesList';
import { useGetAllCountriesQuery } from '../../api/countriesApi';

const App = () => {
  const { data = [] } = useGetAllCountriesQuery();

  return (
    <>
      <Header />
      <CountriesList countriesList={data} />
    </>
  );
};

export default App;

