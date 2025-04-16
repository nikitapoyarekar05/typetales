import formStyles from "../../globals/form.module.css";

function GenericInput({
  id,
  htmlFor,
  type,
  required,
  displayLabel = true,
  label,
  placeholder,
  disabled = false,
  customClass,
  dataTestId,
  value,
  onChange = () => {},
  error,
  errorMessage,
}) {
  const errorId = error ? `${id}-error` : undefined;

  const getDataTestId = () => dataTestId ?? id ?? "";

  return (
    <div className={formStyles.formGroup}>
      {displayLabel && (
        <label className={formStyles.label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type ?? "text"}
        className={`${formStyles.input} ${customClass ? customClass : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        data-testid={getDataTestId()}
        value={value}
        aria-describedby={errorId}
        aria-required={required}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <span id={errorId} className={formStyles.error}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default GenericInput;
