import { all, call, put, takeLatest } from "redux-saga/effects";
import { FETCH_GALLERIES_START } from "./galleryActionTypes";
import { fetchGalleriesSuccessAction } from "./galleryActions";

const fetchData = async () => {
  try {
    const response = await fetch(
      // "/api/hello"
      "https://my-json-server.typicode.com/patrykmysiorski/fake-api-react-gallery/gallery"
    );
    return await response.json();
  } catch (error) {
    console.log("error ", error);
  }
};

function* fetchGalleriesAsync() {
  try {
    const data = yield call(fetchData);
    yield console.log(data);
    yield put(fetchGalleriesSuccessAction(data));
  } catch (error) {
    console.log("error in saga", error);
  }
}

function* fetchGalleriesStart() {
  yield takeLatest(FETCH_GALLERIES_START, fetchGalleriesAsync);
}

export function* gallerySaga() {
  yield all([call(fetchGalleriesStart)]);
}
