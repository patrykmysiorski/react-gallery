import IGallery from "../../models/gallery";

export const FETCH_GALLERIES_START = "FETCH_GALLERIES_START";
export const FETCH_GALLERIES_SUCCESS = "FETCH_GALLERIES_SUCCESS";

interface FetchGalleriesAction {
  type: typeof FETCH_GALLERIES_START;
}

interface FetchGalleriesSuccessAction {
  type: typeof FETCH_GALLERIES_SUCCESS;
  payload: IGallery[];
}

export type GalleriesActionTypes =
  | FetchGalleriesAction
  | FetchGalleriesSuccessAction;
