import { all, call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { ADD_COMMENT_START, AddCommentStartAction } from "./commentActionTypes";
import { addCommentSuccessAction } from "./commentActions";

function* addCommentStart() {
  yield takeLatest(ADD_COMMENT_START, addCommentAsync);
}

function* addCommentAsync(action: AddCommentStartAction) {
  try {
    const databaseComment = yield axios
      .post("/addComment", {
        galleryId: action.payload.galleryId,
        content: action.payload.content,
        userId: action.payload.userId,
      })
      .then((response: AxiosResponse) => response.data);
    console.log(databaseComment);
    yield put(addCommentSuccessAction(databaseComment));
  } catch (error) {
    yield console.log("error in add comment saga", error);
  }
}

export function* commentSaga() {
  yield all([call(addCommentStart)]);
}
