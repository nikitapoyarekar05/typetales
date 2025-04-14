import styles from "./BlogPostList.module.css";
import { AUTHOR } from "../../utilities/author";
import Button from "../Button/index";
import BlogPostItem from "../BlogPostItem";

const BlogPostList = ({ posts = [] }) => {
  return posts.length === 0 ? (
    <p>{AUTHOR.NO_BLOGS_POSTS}</p>
  ) : (
    <div className={styles.blogPostList}>
      {posts.map((post) => (
        <BlogPostItem data-testid={`post-${post.id}`} key={post.id} {...post} />
      ))}
    </div>
  );
};

export default BlogPostList;
