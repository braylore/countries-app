import { useState, FC, KeyboardEvent } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import styles from './tooltip.module.scss';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    '&:before': {
      backgroundColor: theme.palette.mode === 'light' ? '#dbd1c2' : '#2a446b'
    }
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#dbd1c2' : '#2a446b',
    color: theme.palette.mode === 'light' ? '#000' : '#fff'
  }
}));

interface ICustomTooltipProps {
  textArr: string[];
  label: string;
}

const CustomTooltip: FC<ICustomTooltipProps> = ({ textArr, label }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Enter') {
      if (open) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <span className={styles.tooltip}>
        <LightTooltip
          arrow
          PopperProps={{
            disablePortal: true
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={textArr.map((text) => (
            <div key={text}>{text}</div>
          ))}
        >
          <span
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={handleTooltipOpen}
          >
            {label}
          </span>
        </LightTooltip>
      </span>
    </ClickAwayListener>
  );
};

export default CustomTooltip;
