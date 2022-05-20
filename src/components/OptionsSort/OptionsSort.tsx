import { ToggleButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, MouseEvent } from 'react';
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5';
import { SortValueEnum } from '../../constants/sortEnums';
import { OptionsSortElements } from '../../types/OptionsSortElements';
import { getFormattedClassName } from '../../utils/getFormattedClassName';
import ToggleBtn from '../UI/ToggleBtn/ToggleBtn';
import styles from './optionsSort.module.scss';

interface IOptionsSortProps {
  activeSort: string;
  text: string;
  elements: OptionsSortElements;
  handleClick: (e: MouseEvent<HTMLElement>, value: SortValueEnum) => void;
}

const OptionsSort: FC<IOptionsSortProps> = ({ text, elements, activeSort, handleClick }) => {
  const activeClass = activeSort.split('-')[0];
  let activeDirection = activeSort.split('-')[1];

  if (!activeDirection) {
    activeDirection = '';
  }

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
                selected={value.includes(activeSort)}
                value={value}
                onClick={handleClick}
              >
                <div className={getFormattedClassName(activeClass, value, styles, activeDirection)}>
                  <IoCaretUpOutline className={styles.iconUp} />
                  <IoCaretDownOutline className={styles.iconDown} />
                </div>
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
