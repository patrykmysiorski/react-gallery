import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderTextArea } from "../../../../formUtils/renderers";
import "./CommentsForm.scss";
import { length } from "redux-form-validators";
import FormButtons from "../../../FormButtons/FormButtons";

const CommentForm: React.FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("fired form submit");
  };
  return (
    <div className="flex-col-container comment-form">
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="comment"
          component={renderTextArea}
          placeholder={"Type your comment here..."}
          validate={length({ min: 3 })}
        />
        <FormButtons formName={"comments"} />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "comments",
})(CommentForm);
