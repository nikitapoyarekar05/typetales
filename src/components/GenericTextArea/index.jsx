import formStyles from "../../globals/form.module.css";

function GenericTextArea({
  id,
  htmlFor,
  required,
  label,
  value,
  onChange,
  error,
  errorMessage,
  rows = 4,
  cols,
  placeholder,
  maxLength,
}) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <textarea
        id={id}
        className={formStyles.textArea}
        value={value}
        aria-describedby={errorId}
        aria-required={required}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {error && (
        <span id={errorId} className={formStyles.error}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default GenericTextArea;
