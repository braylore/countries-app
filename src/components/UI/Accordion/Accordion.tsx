import { styled } from '@mui/material/styles';
import { HiPlus, HiMinus } from 'react-icons/hi';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FC, ReactNode, SyntheticEvent, useState } from 'react';
import ChipFilters from '../../ChipFilters/ChipFilters';
import ChipSort from '../../ChipSort/ChipSort';
import { SelectedFilters, SelectedSort } from '../../../types/SelectedOptions';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  boxShadow:
    theme.palette.mode === 'dark' ? 'rgb(145 145 145 / 12%) 2px 2px 10px 5px' : 'rgba(101, 95, 145, 0.2) 3px 9px 9px',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.divider}`,
  '&:before': {
    marginBottom: '5px',
    display: 'none'
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-content': {
    alignItems: 'center',
    marginLeft: '10px'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'none'
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)({
  borderTop: '5px solid rgba(0, 0, 0, .125)'
});

interface ICustomAccordionProps {
  children: ReactNode;
  label: string;
  isDisabled: boolean;
  selectedOptionsEntity: SelectedFilters[] | (SelectedSort | 'none');
}

const CustomAccordion: FC<ICustomAccordionProps> = ({ children, label, isDisabled, selectedOptionsEntity }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      disabled={isDisabled}
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}
    >
      <AccordionSummary expandIcon={expanded === 'panel1' ? <HiMinus /> : <HiPlus />}>
        <Typography>{label}</Typography>
        {Array.isArray(selectedOptionsEntity) ? (
          <ChipFilters selectedFiltersEntity={selectedOptionsEntity} />
        ) : selectedOptionsEntity === 'none' ? null : (
          <ChipSort selectedSortEntity={selectedOptionsEntity || ''} />
        )}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
