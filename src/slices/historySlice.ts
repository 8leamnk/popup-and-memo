import { HistoryInfo } from '@/constants/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  historyInfo: HistoryInfo;
}

const initialState: InitialState = {
  historyInfo: {
    history: { first: null, last: null, size: 0 },
    prevPathname: undefined,
    currPathname: undefined,
  },
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    handleAddHistoryInfo: (state, action: PayloadAction<HistoryInfo>) => {
      state.historyInfo = { ...state.historyInfo, ...action.payload };
    },
  },
});

const historyReducer = historySlice.reducer;

export const { handleAddHistoryInfo } = historySlice.actions;
export default historyReducer;
