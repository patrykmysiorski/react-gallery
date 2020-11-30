import { GalleryState } from "./galleryTypes";
import {
  FETCH_GALLERIES_SUCCESS,
  FETCH_GALLERY_SUCCESS,
  GalleriesActionTypes,
} from "./galleryActionTypes";
import { ADD_TAG, DELETE_TAG } from "./tag/tagActionTypes";
import {
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_START,
} from "./comment/commentActionTypes";
import IComment from "../../models/comment";

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
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        currentGallery: {
          ...state.currentGallery,
          comments: state.currentGallery.comments.concat(action.payload),
        },
      };
    case DELETE_COMMENT_START:
      return {
        ...state,
        currentGallery: {
          ...state.currentGallery,
          comments: state.currentGallery.comments.filter(
            (comment: IComment) => comment.commentId !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default galleryReducer;
