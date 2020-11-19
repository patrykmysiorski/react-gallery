import {
  FETCH_GALLERIES_START,
  FETCH_GALLERIES_SUCCESS,
  GalleriesActionTypes,
} from "./galleryActionTypes";
import IGallery from "../../models/gallery";

export const fetchGalleriesAction = (): GalleriesActionTypes => {
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
