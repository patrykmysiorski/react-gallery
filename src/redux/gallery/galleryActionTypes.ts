import IGallery from "../../models/gallery";
import { TagActionTypes } from "./tag/tagActionTypes";
import { CommentActionTypes } from "./comment/commentActionTypes";

export const FETCH_GALLERIES_START = "FETCH_GALLERIES_START";
export const FETCH_GALLERIES_SUCCESS = "FETCH_GALLERIES_SUCCESS";
export const FETCH_GALLERIES_FAILED = "FETCH_GALLERIES_FAILED";

export const FETCH_GALLERY_START = "FETCH_GALLERY_START";
export const FETCH_GALLERY_SUCCESS = "FETCH_GALLERY_SUCCESS";
export const FETCH_GALLERY_FAILED = "FETCH_GALLERY_FAILED";

export const UPDATE_GALLERY_START = "UPDATE_GALLERY_START";
export const UPDATE_GALLERY_SUCCESS = "UPDATE_GALLERY_SUCCESS";
export const UPDATE_GALLERY_FAILED = "UPDATE_GALLERY_FAILED";

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

export interface FetchGalleryStartAction {
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

// TODO types

export interface UpdateGalleryStartAction {
  type: typeof UPDATE_GALLERY_START;
  payload: any;
}

interface UpdateGallerySuccessAction {
  type: typeof UPDATE_GALLERY_SUCCESS;
}

interface UpdateGalleryFailedAction {
  type: typeof UPDATE_GALLERY_FAILED;
}

export type GalleriesActionTypes =
  | FetchGalleriesStartAction
  | FetchGalleriesSuccessAction
  | FetchGalleriesFailedAction
  | FetchGalleryStartAction
  | FetchGallerySuccessAction
  | FetchGalleryFailedAction
  | UpdateGalleryStartAction
  | UpdateGallerySuccessAction
  | UpdateGalleryFailedAction
  | TagActionTypes
  | CommentActionTypes;
