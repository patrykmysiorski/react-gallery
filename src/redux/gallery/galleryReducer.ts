import { GalleryState } from "./galleryTypes";
import {
  FETCH_GALLERIES_SUCCESS,
  FETCH_GALLERY_SUCCESS,
  GalleriesActionTypes,
} from "./galleryActionTypes";

const initialState: GalleryState = {
  galleries: [],
  currentGallery: {},
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
    case FETCH_GALLERY_SUCCESS:
      return {
        ...state,
        currentGallery: action.payload,
      };
    default:
      return state;
  }
};

export default galleryReducer;
