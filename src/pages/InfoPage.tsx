import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetCountryByNameQuery } from '../api/countriesApi';
import LoaderRound from '../components/UI/Loaders/LoaderRound/LoaderRound';
import Btn from '../components/UI/Btn/Btn';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import { getFormattedCountryInfo } from '../utils/getFormattedCountryInfo';
import CountryDetails from '../components/CountryDetails/CountryDetails';

const InfoPage: FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  const { data: country = [], isLoading, isError, isFetching } = useGetCountryByNameQuery(name || '');

  if (isLoading) {
    return <LoaderRound />;
  }

  if (isError) {
    return (
      <>
        <Btn
          text="Back"
          handleClick={handleClick}
        />
        <h2 style={{ textAlign: 'center' }}>Сountry not found</h2>
      </>
    );
  }

  const countryInfo = getFormattedCountryInfo(country);

  return (
    <>
      <Backdrop isOpen={isFetching} />
      <Btn
        handleClick={handleClick}
        text="Back"
      />
      <CountryDetails countryInfo={countryInfo} />
    </>
  );
};

export default InfoPage;
