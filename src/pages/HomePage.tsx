import { ChangeEvent, FC } from 'react';
import { SelectChangeEvent } from '@mui/material';
import CountriesList from '../components/CountriesList/CountriesList';
import { useGetAllCountriesQuery } from '../api/countriesApi';
import OptionsForm from '../components/OptionsForm/OptionsForm';
import Input from '../components/UI/Input/Input';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { optionsSearchChanged } from '../store/reducers/optionsSlice';
import Pagination from '../components/UI/Pagination/Pagination';
import Select from '../components/UI/Select/Select';
import { selectOptions } from '../constants/selectOptions';

const HomePage: FC = () => {
  const { data = [] } = useGetAllCountriesQuery();
  const dispatch = useAppDispatch();

  const {
    filters: { carSide, landlocked, region, unMember },
    sort,
    searchQuery
  } = useAppSelector((state) => state.optionsReducer);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(optionsSearchChanged(e.target.value));
  };

  const changePage = (e: ChangeEvent<unknown>, page: number) => {
    console.log(page);
  };

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Select
        elements={selectOptions.elements}
        label={selectOptions.label}
        handleChange={handleSelectChange}
        numValue={10}
      />
      <Input
        value={searchQuery}
        handleChange={handleSearchChange}
        label="Search for a country"
        type="search"
      />
      <OptionsForm />
      <CountriesList countriesList={data} />
      <Pagination
        changePage={changePage}
        totalPages={10}
        currentPage={1}
      />
    </>
  );
};

export default HomePage;
