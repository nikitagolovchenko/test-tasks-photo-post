import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import postReducer from './slices/postSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer
  },
});
