import { Link } from "react-router-dom";

import styles from "./BlogPostItem.module.css";

import { formatDate } from "../../utilities/helpers";
import { AUTHOR } from "../../utilities/author";

const BlogPostItem = (props) => {
  const { title, summary, date, id } = props;

  return (
    <div className={styles.blogPostItem}>
      <h2 className={styles.title}>
        <Link className={styles.link} to={`/posts/${id}`}>
          {title}
        </Link>
      </h2>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date} data-testid="date">
        {AUTHOR.BLOG_DATE.replace("date", formatDate(date))}
      </p>
    </div>
  );
};
export default BlogPostItem;
