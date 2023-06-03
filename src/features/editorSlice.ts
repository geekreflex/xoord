import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

interface EditorState {
  currentZoom: number;
  workspace: {
    fill: string;
    width: number;
    height: number;
  };
}

const initialState: EditorState = {
  currentZoom: 0,
  workspace: {
    fill: '',
    width: 0,
    height: 0,
  },
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCurrentZoom: (state, action) => {
      state.currentZoom = action.payload;
    },
    setWorkspace: (state, action) => {
      const data = {
        width: action.payload.width || state.workspace.width,
        height: action.payload.height || state.workspace.height,
        fill: action.payload.fill || state.workspace.fill,
      };
      state.workspace = data;
    },
  },
});

export const { setCurrentZoom, setWorkspace } = editorSlice.actions;

export default editorSlice.reducer;
