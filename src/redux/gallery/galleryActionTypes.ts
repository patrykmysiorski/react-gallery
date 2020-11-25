import IGallery from "../../models/gallery";

export const FETCH_GALLERIES_START = "FETCH_GALLERIES_START";
export const FETCH_GALLERIES_SUCCESS = "FETCH_GALLERIES_SUCCESS";
export const FETCH_GALLERIES_FAILED = "FETCH_GALLERIES_FAILED";

export const FETCH_GALLERY_START = "FETCH_GALLERY_START";
export const FETCH_GALLERY_SUCCESS = "FETCH_GALLERY_SUCCESS";
export const FETCH_GALLERY_FAILED = "FETCH_GALLERY_FAILED";

interface FetchGalleriesStartAction {
  type: typeof FETCH_GALLERIES_START;
}

interface FetchGalleriesSuccessAction {
  type: typeof FETCH_GALLERIES_SUCCESS;
  payload: IGallery[];
}

interface FetchGalleriesFailedAction {
  type: typeof FETCH_GALLERIES_FAILED;
}

interface FetchGalleryStartAction {
  type: typeof FETCH_GALLERY_START;
  payload: string;
}

interface FetchGallerySuccessAction {
  type: typeof FETCH_GALLERY_SUCCESS;
  payload: IGallery;
}

interface FetchGalleryFailedAction {
  type: typeof FETCH_GALLERY_FAILED;
}

export type GalleriesActionTypes =
  | FetchGalleriesStartAction
  | FetchGalleriesSuccessAction
  | FetchGalleriesFailedAction
  | FetchGalleryStartAction
  | FetchGallerySuccessAction
  | FetchGalleryFailedAction;
