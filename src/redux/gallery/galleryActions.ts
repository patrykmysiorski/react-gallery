import {
  FETCH_GALLERIES_FAILED,
  FETCH_GALLERIES_START,
  FETCH_GALLERIES_SUCCESS,
  FETCH_GALLERY_FAILED,
  FETCH_GALLERY_START,
  FETCH_GALLERY_SUCCESS,
  GalleriesActionTypes,
  UPDATE_GALLERY_FAILED,
  UPDATE_GALLERY_START,
  UPDATE_GALLERY_SUCCESS,
} from "./galleryActionTypes";
import IGallery from "../../models/gallery";

export const fetchGalleriesStartAction = (): GalleriesActionTypes => {
  return { type: FETCH_GALLERIES_START };
};

export const fetchGalleriesSuccessAction = (
  payload: IGallery[]
): GalleriesActionTypes => {
  return {
    type: FETCH_GALLERIES_SUCCESS,
    payload,
  };
};

export const fetchGalleriesFailedAction = (): GalleriesActionTypes => {
  return {
    type: FETCH_GALLERIES_FAILED,
  };
};

export const fetchGalleryStartAction = (
  galleryId: string
): GalleriesActionTypes => {
  return { type: FETCH_GALLERY_START, payload: galleryId };
};

export const fetchGallerySuccessAction = (
  payload: IGallery
): GalleriesActionTypes => {
  return {
    type: FETCH_GALLERY_SUCCESS,
    payload,
  };
};

export const fetchGalleryFailedAction = (): GalleriesActionTypes => {
  return {
    type: FETCH_GALLERY_FAILED,
  };
};

export const updateGalleryStartAction = (
  payload: any
): GalleriesActionTypes => {
  return { type: UPDATE_GALLERY_START, payload };
};

export const updateGallerySuccessAction = (): GalleriesActionTypes => {
  return {
    type: UPDATE_GALLERY_SUCCESS,
  };
};

export const updateGalleryFailedAction = (): GalleriesActionTypes => {
  return {
    type: UPDATE_GALLERY_FAILED,
  };
};
