import { useDispatch } from "react-redux";
import { removePost } from "../features/posts/postSlice";
import toast from "react-hot-toast";

const Card = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removePost(post.id));
    toast.success("Post removed successfully");
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group">

      {/* Image Section */}
      <div className="relative">

        <img
          src={`https://picsum.photos/seed/${post.id}/600/300`}
          alt="post"
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>

        {/* Delete button inside image */}
        <button
          onClick={handleDelete}
          className="
            absolute top-4 right-4
            w-9 h-9
            flex items-center justify-center
            rounded-full
            bg-white/80 backdrop-blur
            text-red-500
            hover:bg-red-500
            hover:text-white
            transition
            shadow-md
          "
        >
          ✕
        </button>

      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-3">
          {post.body}
        </p>
      </div>
    </div>
  );
};

export default Card;