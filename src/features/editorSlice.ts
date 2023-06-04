import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import { TemplateSizeProps } from '@/types/editor';
import { templateSizePresets } from '@/data/templates/size';

interface EditorState {
  currentZoom: number;
  workspace: {
    fill: string;
    width: number;
    height: number;
  };
  templateSize: TemplateSizeProps | null;
  template: null;
}

const initialState: EditorState = {
  currentZoom: 0,
  workspace: {
    fill: '',
    width: 0,
    height: 0,
  },
  templateSize: templateSizePresets[0],
  template: null,
};

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setCurrentZoom: (state, action) => {
      const zoom = action.payload.toFixed(2);
      state.currentZoom = zoom;
    },
    setWorkspace: (state, action) => {
      const data = {
        width: action.payload.width || state.workspace.width,
        height: action.payload.height || state.workspace.height,
        fill: action.payload.fill || state.workspace.fill,
      };
      console.log('DATA', data);
      state.workspace = data;
    },
    setSelectedTemplateSize: (state, action) => {
      state.templateSize = action.payload;
    },
  },
});

export const { setCurrentZoom, setWorkspace, setSelectedTemplateSize } =
  editorSlice.actions;

export default editorSlice.reducer;
