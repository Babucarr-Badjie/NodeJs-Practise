const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
  { id: 4, title: "Post Four" },
  { id: 5, title: "Post Five" },
];

const getPostsLength = () => {
  return posts.length;
};

export const getPosts = () => posts;

export default getPostsLength;
