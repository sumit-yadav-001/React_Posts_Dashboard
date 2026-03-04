export const getPostsAPI = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (!res.ok) throw new Error("API failed");
  return res.json();
};