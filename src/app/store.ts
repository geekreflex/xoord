import { configureStore } from '@reduxjs/toolkit';
import editorReducer from '@/features/editorSlice';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
export type AppDispatch = typeof store.dispatch;
