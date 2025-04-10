import styles from "./BlogPostList.module.css";
import { AUTHOR } from "../../utilities/author";
import Button from "../Button/index";
import BlogPostItem from "../BlogPostItem";

const BlogPostList = ({ posts = [], onClickHandler, disabled }) => {
  const handleClick = () => {
    onClickHandler(true);
  };

  return (
    <>
      <div className={styles.addBlog}>
        <Button
          onClick={handleClick}
          disabled={disabled}
          dataTestid="add-blog"
          buttonType="primary"
        >
          {AUTHOR.ADD_BLOG}
        </Button>
      </div>
      {posts.length === 0 ? (
        <p>{AUTHOR.NO_BLOGS_POSTS}</p>
      ) : (
        <div className={styles.blogPostList}>
          {posts.map((post) => (
            <BlogPostItem
              data-testid={`blog-post-${post.id}`}
              key={post.id}
              {...post}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogPostList;
