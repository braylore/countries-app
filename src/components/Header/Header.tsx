import { IoEarth } from 'react-icons/io5';
import { FC, KeyboardEvent } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useColorMode } from '../../hooks/useColorMode';
import styles from './header.module.scss';

const Header: FC = () => {
  const navigate = useNavigate();
  const { mode, toggleColorMode } = useColorMode();

  const boxShadow =
    mode === 'dark'
      ? `0px 7px 8px -4px rgb(146 146 146 / 20%), 
      0px 12px 17px 2px rgb(146 146 175 / 14%), 
      0px 5px 22px 4px rgb(146 146 175 / 12%)`
      : '';

  const handleClick = () => {
    navigate('/');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Enter') {
      navigate('/');
    }
  };

  return (
    <Paper
      elevation={12}
      square
      component="header"
      sx={{
        boxShadow
      }}
      className={styles.header}
    >
      <Box
        maxWidth={1150}
        p={2}
        sx={{
          m: '0 auto',
          flexGrow: 1
        }}
      >
        <div
          role="link"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          className={`${styles.wrapper} ${styles[mode]}`}
        >
          <IoEarth />
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontWeight: 700
            }}
          >
            Countries App
          </Typography>
        </div>
        <div>
          <IconButton
            onClick={toggleColorMode}
            color="inherit"
          >
            {mode === 'dark' ? <HiOutlineSun fontSize="30px" /> : <HiOutlineMoon fontSize="30px" />}
          </IconButton>
        </div>
      </Box>
    </Paper>
  );
};

export default Header;
