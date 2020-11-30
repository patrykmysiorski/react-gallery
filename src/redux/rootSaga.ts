import { all, call } from "redux-saga/effects";
import { gallerySaga } from "./gallery/gallerySaga";
import { commentSaga } from "./gallery/comment/commentSaga";

export default function* rootSaga() {
  yield all([call(gallerySaga), call(commentSaga)]);
}
