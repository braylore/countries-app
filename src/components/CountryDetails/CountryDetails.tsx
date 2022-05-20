import { FC } from 'react';
import { CountryInfo } from '../../types/CountryInfo';

interface ICountryDetailsProps {
  countryInfo: CountryInfo;
}

const CountryDetails: FC<ICountryDetailsProps> = ({ countryInfo }) => {
  console.log(countryInfo);
  return <div>Country Details</div>;
};

export default CountryDetails;
