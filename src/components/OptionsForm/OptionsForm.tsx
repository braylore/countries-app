import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from 'react';
import { Box } from '@mui/material';
import Accordion from '../UI/Accordion/Accordion';
import { optionsSort } from '../../constants/optionsSort';
import OptionsSort from '../OptionsSort/OptionsSort';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { optionsSortChanged, optionsFilterChanged } from '../../store/reducers/optionsSlice';
import { SortValueEnum } from '../../constants/sortEnums';
import Tabs from '../UI/Tabs/Tabs';
import TabPanel from '../UI/Tabs/TabPanel';
import { optionsFilters } from '../../constants/optionsFilters';
import { PayloadOptionsFilters } from '../../types/PayloadOptionsFilters';
import { FiltersNameEnum } from '../../constants/filtersEnums';
import OptionsFilters from '../OptionsFilters/OptionsFilters';

const OptionsForm = () => {
  const dispatch = useAppDispatch();
  const { sort, filters } = useAppSelector((state) => state.optionsReducer);
  const [tabValue, setTabValue] = useState(0);

  const handleSortChange = (e: MouseEvent<HTMLElement>, value: SortValueEnum) => {
    dispatch(optionsSortChanged(value));
  };

  const handleFilterChange = (filtersName: FiltersNameEnum) => (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      optionsFilterChanged({
        [filtersName]: e.target.value
      } as PayloadOptionsFilters)
    );
  };

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Accordion label="Filtration">
        <Tabs
          value={tabValue}
          onTabChange={handleTabChange}
          options={optionsFilters}
        >
          {optionsFilters.map(({ elements, filtersName }, i) => {
            return (
              <TabPanel
                key={filtersName}
                value={tabValue}
                index={i}
              >
                <OptionsFilters
                  filters={filters}
                  filtersName={filtersName}
                  elements={elements}
                  handleChange={handleFilterChange(filtersName)}
                />
              </TabPanel>
            );
          })}
        </Tabs>
      </Accordion>
      <Accordion label="Sorting">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <OptionsSort
            handleClick={handleSortChange}
            activeSort={sort}
            {...optionsSort}
          />
        </Box>
      </Accordion>
    </div>
  );
};

export default OptionsForm;
