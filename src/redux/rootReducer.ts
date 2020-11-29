import { combineReducers } from "redux";
import galleryReducer from "./gallery/galleryReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  galleryReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
