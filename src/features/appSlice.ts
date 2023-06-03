import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  resizeTemplateModal: boolean;
}

const initialState: AppState = {
  resizeTemplateModal: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleReszieTempleteModal: (state, action) => {
      state.resizeTemplateModal = action.payload;
    },
  },
});

export const { toggleReszieTempleteModal } = appSlice.actions;
export default appSlice.reducer;
