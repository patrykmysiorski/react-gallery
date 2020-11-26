import { ADD_TAG, DELETE_TAG, TagActionTypes } from "./tagActionTypes";

export const addTagAction = (tag: string): TagActionTypes => {
  return { type: ADD_TAG, payload: tag };
};

export const deleteTagAction = (tag: string): TagActionTypes => {
  return { type: DELETE_TAG, payload: tag };
};
