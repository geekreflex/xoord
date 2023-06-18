import { createSlice } from '@reduxjs/toolkit';
import { fabric } from 'fabric';

interface EditorState {
  currentZoom: number;
  object: (fabric.Object & fabric.Textbox) | null;
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
  },
});

export const { setCurrentZoom, setObject } = editorSlice.actions;
export default editorSlice.reducer;
