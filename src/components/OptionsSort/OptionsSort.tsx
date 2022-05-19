import { ToggleButtonGroup, Typography, ToggleButton } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { OptionsSortElements } from '../../types/OptionsSortElements';
import ToggleBtn from '../UI/ToggleBtn/ToggleBtn';

interface IOptionsSortProps {
  text: string;
  elements: OptionsSortElements;
}

const OptionsSort: FC<IOptionsSortProps> = ({ text, elements }) => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 'bold'
        }}
      >
        {text}
      </Typography>
      <ToggleButtonGroup
        sx={{
          marginTop: '10px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {elements.map(({ label, value }) => {
          return (
            <Box
              sx={{
                mr: '5px',
                mt: '5px'
              }}
              key={label}
            >
              <ToggleBtn
                disableRipple
                key={label}
                value={value}
              >
                {label}
              </ToggleBtn>
            </Box>
          );
        })}
      </ToggleButtonGroup>
    </>
  );
};

export default OptionsSort;
