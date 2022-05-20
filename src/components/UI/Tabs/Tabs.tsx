import { FC, ReactNode, SyntheticEvent } from 'react';
import { Tabs, Tab, Box, TabsProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { OptionsFilters } from '../../../types/OptionsFilters';

const CustomizedTabs = styled((props: TabsProps) => <Tabs {...props} />)(({ theme }) => ({
  borderBottom: '1px solid lightgray',
  textTransform: 'none',
  '& .MuiTab-root.Mui-selected': {
    color: 'inherit'
  },
  '& :hover': {
    textShadow: theme.palette.mode === 'dark' ? '-2px 1px 16px #a092a1' : '-2px 1px 16px #3e2d40'
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#b1b2c0;'
  },
  '& :focus': {
    textShadow: theme.palette.mode === 'dark' ? '-2px 1px 16px #a092a1' : '-2px 1px 16px #3e2d40'
  },
  '& .MuiButtonBase-root': {
    fontSize: '16px',
    textTransform: 'none'
  },
  '& .MuiTabs-flexContainer': {
    '@media (min-width: 767px)': {
      justifyContent: 'center'
    }
  }
}));

interface ICustomTabsProps {
  value: number;
  onTabChange: (event: SyntheticEvent, newValue: number) => void;
  children: ReactNode;
  options: OptionsFilters;
}

const CustomTabs: FC<ICustomTabsProps> = ({ options, children, onTabChange, value }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <CustomizedTabs
          variant="scrollable"
          allowScrollButtonsMobile
          value={value}
          onChange={onTabChange}
        >
          {options.map((option) => {
            return (
              <Tab
                key={option.text}
                disableRipple
                label={option.text}
              />
            );
          })}
        </CustomizedTabs>
      </Box>
      {children}
    </Box>
  );
};

export default CustomTabs;
