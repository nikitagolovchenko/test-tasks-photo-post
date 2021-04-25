import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { fetchAllImages } from '../../services/api';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const getAllImages = createAsyncThunk('posts/getAllImages', async () => {
  const response = await fetchAllImages();
  return response.data;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllImages.pending, state => {
        state.loading = true;
      })
      .addCase(getAllImages.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(getAllImages.rejected, (state, action) => {
        state.loading = false;
        state.error = `Ошибка загрузки постов: ${action.error.message}`;
      });
  },
});

export const {} = postsSlice.actions;

export const selectPosts = state => state.posts;

export default postsSlice.reducer;
