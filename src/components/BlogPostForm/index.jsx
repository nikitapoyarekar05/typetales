import React, { useState } from "react";

import styles from "./BlogPostForm.module.css";
import formStyles from "../../globals/form.module.css";

import { AUTHOR } from "../../utilities/author";
import GenericInput from "../GenericInput";
import Editor from "../Editor";
import Button from "../Button";

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");
  const [author, setAuthor] = useState(post?.author || "");
  const [date, setDate] = useState(post?.date || "");
  const [errors, setErrors] = useState({});

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

  return (
    <div className={formStyles.blogPostFormContainer}>
      <form className={styles.blogPostForm} onSubmit={handleSubmit}>
        <GenericInput
          label={AUTHOR.FORM_LABELS.TITLE}
          id="title"
          htmlFor="title"
          value={title}
          onChange={setTitle}
          error={errors.title}
          errorMessage={errors.title}
        />

        <Editor
          htmlFor="content"
          label={AUTHOR.FORM_LABELS.CONTENT}
          id="content"
          content={content}
          onChange={setContent}
          error={errors.content}
          errorMessage={errors.content}
        />

        <GenericInput
          label={AUTHOR.FORM_LABELS.AUTHOR}
          id="author"
          htmlFor="author"
          value={author}
          onChange={setAuthor}
          error={errors.author}
          errorMessage={errors.author}
        />

        <GenericInput
          label={AUTHOR.FORM_LABELS.DATE}
          id="date"
          htmlFor="date"
          type="date"
          placeholder="Select a date"
          value={date}
          onChange={setDate}
          error={errors.date}
          errorMessage={errors.date}
        />

        <div className={styles.buttonDiv}>
          <Button
            className={styles.postButton}
            buttonType="primary"
            type="submit"
          >
            {window.location.pathname.includes("posts")
              ? AUTHOR.UPDATE_POST
              : AUTHOR.CREATE_POST}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
