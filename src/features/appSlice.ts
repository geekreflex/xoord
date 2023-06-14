import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  resizeModal: boolean;
  layout: string;
  panel: 'tools' | 'properties' | null;
  activeTool: string;
  settingsModal: boolean;
  isPanelOpen: boolean;
}

const initialState: AppState = {
  resizeModal: false,
  layout: 'left',
  panel: 'tools',
  activeTool: 'elements',
  settingsModal: false,
  isPanelOpen: true,
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
      state.isPanelOpen = true;
    },

    closePanel(state) {
      state.isPanelOpen = false;
    },

    switchActiveTool(state, action) {
      state.activeTool = action.payload;
      state.isPanelOpen = true;
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
  closePanel,
} = appSlice.actions;
export default appSlice.reducer;
