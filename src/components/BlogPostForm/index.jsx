import React, { useState } from "react";

import styles from "./BlogPostForm.module.css";
import formStyles from "../../globals/form.module.css";

import { AUTHOR } from "../../utilities/author";
import GenericInput from "../GenericInput";
import Editor from "../Editor";
import Button from "../Button";

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || ""),
    [content, setContent] = useState(post?.content || ""),
    [author, setAuthor] = useState(post?.author || ""),
    [date, setDate] = useState(post?.date || ""),
    [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = AUTHOR.REQUIRED;
    if (!content) newErrors.content = AUTHOR.REQUIRED;
    if (!author) newErrors.author = AUTHOR.REQUIRED;
    if (!date) newErrors.date = AUTHOR.REQUIRED;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit({ title, content, author, date });
    }
  };

  const getId = () => {
    if (window.location.pathname.includes("posts")) return "submit-update-post";
    return "submit-create-post";
  };

  const getButtonLabel = () => {
    if (window.location.pathname.includes("posts")) return AUTHOR.UPDATE_POST;
    return AUTHOR.CREATE_POST;
  };

  return (
    <div className={formStyles.blogPostFormContainer}>
      <form className={styles.blogPostForm} onSubmit={handleSubmit}>
        <GenericInput
          id="title"
          htmlFor="title"
          required={true}
          label={AUTHOR.FORM_LABELS.TITLE}
          dataTestId="title"
          value={title}
          onChange={setTitle}
          error={errors.title}
          errorMessage={errors.title}
        />

        <Editor
          id="content"
          htmlFor="content"
          required={true}
          label={AUTHOR.FORM_LABELS.CONTENT}
          dataTestId="content"
          content={content}
          onChange={setContent}
          error={errors.content}
          errorMessage={errors.content}
        />

        <GenericInput
          id="author"
          htmlFor="author"
          required={true}
          label={AUTHOR.FORM_LABELS.AUTHOR}
          dataTestId="author"
          value={author}
          onChange={setAuthor}
          error={errors.author}
          errorMessage={errors.author}
        />

        <GenericInput
          id="date"
          htmlFor="date"
          type="date"
          required={true}
          label={AUTHOR.FORM_LABELS.DATE}
          dataTestId="date"
          value={date}
          onChange={setDate}
          error={errors.date}
          errorMessage={errors.date}
        />

        <div className={styles.buttonDiv}>
          <Button
            id={getId()}
            type="submit"
            variant="primary"
            className={styles.postButton}
            dataTestId={getId()}
            ariaLabel={getButtonLabel()}
          >
            {getButtonLabel()}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
