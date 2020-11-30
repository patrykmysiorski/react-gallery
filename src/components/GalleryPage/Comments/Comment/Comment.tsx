import React from "react";
import IComment from "../../../../models/comment";
import "./Comment.scss";
import { AppDispatch } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { deleteCommentStartAction } from "../../../../redux/gallery/comment/commentActions";
import moment from "moment";

interface IProps {
  comment: IComment;
}

const Comment: React.FC<IProps> = ({ comment }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCommentStartAction(comment.commentId));
  };

  return (
    <div className="comments-container flex-row-container flex-justify-space-between">
      <div
        className="avatar m-r-1"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + comment.userAvatarUrl
          })`,
        }}
      />
      <div className="flex-col-container main-content">
        <h5>Author: {comment.userId}</h5>
        <p>
          <small>{moment(comment.createdAt).format("DD.MM.YYYY HH:MM")}</small>
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
