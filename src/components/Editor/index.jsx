import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

import formStyles from "../../globals/form.module.css";
import { BUTTON_LIST } from "./buttonList.js";

const Editor = ({
  htmlFor,
  label,
  id,
  content,
  onChange,
  error,
  errorMessage,
}) => {
  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <SunEditor
        id={id}
        defaultValue={content}
        setContents={content}
        onChange={(value) => onChange(value)}
        setDefaultStyle="text-align: justify; font-size: 10px;"
        setOptions={{
          height: 300,
          buttonList: BUTTON_LIST,
        }}
      />
      {error && <span className={formStyles.error}>{errorMessage}</span>}
    </div>
  );
};

export default Editor;
