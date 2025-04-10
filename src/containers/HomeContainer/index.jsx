import { useState } from "react";
import BlogPostList from "../../components/BlogPostList";
import BlogPostForm from "../../components/BlogPostForm";

const HomeContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [blogPosts, setBlogPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("blogPosts")) || [];
  });

  const handleSavePost = (newPost) => {
    const updatedPosts = [
      ...blogPosts,
      { ...newPost, id: Date.now(), url: `posts/${Date.now()}` },
    ];
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    setBlogPosts(updatedPosts);
    setShowForm(false);
  };

  return (
    <>
      <h1>Blog Posts</h1>
      {showForm ? (
        <BlogPostForm onSubmit={handleSavePost} />
      ) : (
        <BlogPostList posts={blogPosts} onClickHandler={setShowForm} />
      )}
    </>
  );
};

export default HomeContainer;
