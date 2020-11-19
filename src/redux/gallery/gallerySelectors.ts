import { createSelector } from "reselect";
import { RootState } from "../rootReducer";

const galleryReducerSelector = (state: RootState) => state.galleryReducer;

export const galleriesSelector = createSelector(
  [galleryReducerSelector],
  (galleryReducer) => galleryReducer.galleries
);
