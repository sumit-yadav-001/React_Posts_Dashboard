import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { fetchPosts,updateVisiblePosts } from '../features/posts/postSlice';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';


const Home = () => {
    const dispatch = useDispatch();
    const {visiblePosts,loading,currentPage} = useSelector(state=>state.posts); 

    useEffect(()=>{
      setTimeout(()=>{
        dispatch(fetchPosts());
        },5000);
        },[]);

    useEffect(()=>{
      dispatch(updateVisiblePosts());
    },[currentPage]);

    if(loading) return <Loader/>;
  return (
    <div className='p-6 max-w-6xl mx-auto'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {visiblePosts.map(post=>(
      <PostCard key={post.id} post={post}/>
    ))}
  </div>
  <Pagination/>
    </div>
  )
}

export default Home;