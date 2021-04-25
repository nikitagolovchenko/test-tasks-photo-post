import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { fetchPost } from '../../services/api';

const initialState = {
  post: null,
  loading: false,
  error: null,
};

export const getPost = createAsyncThunk('post/getPost', async (id) => {
  const response = await fetchPost(id);
  const posts = JSON.parse(localStorage.getItem('posts'));

  if (posts[id]) {
    return {...response.data, comments: posts[id]};
  }

  return response.data;
});

export const addComment = createAsyncThunk('post/addComment', async (comment, {getState}) => {
  const posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : {};
  posts[getState().post.post.id] = [...getState().post.post.comments, comment];
  localStorage.setItem('posts', JSON.stringify(posts));
  return comment;
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    removePost: (state) => {
      state.error = null;
      state.loading = false;
      state.post = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getPost.pending, state => {
        state.loading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.post = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = `Ошибка загрузки поста: ${action.error.message}`;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.post.comments.push(action.payload);
      })
  },
});

export const {removePost} = postSlice.actions;

export const selectPost = state => state.post;

export default postSlice.reducer;
