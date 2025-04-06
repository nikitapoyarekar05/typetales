import styles from "./BlogPostItem.module.css";

import { Link } from "react-router-dom";

import { formatDate } from "../../../utility/utils";

const BlogPostItem = (props) => {
  const { title, summary, date, url } = props;

  return (
    <div className={styles.blogPostItem}>
      <h2 className={styles.title}>
        <Link className={styles.link} to={url}>
          {title}
        </Link>
      </h2>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formatDate(date)}</p>
    </div>
  );
};
export default BlogPostItem;
