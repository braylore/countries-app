import { IoEarth } from 'react-icons/io5';
import { FC, KeyboardEvent } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();

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
        >
          <IoEarth />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700
            }}
          >
            Countries App
          </Typography>
        </div>
        <div>Switch</div>
      </Box>
    </Paper>
  );
};

export default Header;
