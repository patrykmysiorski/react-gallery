import { all, call } from "redux-saga/effects";
import { gallerySaga } from "./gallery/gallerySaga";

export default function* rootSaga() {
  yield all([call(gallerySaga)]);
}
