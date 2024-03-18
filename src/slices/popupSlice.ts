import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PopupInfo } from '@/constants/types';

interface InitialState {
  popupState: number;
  popupInfo: PopupInfo;
}

const initialState = {
  popupState: 0,
  popupInfo: null,
} as InitialState;

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    handlePopupOpened: (state) => {
      state.popupState += 1;
    },
    getPopupInfo: (state, action: PayloadAction<PopupInfo>) => {
      state.popupInfo = action.payload;
    },
  },
});

const popupReducer = popupSlice.reducer;

export const { handlePopupOpened, getPopupInfo } = popupSlice.actions;
export default popupReducer;
