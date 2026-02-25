import {useSelector,useDispatch} from "react-redux";
import {setPage} from "../features/posts/postSlice";
import totalPages from "../features/posts/postSelectors";

const Pagination = () => {
    const dispatch = useDispatch();

    const {allPosts,currentPage,postsPerPage} = useSelector(state=>state.posts); 

    return (
        <div className="flex justify-center mt-5 gap-2">

        <button
            onClick={()=>dispatch(setPage(Math.max(currentPage-1,1)))}
            className="px-3 py-1 bg-gray-300">
            Prev
        </button>

        {[...Array(totalPages)].map((_,i) => (
            <button
            key={i}
            onClick={()=>dispatch(setPage(i+1))}
            className={`px-3 py-1 ${i+1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
            {i+1}
            </button>
        ))}

        <button
            onClick={()=>dispatch(setPage(Math.min(currentPage+1,totalPages)))}
            className="px-3 py-1 bg-gray-300">
            Next
        </button>

        </div>
    );
};

export default Pagination;