import styles from "./BlogPostList.module.css";

import BlogPostItem from "../../molecules/BlogPostItem";
import BLOG_POSTS from "../../../constants/mockData";

const BlogPostList = () => {
  if (BLOG_POSTS && BLOG_POSTS.length > 0) {
    return (
      <div className={styles.blogPostList}>
        {BLOG_POSTS.map((post) => (
          <BlogPostItem key={post.id} {...post} />
        ))}
      </div>
    );
  } else {
    return <p>No blog posts available.</p>;
  }
};

export default BlogPostList;
