import { createSlice } from '@reduxjs/toolkit';
import { fabric } from 'fabric';

interface EditorState {
  currentZoom: number;
  object: (fabric.Object & fabric.Textbox & fabric.Polygon) | null;
}

const initialState: EditorState = {
  currentZoom: 0,
  object: null,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCurrentZoom: (state, action) => {
      const zoom = Number(action.payload);
      state.currentZoom = zoom;
    },
    setObject: (state, action) => {
      state.object = {
        ...state.object,
        ...action.payload,
      };
    },
    clearObject: (state) => {
      state.object = null;
    },
  },
});

export const { setCurrentZoom, setObject, clearObject } = editorSlice.actions;
export default editorSlice.reducer;
