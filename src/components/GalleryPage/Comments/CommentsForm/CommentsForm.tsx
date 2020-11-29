import React from "react";
import { Field, getFormValues, reduxForm } from "redux-form";
import { renderTextArea } from "../../../../formUtils/renderers";
import "./CommentsForm.scss";
import { length, required } from "redux-form-validators";
import FormButtons from "../../../FormButtons/FormButtons";
import { AppDispatch } from "../../../../redux/store";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/rootReducer";
import { addCommentAction } from "../../../../redux/gallery/comment/commentActions";

// TODO find a better way to get form values

const CommentsForm: React.FC<any> = (props) => {
  const dispatch: AppDispatch = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addCommentAction(props.formValues.comment, "1"));
  };
  return (
    <div className="flex-col-container comment-form">
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="comment"
          component={renderTextArea}
          placeholder={"Type your comment here..."}
          validate={[length({ min: 3 }), required()]}
        />
        <FormButtons formName={"comments"} />
      </form>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    formValues: getFormValues("comments")(state),
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "comments",
  })(CommentsForm)
);
