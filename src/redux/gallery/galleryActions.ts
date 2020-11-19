import { FETCH_GALLERIES, GalleriesActionTypes } from "./galleryActionTypes";

export const fetchGalleriesAction = (): GalleriesActionTypes => {
  return { type: FETCH_GALLERIES };
};
