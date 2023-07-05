import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (userId: number, thunkAPI: any) => {
    const posts = await api.fetchPosts();
    console.log(posts, "getchhh");
    thunkAPI.dispatch(setAllPosts(posts.data));
  }
);

const initialState = { allPosts: [] as any };

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
  },
});

export const { setAllPosts } = postsSlice.actions;

export default postsSlice.reducer;
