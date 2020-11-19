import { GalleryState } from "./galleryTypes";
import {
  FETCH_GALLERIES_SUCCESS,
  GalleriesActionTypes,
} from "./galleryActionTypes";

const initialState: GalleryState = {
  galleries: [],
};

const galleryReducer = (
  state = initialState,
  action: GalleriesActionTypes
): GalleryState => {
  switch (action.type) {
    case FETCH_GALLERIES_SUCCESS:
      return {
        ...state,
        galleries: action.payload,
      };
    default:
      return state;
  }
};

export default galleryReducer;
