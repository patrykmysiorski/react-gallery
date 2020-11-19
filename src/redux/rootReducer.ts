import { combineReducers } from "redux";
import galleryReducer from "./gallery/galleryReducer";

const rootReducer = combineReducers({
  galleryReducer,
});

export default rootReducer;
