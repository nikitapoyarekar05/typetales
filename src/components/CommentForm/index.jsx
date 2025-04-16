import { useState } from "react";

import styles from "./CommentForm.module.css";

import { AUTHOR } from "../../utilities/author";
import GenericInput from "../GenericInput";
import GenericTextArea from "../GenericTextArea";
import Button from "../Button";
import { dateInLocale } from "../../utilities/helpers";

function CommentForm({ userName, isLoggedIn, onSubmit }) {
  const [commenterName, setCommenterName] = useState(
      isLoggedIn ? userName : ""
    ),
    [commentText, setCommentText] = useState(""),
    [avatarUrl, setAvatarUrl] = useState(""),
    [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!commenterName.trim()) newErrors.commenterName = AUTHOR.REQUIRED;
    if (!commentText.trim()) newErrors.comment = AUTHOR.REQUIRED;
    return newErrors;
  };

  const resetForm = () => {
    setCommenterName(isLoggedIn ? userName : "");
    setCommentText("");
    setAvatarUrl("");
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newComment = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: commenterName,
      commentText,
      avatarUrl,
      date: dateInLocale("", true),
    };

    onSubmit(newComment, resetForm);
  };

  return (
    <div className={styles.commentFormContainer}>
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <GenericInput
          id="commenterName"
          htmlFor="commenterName"
          required={true}
          label={AUTHOR.COMMENT_FORM_LABELS.NAME}
          disabled={isLoggedIn}
          dataTestId="commenterName"
          value={commenterName}
          onChange={setCommenterName}
          error={errors.commenterName}
          errorMessage={errors.commenterName}
        />

        <GenericTextArea
          id="comment-content"
          htmlFor="comment-content"
          required={true}
          label={AUTHOR.COMMENT_FORM_LABELS.COMMENT}
          dataTestId="comment-content"
          value={commentText}
          onChange={setCommentText}
          error={errors.comment}
          errorMessage={errors.comment}
        />

        <GenericInput
          id="avatar"
          htmlFor="avatar"
          label={AUTHOR.COMMENT_FORM_LABELS.AVATAR_URL}
          placeholder="https://avatar.iran.liara.run/public"
          dataTestId="avatar"
          value={avatarUrl}
          onChange={setAvatarUrl}
        />

        <div className={styles.submitButtonDiv}>
          <Button
            id="submit-comment"
            type="submit"
            variant="primary"
            dataTestId="submit-comment"
            ariaLabel="Submit"
          >
            {AUTHOR.SUBMIT}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
