import styles from "./Button.module.css";

const Button = ({
  id,
  type,
  disabled,
  variant,
  className,
  dataTestId,
  ariaLabel,
  ariaExpanded,
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

  const getDataTestId = () => dataTestId || (variant ? `${variant}-${id}` : id);

  return (
    <button
      id={id}
      type={type ?? "button"}
      disabled={disabled ?? false}
      aria-disabled={disabled ?? false}
      className={getClassNames(variant, disabled, styles, className)}
      data-testid={getDataTestId()}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
