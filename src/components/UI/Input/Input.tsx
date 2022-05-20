import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';

const CustomizedInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-input': {
    WebkitBoxShadow: theme.palette.mode === 'light' ? 'inset 0 0 0 50px #f1ede8' : 'inset 0 0 0 50px #15223c'
  },
  '& label.Mui-focused': {
    color: theme.palette.mode === 'light' ? '#000' : '#fff'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '5px',
      borderColor: theme.palette.mode === 'light' ? '#000' : '#fff'
    },
    '&:hover fieldset': {
      boxShadow: theme.palette.mode === 'light' ? '7px 5px 9px -8px rgb(0 0 0)' : '7px 5px 7px -8px rgb(145 145 145)'
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.mode === 'light' ? '#000' : '#fff',
      boxShadow: theme.palette.mode === 'light' ? '7px 5px 9px -8px rgb(0 0 0)' : '7px 5px 7px -8px rgb(145 145 145)'
    }
  }
}));

interface ICustomInputProps {
  type: string;
  label: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
}

const CustomInput: FC<ICustomInputProps> = ({ type, label, value, handleChange, isDisabled }) => {
  return (
    <CustomizedInput
      disabled={isDisabled}
      value={value}
      onChange={handleChange}
      type={type}
      label={label}
    />
  );
};

export default CustomInput;
