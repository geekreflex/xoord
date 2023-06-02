import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

interface EditorState {
  currentZoom: number;
}

const initialState: EditorState = {
  currentZoom: 0,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCurrentZoom: (state, action) => {
      state.currentZoom = action.payload;
    },
  },
});

export const { setCurrentZoom } = editorSlice.actions;

export default editorSlice.reducer;
