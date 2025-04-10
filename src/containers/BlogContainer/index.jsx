import { useState } from "react";
import { useParams } from "react-router-dom";

import BlogPostForm from "../../components/BlogPostForm";
import BlogPostDetail from "../../components/BlogPostDetail";

const BlogContainer = () => {
  const [blogPosts, setBlogPosts] = useState(
      JSON.parse(localStorage.getItem("blogPosts")) || []
    ),
    [isEdit, setIsEdit] = useState(false),
    { id } = useParams();

  const post = blogPosts.find((post) => post.id === Number(id));

  const handleUpdate = (updatedPost) => {
    const updatedPosts = blogPosts.map((p) =>
      p.id === post.id ? { ...updatedPost, id: post.id } : p
    );
    setBlogPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    setIsEdit(false);
  };

  return (
    <>
      <h1>Blog Posts</h1>
      {isEdit ? (
        <BlogPostForm post={post} onSubmit={handleUpdate} />
      ) : (
        <BlogPostDetail post={post} isEdit={isEdit} setIsEdit={setIsEdit} />
      )}
    </>
  );
};

export default BlogContainer;
