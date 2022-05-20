import { RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import Radio from '../UI/Radio/Radio';
import { FiltersNameEnum } from '../../constants/filtersEnums';
import { IOptionsSliceFilters } from '../../store/reducers/optionsSlice';
import { OptionsFiltersElements } from '../../types/OptionsFilters';

interface IOptionsFiltersProps {
  elements: OptionsFiltersElements;
  filtersName: FiltersNameEnum;
  filters: IOptionsSliceFilters;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const OptionsFilters: FC<IOptionsFiltersProps> = ({ elements, filtersName, handleChange, filters }) => {
  return (
    <FormControl>
      <RadioGroup
        value={filters[filtersName]}
        onChange={handleChange}
        row
      >
        {elements.map(({ value, label }) => (
          <FormControlLabel
            key={label}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default OptionsFilters;
