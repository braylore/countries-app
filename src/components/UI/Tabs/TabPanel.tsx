import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react';
import styles from './tabPanel.module.scss';

interface ICustomTabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: FC<ICustomTabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={styles.wrapper}
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
