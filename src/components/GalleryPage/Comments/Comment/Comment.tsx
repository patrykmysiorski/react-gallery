import React from "react";
import IComment from "../../../../models/comment";
import "./Comment.scss";
import { AppDispatch } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { deleteCommentAction } from "../../../../redux/gallery/comment/commentActions";

interface IProps {
  comment: IComment;
}

const Comment: React.FC<IProps> = ({ comment }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCommentAction(comment.commentId));
  };

  return (
    <div className="comments-container flex-row-container flex-justify-space-between">
      <div
        className="avatar m-r-1"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/img/user/user.jpeg"
          })`,
        }}
      />
      <div className="flex-col-container main-content">
        <h5>Author: userName</h5>
        <p>
          <small>12-02-2012</small>
        </p>
        <p className="comment-message">{comment.content}</p>
      </div>
      <div className="flex-row-container flex-align-items-center">
        <button className="button button-danger" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Comment;
