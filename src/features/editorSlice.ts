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
  reducers: {
    setCurrentZoom: (state, action) => {
      const zoom = Number(action.payload);
      state.currentZoom = zoom;
    },
  },
});

export const { setCurrentZoom } = editorSlice.actions;
export default editorSlice.reducer;
