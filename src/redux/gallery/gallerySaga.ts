import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_GALLERIES_START,
  FETCH_GALLERY_START,
} from "./galleryActionTypes";
import {
  fetchGalleriesFailedAction,
  fetchGalleriesSuccessAction,
  fetchGalleryFailedAction,
  fetchGallerySuccessAction,
} from "./galleryActions";
import axios from "axios";

const fetchGalleries = async () => {
  try {
    const response = await axios.get("/gallery");
    return await response.data;
  } catch (error) {
    console.log("error when fetching galleries", error);
  }
};

const updateGallery = async (id: number, tags?: string[]) => {
  try {
    const response = await axios.patch("gallery", {
      galleryId: id,
      tags: tags,
    });
    console.log("Returned data:", response);
  } catch (e) {
    console.log(`Axios request failed: ${e}`);
  }
};

function* updateGalleryAsync() {}

function* fetchGalleriesAsync() {
  try {
    const data = yield call(fetchGalleries);
    yield put(fetchGalleriesSuccessAction(data));
  } catch (error) {
    yield console.log("error in saga", error);
    yield put(fetchGalleriesFailedAction());
  }
}

function* fetchGalleriesStart() {
  yield takeLatest(FETCH_GALLERIES_START, fetchGalleriesAsync);
}

function* fetchGalleryStart() {
  yield takeLatest(FETCH_GALLERY_START, fetchGalleryAsync);
}

const fetchGallery = async (galleryId: string) => {
  try {
    const response = await axios.get(`/gallery/${galleryId}`);
    return await response.data;
  } catch (error) {
    console.log(`error when fetching gallery with id ${galleryId}`, error);
  }
};

// TODO look at types here
function* fetchGalleryAsync(action: any) {
  try {
    const data = yield fetchGallery(action.payload);
    yield put(fetchGallerySuccessAction(data));
  } catch (error) {
    yield console.log("error in saga", error);
    yield put(fetchGalleryFailedAction());
  }
}

function* updateGalleryStart() {
  yield takeLatest(FETCH_GALLERIES_START, fetchGalleriesAsync);
}

export function* gallerySaga() {
  yield all([call(fetchGalleriesStart), call(fetchGalleryStart)]);
}
