import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PopupInfo } from '@/constants/types';

interface InitialState {
  popupState: boolean;
  popupInfo: PopupInfo;
}

const initialState = {
  popupState: false,
  popupInfo: null,
} as InitialState;

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    handlePopupOpened: (state, action: PayloadAction<boolean>) => {
      state.popupState = action.payload;
    },
    getPopupInfo: (state, action: PayloadAction<PopupInfo>) => {
      state.popupInfo = action.payload;
    },
  },
});

const popupReducer = popupSlice.reducer;

export const { handlePopupOpened, getPopupInfo } = popupSlice.actions;
export default popupReducer;
