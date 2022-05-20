import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import { FC } from 'react';
import { styled } from '@mui/system';
import { SelectOptions } from '../../../types/SelectOptions';

const CustomizedInputLabel = styled(InputLabel)(({ theme }) => ({
  fonstSize: '18px',
  '&.Mui-focused': {
    color: theme.palette.mode === 'dark' ? '#fff' : '#000'
  }
}));

const CustomizedSelect = styled((props: SelectProps) => <Select {...props} />)(({ theme }) => ({
  borderRadius: '5px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.mode === 'light' ? '#000' : '#fff'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.mode === 'light' ? '#000' : '#fff'
  },
  '&:hover fieldset': {
    boxShadow: theme.palette.mode === 'light' ? '7px 5px 9px -8px rgb(0 0 0)' : '7px 5px 7px -8px rgb(145 145 145)'
  },
  '&.MuiInputBase-root.Mui-focused': {
    boxShadow: theme.palette.mode === 'light' ? '7px 5px 9px -8px rgb(0 0 0)' : '7px 5px 7px -8px rgb(145 145 145)'
  }
}));

interface ISelectCountriesProps {
  elements: SelectOptions;
  label: string;
  numValue: number;
  handleChange: (e: SelectChangeEvent<unknown>) => void;
  isDisabled: boolean;
}

const CustomSelect: FC<ISelectCountriesProps> = ({ label, elements, numValue, handleChange, isDisabled }) => {
  return (
    <FormControl
      disabled={isDisabled}
      sx={{ minWidth: '207px' }}
      size="small"
    >
      <CustomizedInputLabel>{label}</CustomizedInputLabel>
      <CustomizedSelect
        sx={{ height: '56px' }}
        value={`${numValue}`}
        label={label}
        onChange={handleChange}
      >
        {elements.map(({ text, value }) => {
          return (
            <MenuItem
              key={text}
              value={value}
            >
              {text}
            </MenuItem>
          );
        })}
      </CustomizedSelect>
    </FormControl>
  );
};

export default CustomSelect;
