import { ToggleButton } from '@mui/material';
import { styled } from '@mui/system';

const CustomToggleBtn = styled(ToggleButton)(({ theme }) => ({
  justifyContent: 'space-between',
  minWidth: '135px',
  minHeight: '73px',
  fontSize: '16px',
  textTransform: 'unset',
  borderRadius: '20px',
  backgroundColor: 'transparent',
  boxShadow: theme.palette.mode === 'light' ? '0px 0px 6px -3px rgb(35 40 35)' : '0px 0px 3px 0px rgb(235 235 235)',
  '&:focus': {
    outline: theme.palette.mode === 'light' ? '1px solid dark' : '1px solid white'
  },
  '&.MuiToggleButton-root': {
    '&.Mui-selected': {
      backgroundColor: theme.palette.mode === 'light' ? '#d1c0a9' : '#234a78',
      '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? '#beaf92' : '#255185'
      }
    },
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? '#e0d7ca' : '#3c72af',
      boxShadow: theme.palette.mode === 'light' ? '0px 0px 6px -2px rgb(35 40 35)' : '0px 0px 6px 0px rgb(235 235 235)'
    }
  }
}));

export default CustomToggleBtn;
