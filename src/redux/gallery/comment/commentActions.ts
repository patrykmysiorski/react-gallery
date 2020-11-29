import { ADD_COMMENT, DELETE_COMMENT } from "./commentActionTypes";

export const addCommentAction = (content: string, userId: string) => {
  return {
    type: ADD_COMMENT,
    payload: {
      content,
      userId,
    },
  };
};

export const deleteCommentAction = (commentId: string) => {
  return {
    type: DELETE_COMMENT,
    payload: commentId,
  };
};
