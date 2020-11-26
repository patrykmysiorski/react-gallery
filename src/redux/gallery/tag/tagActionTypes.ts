export const ADD_TAG = "ADD_TAG";
export const DELETE_TAG = "DELETE_TAG";

interface AddTagAction {
  type: typeof ADD_TAG;
  payload: string;
}

interface DeleteTagAction {
  type: typeof DELETE_TAG;
  payload: string;
}

export type TagActionTypes = AddTagAction | DeleteTagAction;
