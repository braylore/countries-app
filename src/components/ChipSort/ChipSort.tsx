import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { optionsSortChangedByChip } from '../../store/reducers/optionsSlice';
import { getFormattedSort } from '../../utils/getFormattedSort';
import { SelectedSort } from '../../types/SelectedOptions';

interface IChipsSortProps {
  selectedSortEntity: SelectedSort;
}

const ChipsSort: FC<IChipsSortProps> = ({ selectedSortEntity }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(optionsSortChangedByChip('none'));
  };

  const handleClick = (sort: SelectedSort, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(optionsSortChangedByChip(getFormattedSort(sort)));
  };

  return (
    <Stack
      direction="row"
      sx={{
        ml: '5px'
      }}
    >
      <Chip
        sx={{
          fontSize: '14px',
          textTransform: 'capitalize'
        }}
        variant="filled"
        label={selectedSortEntity}
        onDelete={handleDelete}
        onClick={(e) => handleClick(selectedSortEntity, e)}
      />
    </Stack>
  );
};

export default ChipsSort;
