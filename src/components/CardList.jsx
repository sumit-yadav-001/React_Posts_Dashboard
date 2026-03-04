import { useSelector } from "react-redux";
import {
  selectFilteredPosts,
  selectCurrentPage,
} from "../features/posts/postSelectors";
import Card from "./Card";
import EmptyState from "./EmptyState";

const CardList = () => {
  const posts = useSelector(selectFilteredPosts);
  const currentPage = useSelector(selectCurrentPage);

  if (posts.length === 0) return <EmptyState />;

  const start = (currentPage - 1) * 6;
  const visible = posts.slice(start, start + 6);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {visible.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default CardList;