import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BlogPostList from "../../components/BlogPostList";
import BlogPostForm from "../../components/BlogPostForm";
import { AUTHOR } from "../../utilities/author";

const HomeContainer = () => {
  const [blogPosts, setBlogPosts] = useState(() => {
    return JSON.parse(localStorage.getItem("blogPosts")) || [];
  });
  const isAddPage = window.location.pathname === "/typetales/add";
  const navigate = useNavigate();

  const handleSavePost = (newPost) => {
    const updatedPosts = [
      ...blogPosts,
      { ...newPost, id: Date.now(), url: `posts/${Date.now()}` },
    ];
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    setBlogPosts(updatedPosts);
    navigate("/");
  };

  return (
    <>
      <h1>{AUTHOR.BLOG_POSTS}</h1>
      {isAddPage ? (
        <BlogPostForm onSubmit={handleSavePost} />
      ) : (
        <BlogPostList
          posts={blogPosts}
          onClickHandler={() => navigate("/add")}
        />
      )}
    </>
  );
};

export default HomeContainer;
