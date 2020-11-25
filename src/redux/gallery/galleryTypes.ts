import IGallery from "../../models/gallery";

//TODO look at types
export interface GalleryState {
  galleries: IGallery[];
  currentGallery: any;
}
