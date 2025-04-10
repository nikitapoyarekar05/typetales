import React, { useEffect, useRef } from "react";

import styles from "./ConfirmationDialog.module.css";

import Button from "../Button";
import { AUTHOR } from "../../utilities/author";

const ConfirmationDialog = ({ isOpen, onClose, onConfirm }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        ref={dialogRef}
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="dialog-title">{AUTHOR.CONFIRMATION_DIALOG.TITLE}</h2>
        <p id="dialog-description">{AUTHOR.CONFIRMATION_DIALOG.DESCRIPTION}</p>
        <div className={styles.buttons}>
          <Button
            id="cancel-blogDelete"
            variant="secondary"
            className={styles.button}
            data-testid="cancel-blogDelete"
            ariaLabel="Cancel delete blog"
            onClick={onClose}
          >
            {AUTHOR.BUTTON_LABELS.CANCEL}
          </Button>
          <Button
            id="delete-blog"
            variant="danger"
            className={styles.button}
            data-testid="delete-blog"
            ariaLabel="Delete Blog"
            onClick={onConfirm}
          >
            {AUTHOR.BUTTON_LABELS.DELETE}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
