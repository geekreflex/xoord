import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  chooseTemplateModal: boolean;
}

const initialState: AppState = {
  chooseTemplateModal: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleChooseTempleteModal: (state, action) => {
      state.chooseTemplateModal = action.payload;
    },
  },
});

export const { toggleChooseTempleteModal } = appSlice.actions;
export default appSlice.reducer;
