import styles from "./BlogPostDetail.module.css";

import { useParams } from "react-router-dom";

import BLOG_POSTS from "../../../constants/mockData";
import { formatDate } from "../../../utility/utils";
import RichTextRenderer from "../../molecules/RichTextRenderer/index";

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find((post) => post.id === Number(id));

  console.log({ post });

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>{post.title}</h1>
      <h1 className={styles.blogAuthor}>{post.author}</h1>
      <h4 className={styles.blogDate}>Published on {formatDate(post.date)}</h4>

      <div className={styles.blogContent}>
        <RichTextRenderer content={post.content} />
      </div>
    </div>
  );
};

export default BlogPostDetail;
