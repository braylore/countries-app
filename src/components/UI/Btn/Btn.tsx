import { Button } from '@mui/material';
import { FC } from 'react';
import { IoReturnDownBack } from 'react-icons/io5';

interface IBtnProps {
  handleClick: () => void;
  text: string;
}

const Btn: FC<IBtnProps> = ({ handleClick, text }) => {
  return (
    <Button
      sx={{
        textTransform: 'capitalize',
        mt: '25px'
      }}
      disableRipple
      onClick={handleClick}
      variant="contained"
    >
      <IoReturnDownBack
        style={{
          fontSize: '24px',
          marginRight: '5px'
        }}
      />
      {text}
    </Button>
  );
};

export default Btn;
