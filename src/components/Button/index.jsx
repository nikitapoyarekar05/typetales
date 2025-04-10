import styles from "./Button.module.css";

const Button = ({
  id,
  buttonType,
  dataTestid,
  className,
  onClick,
  disabled,
  children,
  type,
}) => {
  return (
    <button
      id={id}
      type={type}
      data-testid={dataTestid ? `${buttonType}-${dataTestid}` : buttonType}
      onClick={onClick}
      disabled={disabled ?? false}
      className={`${styles.btn} ${
        buttonType ? styles.primaryButton : styles.secondaryButton
      } ${disabled && styles.disabled} ${className}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
