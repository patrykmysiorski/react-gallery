import { createSelector } from "reselect";
import { RootState } from "../rootReducer";

const galleryReducerSelector = (state: RootState) => state.galleryReducer;

export const galleriesSelector = createSelector(
  [galleryReducerSelector],
  (galleryReducer) => galleryReducer.galleries
);

export const gallerySelector = (id: string) =>
  createSelector(galleriesSelector, (galleries) =>
    galleries.find((gallery) => gallery.galleryId === id)
  );

export const currentGallerySelector = createSelector(
  [galleryReducerSelector],
  (galleryReducer) => galleryReducer.currentGallery
);
