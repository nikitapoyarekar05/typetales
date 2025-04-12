import formStyles from "../../globals/form.module.css";

function GenericInput({
  id,
  htmlFor,
  type,
  required,
  label,
  placeholder,
  disabled = false,
  value,
  onChange,
  error,
  errorMessage,
}) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        id={id}
        type={type ?? "text"}
        className={formStyles.input}
        placeholder={placeholder}
        disabled={disabled}
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
