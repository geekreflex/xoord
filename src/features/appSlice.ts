import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  resizeModal: boolean;
}

const initialState: AppState = {
  resizeModal: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
