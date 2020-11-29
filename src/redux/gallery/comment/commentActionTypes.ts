import IComment from "../../../models/comment";

export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

interface AddCommentAction {
  type: typeof ADD_COMMENT;
  payload: IComment;
}

interface DeleteCommentAction {
  type: typeof DELETE_COMMENT;
  payload: string;
}

export type CommentActionTypes = AddCommentAction | DeleteCommentAction;
