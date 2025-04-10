import formStyles from "../../globals/form.module.css";

function GenericInput({
  htmlFor,
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
}) {
  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={formStyles.input}
        value={value}
        placeholder={placeholder ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className={formStyles.error}>{errorMessage}</span>}
    </div>
  );
}

export default GenericInput;
