import { configureStore } from '@reduxjs/toolkit';
import popupReducer from '@/slices/popupSlice';
import historyReducer from '@/slices/historySlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
