import Pagination, { PaginationProps } from '@mui/material/Pagination';
import { ChangeEvent, FC } from 'react';
import { styled } from '@mui/material/styles';

const CustomizedPagination = styled((props: PaginationProps) => <Pagination {...props} />)(({ theme }) => ({
  '& .MuiButtonBase-root': {
    margin: '2px',
    boxShadow: theme.palette.mode === 'light' ? '0px 1px 7px 0px rgb(35 40 35)' : '0px 1px 7px 0px rgb(235 235 235)'
  }
}));

interface ICustomPaginationProps {
  totalPages: number;
  changePage: (e: ChangeEvent<unknown>, page: number) => void;
  currentPage: number;
}

const CustomPagination: FC<ICustomPaginationProps> = ({ totalPages, changePage, currentPage }) => {
  return (
    <CustomizedPagination
      sx={{
        marginY: '20px'
      }}
      page={currentPage}
      onChange={changePage}
      count={totalPages}
      size="large"
    />
  );
};

export default CustomPagination;
