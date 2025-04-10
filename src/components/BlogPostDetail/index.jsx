import styles from "./BlogPostDetail.module.css";

import { formatDate } from "../../utilities/helpers";
import Button from "../Button";
import { AUTHOR } from "../../utilities/author";

const BlogPostDetail = ({ post, isEdit, setIsEdit }) => {
  if (!post) {
    return <p>{AUTHOR.BLOG_NOT_FOUND}</p>;
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.editButton}>
        <Button
          onClick={() => setIsEdit(true)}
          disabled={isEdit}
          dataTestid="edit-blog"
          buttonType="primary"
        >
          {AUTHOR.EDIT_BLOG}
        </Button>
      </div>
      <h1 className={styles.blogTitle}>{post.title}</h1>

      <h2 className={styles.blogAuthor}>{post.author}</h2>
      <h4 className={styles.blogDate}>
        {AUTHOR.BLOG_DATE.replace("date", formatDate(post.date))}
      </h4>
      <div
        className={styles.blogContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPostDetail;
