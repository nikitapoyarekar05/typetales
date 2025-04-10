import styles from "./Button.module.css";

const Button = ({
  id,
  type,
  disabled,
  variant,
  className,
  dataTestid,
  ariaLabel,
  onClick,
  children,
}) => {
  const getClassNames = (variant, disabled, styles, className) => {
    const buttonStyles = {
      primary: styles.primaryButton,
      secondary: styles.secondaryButton,
      danger: styles.danger,
    };

    const classes = [
      styles.btn,
      buttonStyles[variant],
      disabled && styles.disabled,
      className,
    ].filter(Boolean);

    return classes.join(" ");
  };

  return (
    <button
      id={id}
      type={type ?? "button"}
      disabled={disabled ?? false}
      aria-disabled={disabled ?? false}
      className={getClassNames(variant, disabled, styles, className)}
      data-testid={
        !dataTestid ? `${variant}-${id}` : `${variant}-${dataTestid}`
      }
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
