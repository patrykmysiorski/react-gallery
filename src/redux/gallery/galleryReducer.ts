import { GalleryState } from "./galleryTypes";
import {
  FETCH_GALLERIES_SUCCESS,
  FETCH_GALLERY_SUCCESS,
  GalleriesActionTypes,
} from "./galleryActionTypes";
import { ADD_TAG, DELETE_TAG } from "./tag/tagActionTypes";

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
    case ADD_TAG:
      return {
        ...state,
        currentGallery: {
          ...state.currentGallery,
          tags: state.currentGallery.tags.push(action.payload),
        },
      };
    case DELETE_TAG:
      return {
        ...state,
        currentGallery: {
          ...state.currentGallery,
          tags: state.currentGallery.tags.filter(
            (tag: string) => tag !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default galleryReducer;
