import { RadioProps, Radio } from '@mui/material';
import { styled } from '@mui/system';

const CustomizedRadio = styled('span')(({ theme }) => ({
  borderRadius: '40%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'light'
      ? 'inset 0 0 0 1px rgba(16,22,26,.6), inset 0 -1px 0 rgba(16,22,26,1.1)'
      : '0px 0px 3px 0px rgb(165 165 165)',
  backgroundColor: '#e6dfd7',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '1px auto #3c3d3d99',
    outlineOffset: '2px'
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'light' ? '#ccbeae' : '#a6bdd0'
  }
}));

const CustomizedRadioChecked = styled(CustomizedRadio)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#7c6f5c' : '#6f9ed4',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#e7ddcf,#fff 25%,transparent 35%)',
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'light' ? '#695d4c' : '#5483b9'
  }
}));

const CustomRadio = (props: RadioProps) => {
  return (
    <Radio
      sx={{
        '&:hover': {
          bgcolor: 'transparent'
        }
      }}
      disableRipple
      color="default"
      checkedIcon={<CustomizedRadioChecked />}
      icon={<CustomizedRadio />}
      {...props}
    />
  );
};

export default CustomRadio;
