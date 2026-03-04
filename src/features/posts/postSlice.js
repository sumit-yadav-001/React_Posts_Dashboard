import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsAPI } from "../../services/postService";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async () => await getPostsAPI()
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    deletedIds: [],
    currentPage: 1,
    loading: true,
  },
  reducers: {
    removePost: (state, action) => {
      state.deletedIds.push(action.payload);
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload;
    });
  },
});

export const { removePost, setPage, stopLoading } =
  postSlice.actions;
export default postSlice.reducer;