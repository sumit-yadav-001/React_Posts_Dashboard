import {useDispatch} from "react-redux";
import { removePosts } from "../features/posts/postSlice";

const PostCard = ({post}) => {
    const dispatch = useDispatch();

    return (
        <div className="bg-white shadow-lg rounded p-4 relative">
        <button
            onClick={() => dispatch(removePosts(post.id))}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
            ❌
        </button>

        <h2 className="font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700">{post.body}</p>
        </div>
    );
};

export default PostCard;