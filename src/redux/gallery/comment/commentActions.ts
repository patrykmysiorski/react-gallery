import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_START,
} from "./commentActionTypes";
import IComment from "../../../models/comment";

export const addCommentStartAction = (
  content: string,
  userId: string,
  galleryId: string
) => {
  return {
    type: ADD_COMMENT_START,
    payload: {
      content,
      userId,
      galleryId,
    },
  };
};

export const addCommentSuccessAction = (comment: IComment) => {
  return {
    type: ADD_COMMENT_SUCCESS,
    payload: comment,
  };
};

export const deleteCommentStartAction = (commentId: string) => {
  return {
    type: DELETE_COMMENT_START,
    payload: commentId,
  };
};
