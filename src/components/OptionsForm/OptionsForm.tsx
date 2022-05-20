import { MouseEvent, SyntheticEvent, useState } from 'react';
import { Box } from '@mui/material';
import Accordion from '../UI/Accordion/Accordion';
import { optionsSort } from '../../constants/optionsSort';
import OptionsSort from '../OptionsSort/OptionsSort';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { optionsSortChanged } from '../../store/reducers/optionsSlice';
import { SortValueEnum } from '../../constants/sortEnums';
import Tabs from '../UI/Tabs/Tabs';
import TabPanel from '../UI/Tabs/TabPanel';
import { optionsFilters } from '../../constants/optionsFilters';

const OptionsForm = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.optionsReducer);
  const [tabValue, setTabValue] = useState(0);

  const handleSortChange = (e: MouseEvent<HTMLElement>, value: SortValueEnum) => {
    dispatch(optionsSortChanged(value));
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
          {optionsFilters.map(({ filtersName }, i) => {
            return (
              <TabPanel
                key={filtersName}
                value={tabValue}
                index={i}
              >
                <div>{filtersName}</div>
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
