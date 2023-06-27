import { GOOGLE_FONT_KEY } from '@/utils/constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface FontsState {
  fonts: { family: string; category: string }[];
  status: 'loading' | 'idle' | 'success' | 'failed';
  error: string | null;
}

const initialState: FontsState = {
  fonts: [],
  status: 'idle',
  error: null,
};

const fetchFonts = createAsyncThunk('fonts/fetchFonts', async () => {
  const response = await axios.get(
    `https://www.googleapis.com/webfonts/v1/websfonts`,
    {
      params: { key: GOOGLE_FONT_KEY },
    }
  );
  return response.data.items;
});

export const fontsSlice = createSlice({
  name: 'fonts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFonts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchFonts.fulfilled, (state, action) => {
        (state.status = 'idle'), (state.fonts = action.payload);
      })
      .addCase(fetchFonts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch fonts.';
      });
  },
});

export default fontsSlice.reducer;
