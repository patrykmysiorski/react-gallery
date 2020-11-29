import React from "react";
import { WrappedFieldProps } from "redux-form";

interface IProps {
  placeholder?: string;
  label?: string;
  type: string;
}

export const renderField: React.FC<WrappedFieldProps & IProps> = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const renderTextArea: React.FC<WrappedFieldProps & IProps> = ({
  input,
  label,
  placeholder,
  meta: { touched, error, warning },
}) => (
  <div className={"m-t-1"}>
    {label && <label>{label}</label>}
    <div className={"flex-col-container"}>
      <textarea {...input} placeholder={placeholder} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);
