import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  stopLoading,
} from "../features/posts/postSlice";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());

    const timer = setTimeout(() => {
      dispatch(stopLoading());
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 p-12">
        <Loader />
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Posts Dashboard
          </h1>
          <p className="text-gray-500 mt-3">
            Browse and manage posts easily
          </p>
        </div>

        <CardList />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;