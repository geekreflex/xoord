import { ObjectTypes } from '@/types/editor';
import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  resizeModal: boolean;
  layout: string;
  panel: 'tools' | 'properties' | null;
  activeTool: string;
  settingsModal: boolean;
  isPanelOpen: boolean;
  panelTitle: string | null;
  propertyTitle: string | null;
  propPanel: ObjectTypes | null;
}

const initialState: AppState = {
  resizeModal: false,
  layout: 'left',
  panel: 'tools',
  activeTool: 'elements',
  settingsModal: false,
  isPanelOpen: true,
  panelTitle: 'Elements',
  propertyTitle: null,
  propPanel: null,
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

    setPanelTitle(state, action) {
      state.panelTitle = action.payload;
    },

    setPropertyTitle(state, action) {
      state.propertyTitle = action.payload;
    },
    switchPropertyPanel(state, action) {
      state.propPanel = action.payload;
    },
  },
});

export const {
  toggleLayout,
  switchPanel,
  switchActiveTool,
  toggleSettingsModal,
  closePanel,
  setPanelTitle,
  switchPropertyPanel,
} = appSlice.actions;
export default appSlice.reducer;
