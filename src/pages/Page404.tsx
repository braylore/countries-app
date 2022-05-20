import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ margin: '30px 0', textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
        Page doesn&apos;t exist
      </div>
      <Button
        sx={{
          textTransform: 'unset',
          fontSize: '18px'
        }}
        disableRipple
        onClick={handleClick}
        variant="contained"
      >
        Back to main page
      </Button>
    </div>
  );
};

export default Page404;
