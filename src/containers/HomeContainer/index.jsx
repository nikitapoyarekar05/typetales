import { useNavigate } from "react-router-dom";

import BlogPostList from "../../components/BlogPostList";
import BlogPostForm from "../../components/BlogPostForm";
import { AUTHOR } from "../../utilities/author";

const ariaLiveStyles = {
  position: "absolute",
  width: "0.063rem",
  height: "0.063rem",
  padding: 0,
  margin: "-0.063rem",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
};

const HomeContainer = ({ posts, onSavePost }) => {
  const isAddPage = window.location.pathname === "/typetales/add";
  const navigate = useNavigate();

  const handleSave = (post) => {
    onSavePost(post);
    navigate("/");
  };

  return (
    <>
      <h1>{AUTHOR.BLOG_POSTS}</h1>
      {isAddPage ? (
        <BlogPostForm onSubmit={handleSave} />
      ) : (
        <>
          {!isAddPage && (
            <div aria-live="polite" style={ariaLiveStyles}>
              Showing {posts.length} blog post{posts.length !== 1 ? "s" : ""}
            </div>
          )}
          <BlogPostList posts={posts} />
        </>
      )}
    </>
  );
};

export default HomeContainer;
