import { ToggleButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, MouseEvent } from 'react';
import { SortValueEnum } from '../../constants/sortEnums';
import { OptionsSortElements } from '../../types/OptionsSortElements';
import ToggleBtn from '../UI/ToggleBtn/ToggleBtn';

interface IOptionsSortProps {
  activeSort: string;
  text: string;
  elements: OptionsSortElements;
  handleClick: (e: MouseEvent<HTMLElement>, value: SortValueEnum) => void;
}

const OptionsSort: FC<IOptionsSortProps> = ({ text, elements, activeSort, handleClick }) => {
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
                onClick={handleClick}
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
