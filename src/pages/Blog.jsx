import BlogContainer from "../containers/BlogContainer";

const Blog = ({ onDeletePost }) => {
  return <BlogContainer onDeletePost={onDeletePost} />;
};

export default Blog;
