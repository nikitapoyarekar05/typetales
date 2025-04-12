import styles from "./Comment.module.css";

import { cleanText } from "../../utilities/helpers";

const Comment = ({ comment }) => {
  const avatarSrc = comment.avatarUrl?.length
    ? comment.avatarUrl
    : "https://avatar.iran.liara.run/public/74";

  const avatarAlt = comment.avatarUrl
    ? "Profile picture"
    : "Avatar placeholder";

  return (
    <div className={styles.comment}>
      <div className={styles.avatarImage}>
        <img src={avatarSrc} alt={avatarAlt} />
      </div>

      <div className={styles.commentMeta}>
        <div className={styles.commentParticulars}>
          <div className={styles.commentorName}>{comment.name}</div>
          <div className={styles.date}>{comment.date}</div>
        </div>
        <div className={styles.commentText}>
          {cleanText(comment.commentText)}
        </div>
      </div>
    </div>
  );
};

export default Comment;
