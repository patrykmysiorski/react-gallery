import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_GALLERIES_START,
  FETCH_GALLERY_START,
  FetchGalleryStartAction,
  UPDATE_GALLERY_START,
  UpdateGalleryStartAction,
} from "./galleryActionTypes";
import {
  fetchGalleriesFailedAction,
  fetchGalleriesSuccessAction,
  fetchGalleryFailedAction,
  fetchGallerySuccessAction,
  updateGalleryFailedAction,
  updateGallerySuccessAction,
} from "./galleryActions";
import axios from "axios";

function* fetchGalleriesStart() {
  yield takeLatest(FETCH_GALLERIES_START, fetchGalleriesAsync);
}

function* fetchGalleriesAsync() {
  try {
    const data = yield axios.get("/gallery").then((response) => response.data);
    yield put(fetchGalleriesSuccessAction(data));
  } catch (error) {
    yield console.log("error when fetching galleries", error);
    yield put(fetchGalleriesFailedAction());
  }
}

function* fetchGalleryStart() {
  yield takeLatest(FETCH_GALLERY_START, fetchGalleryAsync);
}

function* fetchGalleryAsync(action: FetchGalleryStartAction) {
  try {
    const response = yield axios
      .get(`/gallery/${action.payload}`)
      .then((response) => response.data);
    yield put(fetchGallerySuccessAction(response));
  } catch (error) {
    console.log(`error when fetching gallery with id ${action.payload}`, error);
    yield put(fetchGalleryFailedAction());
  }
}

function* updateGalleryStart() {
  yield takeLatest(UPDATE_GALLERY_START, updateGalleryAsync);
}

function* updateGalleryAsync(action: UpdateGalleryStartAction) {
  try {
    yield axios
      .patch("/gallery", {
        galleryId: action.payload.galleryId,
        tags: action.payload.tags,
      })
      .then((response) => console.log("Returned data: ", response));
    yield put(updateGallerySuccessAction());
  } catch (error) {
    yield console.log("error in saga", error);
    yield put(updateGalleryFailedAction());
  }
}

export function* gallerySaga() {
  yield all([
    call(fetchGalleriesStart),
    call(fetchGalleryStart),
    call(updateGalleryStart),
  ]);
}
