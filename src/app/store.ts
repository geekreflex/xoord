import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/features/appSlice';
import editorReducer from '@/features/editorSlice';
import imagesReducer from '@/features/imagesSlice';
import fontsReducer from '@/features/fontsSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    editor: editorReducer,
    images: imagesReducer,
    fonts: fontsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
