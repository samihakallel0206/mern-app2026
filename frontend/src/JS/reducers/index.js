import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  productReducer,
});

export default rootReducer;
