import { combineReducers } from "redux";
import galleryReducer from "./gallery/galleryReducer";

const rootReducer = combineReducers({
  galleryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
