import { GalleryState } from "./galleryTypes";
import { FETCH_GALLERIES, GalleriesActionTypes } from "./galleryActionTypes";
import moment from "moment";

const initialState: GalleryState = {
  galleries: [],
};

const galleryReducer = (
  state = initialState,
  action: GalleriesActionTypes
): GalleryState => {
  switch (action.type) {
    case FETCH_GALLERIES:
      return {
        ...state,
        galleries: [
          ...state.galleries,
          {
            galleryId: "1",
            title: "Roma",
            dateCreated: moment(new Date()).subtract("1", "month").toDate(),
            coverUrl: "/img/galleries/box1/main.jpeg",
            description:
              "Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio.",
            tags: [],
            photos: [],
          },
        ],
      };
    default:
      return state;
  }
};

export default galleryReducer;
