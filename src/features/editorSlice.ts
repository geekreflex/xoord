import { createSlice } from '@reduxjs/toolkit';

interface EditorState {
  currentZoom: number;
}

const initialState: EditorState = {
  currentZoom: 0,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {},
});

export default editorSlice.reducer;
