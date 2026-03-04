import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../features/posts/postSlice";
import { selectFilteredPosts } from "../features/posts/postSelectors";

const Pagination = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFilteredPosts);
  const currentPage = useSelector(
    (state) => state.posts.currentPage
  );

  const totalPages = Math.ceil(posts.length / 6);
  const visiblePages = 4;

  const start =
    Math.floor((currentPage - 1) / visiblePages) *
      visiblePages +
    1;

  const end = Math.min(start + visiblePages - 1, totalPages);

  const pages = [];
  for (let i = start; i <= end; i++) pages.push(i);

  return (
    <div className="flex justify-center items-center mt-16 gap-3">

      <button
        disabled={currentPage === 1}
        onClick={() => dispatch(setPage(currentPage - 1))}
        className="w-10 h-10 rounded-lg border hover:bg-black hover:text-white transition"
      >
        ‹
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => dispatch(setPage(page))}
          className={`w-10 h-10 rounded-lg ${
            currentPage === page
              ? "bg-black text-white shadow-lg"
              : "border hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {end < totalPages && (
        <button
          onClick={() => dispatch(setPage(end + 1))}
          className="w-10 h-10 rounded-lg border hover:bg-black hover:text-white transition"
        >
          ›
        </button>
      )}
    </div>
  );
};

export default Pagination;