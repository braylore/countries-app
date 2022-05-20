import { ChangeEvent, FC } from 'react';
import { Grid, SelectChangeEvent } from '@mui/material';
import CountriesList from '../components/CountriesList/CountriesList';
import { useGetAllCountriesQuery } from '../api/countriesApi';
import OptionsForm from '../components/OptionsForm/OptionsForm';
import Input from '../components/UI/Input/Input';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { optionsSearchChanged } from '../store/reducers/optionsSlice';
import Pagination from '../components/UI/Pagination/Pagination';
import Select from '../components/UI/Select/Select';
import { selectOptions } from '../constants/selectOptions';
import { countriestSelectChanged, currentPageChanged } from '../store/reducers/paginationSlice';
import { getNumberOfPage } from '../utils/getNumberOfPage';
import { getSlicedCountries } from '../utils/getSlicedCountries';

const HomePage: FC = () => {
  const { data: countries = [] } = useGetAllCountriesQuery();
  const dispatch = useAppDispatch();

  const {
    filters: { carSide, landlocked, region, unMember },
    sort,
    searchQuery
  } = useAppSelector((state) => state.optionsReducer);

  const { countriestSelect, currentPage } = useAppSelector((state) => state.paginationReducer);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(optionsSearchChanged(e.target.value));
  };

  const handlePaginationChange = (e: ChangeEvent<unknown>, page: number) => {
    dispatch(currentPageChanged(page));
  };

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(countriestSelectChanged(e.target.value as number));
  };

  const totalPages = getNumberOfPage(countries.length, countriestSelect);
  const countriesList = getSlicedCountries(countriestSelect, currentPage, countries);

  return (
    <>
      <OptionsForm />
      <Grid
        sx={{
          marginTop: 0,
          marginBottom: '15px'
        }}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Input
            value={searchQuery}
            handleChange={handleSearchChange}
            label="Search for a country"
            type="search"
          />
        </Grid>
        <Grid item>
          <Select
            elements={selectOptions.elements}
            label={selectOptions.label}
            handleChange={handleSelectChange}
            numValue={countriestSelect}
          />
        </Grid>
      </Grid>
      <CountriesList countriesList={countriesList} />
      <Pagination
        changePage={handlePaginationChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </>
  );
};

export default HomePage;
