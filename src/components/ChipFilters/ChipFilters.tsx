import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { optionsFilterChanged } from '../../store/reducers/optionsSlice';
import { FiltersNameEnum } from '../../constants/filtersEnums';
import { getFormattedFilter } from '../../utils/getFormattedFilter';
import { SelectedFilters } from '../../types/SelectedOptions';

interface IChipsFiltersProps {
  selectedFiltersEntity: SelectedFilters[];
}

const ChipsFilters: FC<IChipsFiltersProps> = ({ selectedFiltersEntity }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (filter: FiltersNameEnum) => {
    dispatch(
      optionsFilterChanged({
        [filter]: 'all'
      } as { [key in FiltersNameEnum]: 'all' })
    );
  };

  const handleClick = (filter: SelectedFilters, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(optionsFilterChanged(getFormattedFilter(filter)));
  };

  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      {selectedFiltersEntity &&
        selectedFiltersEntity.map((item) => {
          return (
            <Chip
              key={item[0]}
              sx={{
                ml: '5px',
                mb: '3px',
                mt: '3px',
                fontSize: '14px',
                display: item[1] === 'all' ? 'none' : '',
                minWidth: '159px',
                justifyContent: 'space-between'
              }}
              label={item[1]}
              variant="filled"
              onDelete={() => handleDelete(item[0])}
              onClick={(e) => handleClick(item, e)}
            />
          );
        })}
    </Stack>
  );
};

export default ChipsFilters;
