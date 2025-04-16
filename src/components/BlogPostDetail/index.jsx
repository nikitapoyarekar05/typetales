import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./BlogPostDetail.module.css";

import { dateInLocale } from "../../utilities/helpers";
import Button from "../Button";
import { AUTHOR } from "../../utilities/author";
import ConfirmationDialog from "../ConfirmationDialog";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";

// mock user
const user = {
  isLoggedIn: true,
  name: "Nikita",
};

const BlogPostDetail = ({ post, isEdit, setIsEdit, onDeletePost }) => {
  const [blogPosts, setBlogPosts] = useState(
      JSON.parse(localStorage.getItem("blogPosts")) || []
    ),
    [showDialog, setShowDialog] = useState(false),
    navigate = useNavigate();

  if (!post) {
    return <p>{AUTHOR.BLOG_NOT_FOUND}</p>;
  }

  const handleDelete = () => {
    onDeletePost(post.id);
    navigate("/");
  };

  const addComment = (comment, resetForm) => {
    if (!post.comments) {
      post.comments = [];
    }
    post.comments.push(comment);
    const updatedPosts = blogPosts.map((p) =>
      p.id === post.id ? { ...post, id: post.id } : p
    );
    setBlogPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    resetForm();
  };

  return (
    <>
      <div className={styles.blogContainer}>
        <div className={styles.editButton}>
          <Button
            id="edit-blog"
            disabled={isEdit}
            variant="primary"
            dataTestId="edit-blog"
            ariaLabel={AUTHOR.BUTTON_LABELS.EDIT_BLOG}
            onClick={() => setIsEdit(true)}
          >
            {AUTHOR.BUTTON_LABELS.EDIT_BLOG}
          </Button>
        </div>
        <h1 className={styles.blogTitle}>{post.title}</h1>

        <h2 className={styles.blogAuthor}>{post.author}</h2>
        <h4 className={styles.blogDate}>
          {AUTHOR.BLOG_DATE.replace("date", dateInLocale(post.date))}
        </h4>
        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Button
          id="delete-blog"
          disabled={isEdit}
          variant="danger"
          dataTestId="delete-blog"
          ariaLabel="Delete blog"
          onClick={() => setShowDialog(true)}
        >
          {AUTHOR.BUTTON_LABELS.DELETE}
        </Button>

        <ConfirmationDialog
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onConfirm={handleDelete}
        />
      </div>
      <div className={styles.commentContainer}>
        {post.comments && (
          <div>
            <h4 className={styles.title}>{AUTHOR.COMMENTS}</h4>
            <CommentList comments={post.comments} />
          </div>
        )}
        {
          <CommentForm
            isLoggedIn={user.isLoggedIn}
            userName={user.name}
            onSubmit={addComment}
          />
        }
      </div>
    </>
  );
};

export default BlogPostDetail;
