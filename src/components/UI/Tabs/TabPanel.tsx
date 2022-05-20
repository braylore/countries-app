import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react';

interface ICustomTabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: FC<ICustomTabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 1
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default CustomTabPanel;
