import { PEXELS_KEY } from '@/config/key';
import { IStatus } from '@/types/app';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Image {
  id: string;
  src: {
    small: string;
    large: string;
    medium: string;
  };
}

interface ImagesState {
  images: Image[];
  backgrounds: Image[];
  page: number;
  perPage: number;
  status: IStatus;
  error: string | null;
}

const initialState: ImagesState = {
  images: [],
  backgrounds: [],
  page: 1,
  perPage: 40,
  status: 'idle',
  error: null,
};

export const fetchImages = createAsyncThunk(
  'images/fetchImages',
  async (page: number, { getState }) => {
    const { perPage } = (getState() as { images: ImagesState }).images;

    // Perform the actual API call to fetch images
    const response = await fetch(
      `https://api.pexels.com/v1/curated?page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_KEY,
        },
      }
    );
    const data = await response.json();

    if (response.ok) {
      return data.photos;
    } else {
      throw new Error(data.error);
    }
  }
);

export const fetchBackgrounds = createAsyncThunk(
  'images/fetchBackgrounds',
  async (page: number, { getState }) => {
    const { perPage } = (getState() as { images: ImagesState }).images;

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=abstract+background&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: PEXELS_KEY,
        },
      }
    );
    const data = await response.json();

    if (response.ok) {
      return data.photos;
    } else {
      throw new Error(data.error);
    }
  }
);

const imagesSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });

    builder
      .addCase(fetchBackgrounds.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBackgrounds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.backgrounds = action.payload;
      })
      .addCase(fetchBackgrounds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export default imagesSlice.reducer;
