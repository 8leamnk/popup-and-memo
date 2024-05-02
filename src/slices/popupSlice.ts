import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PopupInfo } from '@/constants/types';

interface InitialState {
  homeEventPopupIndex: number;
  popupInfo: PopupInfo;
}

const initialState = {
  homeEventPopupIndex: 0,
  popupInfo: null,
} as InitialState;

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    handleHomeEventPopupIndex: (state) => {
      state.homeEventPopupIndex += 1;
    },
    handlePopupOpened: (state) => {
      state.homeEventPopupIndex += 1;
    },
    getPopupInfo: (state, action: PayloadAction<PopupInfo>) => {
      state.popupInfo = action.payload;
    },
  },
});

const popupReducer = popupSlice.reducer;

export const { handleHomeEventPopupIndex, handlePopupOpened, getPopupInfo } =
  popupSlice.actions;
export default popupReducer;
