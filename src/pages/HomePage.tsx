import { ChangeEvent, FC, useRef } from 'react';
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
import { useFoundSortedAndFilteredCountries } from '../hooks/useCountries';
import { useDidMountEffect } from '../hooks/useDidMountEffect';
import SkeletonList from '../components/SkeletonList/SkeletonList';

const HomePage: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { data: countries = [], isLoading, isError } = useGetAllCountriesQuery();
  const dispatch = useAppDispatch();

  const {
    filters: { carSide, landlocked, region, unMember },
    sort,
    searchQuery
  } = useAppSelector((state) => state.optionsReducer);

  const processedСountries = useFoundSortedAndFilteredCountries(
    countries,
    carSide,
    landlocked,
    region,
    unMember,
    sort,
    searchQuery
  );

  const { countriestSelect, currentPage } = useAppSelector((state) => state.paginationReducer);

  useDidMountEffect(() => {
    dispatch(currentPageChanged(1));
  }, [carSide, landlocked, region, unMember, sort, searchQuery, countriestSelect]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(optionsSearchChanged(e.target.value));
  };

  const handlePaginationChange = (e: ChangeEvent<unknown>, page: number) => {
    dispatch(currentPageChanged(page));

    if (currentPage !== page) {
      if (divRef.current !== null) {
        divRef.current.scrollIntoView();
      }
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(countriestSelectChanged(e.target.value as number));
  };

  const totalPages = getNumberOfPage(processedСountries.length, countriestSelect);
  const countriesList = getSlicedCountries(countriestSelect, currentPage, processedСountries);

  return (
    <>
      <OptionsForm isDisabled={isLoading || isError} />
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
            isDisabled={isLoading || isError}
            value={searchQuery}
            handleChange={handleSearchChange}
            label="Search for a country"
            type="search"
          />
        </Grid>
        <Grid item>
          <Select
            isDisabled={isLoading || isError}
            elements={selectOptions.elements}
            label={selectOptions.label}
            handleChange={handleSelectChange}
            numValue={countriestSelect}
          />
        </Grid>
      </Grid>
      {isLoading && <SkeletonList />}
      {isError && (
        <h2 style={{ textAlign: 'center' }}>An error occurred while fetching countries. Please try again later.</h2>
      )}
      {countriesList.length === 0 && !isLoading && !isError && (
        <h2 style={{ textAlign: 'center' }}>No countries found</h2>
      )}
      <div ref={divRef} />
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
