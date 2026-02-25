import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import {fetchPostsAPI} from "../../services/postService";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
      const data = await fetchPostsAPI();
      return data;
    }
);

const postSlice = createSlice({
    name:"posts",
    initialState:{
        allposts:[],
        visiblePosts:[],
        currentPage:1,
        postsPerPage:10,
        loading:true,
    },
    reducers:{
      removePosts:(state,action)=>{
        state.allposts = state.allposts.filter(post=>post.id !== action.payload);
      },

      setPage:(state,action)=>{
        state.currentPage = action.payload;
      },

      updateVisiblePosts:(state)=>{
        const start = (state.currentPage - 1)* state.postsPerPage;

        const end = start + state.postsPerPage;
        state.visiblePosts = state.allposts.slice(start,end);
      }
    },

    extraReducers:builder=>{
      builder.addCase(fetchPosts.fulfilled,(state,action) =>{
        state.allposts = action.payload;
        state.loading = false;
  });
    }
  });

export const {removePosts,setPage,updateVisiblePosts} = postSlice.actions;

export default postSlice.reducer;