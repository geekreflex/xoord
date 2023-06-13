import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@/features/appSlice';
import editorReducer from '@/features/editorSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    editor: editorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
