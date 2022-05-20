import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import LoaderRound from '../Loaders/LoaderRound';

interface IBackdropProps {
  isOpen: boolean;
}

const CustomBackrop: FC<IBackdropProps> = ({ isOpen }) => {
  return (
    <Backdrop
      sx={{
        color: '#000000',
        zIndex: 9000,
        backgroundColor: '#00000032'
      }}
      open={isOpen}
    >
      <LoaderRound />
    </Backdrop>
  );
};

export default CustomBackrop;
