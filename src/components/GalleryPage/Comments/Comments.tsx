import React from "react";
import CommentForm from "./CommentsForm/CommentsForm";
import "./Comments.scss";
import IComment from "../../../models/comment";
import Comment from "./Comment/Comment";

interface IProps {
  comments: IComment[];
}

const Comments: React.FC<IProps> = ({ comments }) => (
  <div
    className={
      "flex-row-container flex-justify-space-between comments-wrapper m-t-2"
    }
  >
    <CommentForm />
    <div className="vertical-line" />
    <div className={"comments-section"}>
      {comments?.map((comment: IComment) => (
        <Comment comment={comment} />
      ))}
    </div>
  </div>
);

export default Comments;
