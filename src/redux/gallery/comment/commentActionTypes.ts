import IComment from "../../../models/comment";

export const ADD_COMMENT_START = "ADD_COMMENT_START";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILED = "ADD_COMMENT_FAILED";
export const DELETE_COMMENT_START = "DELETE_COMMENT_START";
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILED = "DELETE_COMMENT_FAILED";

export interface AddCommentStartAction {
  type: typeof ADD_COMMENT_START;
  payload: {
    content: string;
    galleryId: string;
    userId: string;
  };
}

interface AddCommentSuccessAction {
  type: typeof ADD_COMMENT_SUCCESS;
  payload: IComment;
}

interface DeleteCommentStartAction {
  type: typeof DELETE_COMMENT_START;
  payload: string;
}

export type CommentActionTypes =
  | AddCommentStartAction
  | AddCommentSuccessAction
  | DeleteCommentStartAction;
