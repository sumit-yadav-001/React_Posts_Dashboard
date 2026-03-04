export const selectFilteredPosts = (state) =>
  state.posts.allPosts.filter(
    (post) => !state.posts.deletedIds.includes(post.id)
  );

export const selectCurrentPage = (state) =>
  state.posts.currentPage;