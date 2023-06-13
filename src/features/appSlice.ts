import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  resizeModal: boolean;
  layout: string;
}

const initialState: AppState = {
  resizeModal: false,
  layout: 'left',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLayout(state) {
      state.layout = state.layout === 'left' ? 'right' : 'left';
    },
  },
});

export const { toggleLayout } = appSlice.actions;
export default appSlice.reducer;
