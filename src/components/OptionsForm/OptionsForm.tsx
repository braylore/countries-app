import { MouseEvent } from 'react';
import { Box } from '@mui/material';
import Accordion from '../UI/Accordion/Accordion';
import { optionsSort } from '../../constants/optionsSort';
import OptionsSort from '../OptionsSort/OptionsSort';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { optionsSortChanged } from '../../store/reducers/optionsSlice';
import { SortValueEnum } from '../../constants/sortEnums';

const OptionsForm = () => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.optionsReducer);

  const handleSortChange = (e: MouseEvent<HTMLElement>, value: SortValueEnum) => {
    dispatch(optionsSortChanged(value));
  };

  return (
    <div>
      <Accordion label="Filtration">
        <div></div>
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
