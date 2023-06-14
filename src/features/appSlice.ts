import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  resizeModal: boolean;
  layout: string;
  panel: 'tools' | 'properties';
  activeTool: string;
  settingsModal: boolean;
}

const initialState: AppState = {
  resizeModal: false,
  layout: 'left',
  panel: 'tools',
  activeTool: 'elements',
  settingsModal: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLayout(state) {
      state.layout = state.layout === 'left' ? 'right' : 'left';
    },

    switchPanel(state, action) {
      state.panel = action.payload;
    },

    switchActiveTool(state, action) {
      state.activeTool = action.payload;
    },

    toggleSettingsModal(state) {
      state.settingsModal = !state.settingsModal;
    },
  },
});

export const {
  toggleLayout,
  switchPanel,
  switchActiveTool,
  toggleSettingsModal,
} = appSlice.actions;
export default appSlice.reducer;
