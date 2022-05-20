import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPaginationState {
  currentPage: number;
  countriestSelect: number;
}

const initialState: IPaginationState = {
  currentPage: 1,
  countriestSelect: 6
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    currentPageChanged: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    countriestSelectChanged: (state, action: PayloadAction<number>) => {
      state.countriestSelect = action.payload;
    }
  }
});

export const { countriestSelectChanged, currentPageChanged } = paginationSlice.actions;
export default paginationSlice.reducer;
