import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import PhotoList from '../components/PhotoList';
import {getAllImages, selectPosts} from '../store/slices/postsSlice';
import Loader from '../ui/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch])

  return (
    <Layout>
      <Loader show={posts.loading}/>
      <PhotoList posts={posts.posts}/>
    </Layout>
  )
}

export default Home
