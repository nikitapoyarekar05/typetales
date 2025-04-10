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
          id="add-blog"
          disabled={disabled}
          variant="primary"
          dataTestid="add-blog"
          ariaLabel={AUTHOR.BUTTON_LABELS.ADD_BLOG}
          onClick={handleClick}
        >
          {AUTHOR.BUTTON_LABELS.ADD_BLOG}
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
