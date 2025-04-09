import styles from "./BlogPostList.module.css";

import BlogPostItem from "../../molecules/BlogPostItem";
import BLOG_POSTS from "../../../constants/mockData";

const BlogPostList = () => {
  return (
    <>
      <div className={styles.addBlog}>
        <button className={styles.addBlogBtn}>Add Blog</button>
      </div>
      {BLOG_POSTS.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <div className={styles.blogPostList}>
          {BLOG_POSTS.map((post) => (
            <BlogPostItem key={post.id} {...post} />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogPostList;
