import {
  FETCH_GALLERIES,
  GalleriesActionTypes,
} from "../actionsTypes/galleryActionTypes";

export const fetchGalleriesAction = (): GalleriesActionTypes => {
  return { type: FETCH_GALLERIES };
};
