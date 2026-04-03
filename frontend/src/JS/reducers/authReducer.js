//import
import { clearSuccess } from "../actions/auth.actions";
import {
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  CURRENT_AUTH,
  FAIL_AUTH,
  LOAD_AUTH,
  LOGOUT_AUTH,
  SUCCESS_AUTH,
} from "../actionType/auth.actiontype";

//initialState
const initailState = {
  isLoad: false,
  user: {},
  errors: [],
  success: [],
  isAuth: false,
};

//pure function
const authReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case LOAD_AUTH:
      return { ...state, isLoad: true };
    case SUCCESS_AUTH:
      localStorage.setItem("token", payload.token); //je récupère le token et je le met dans le navigateur
      return {
        ...state,
        isLoad: false, //j'arrete l'attente
        user: payload.user, //user auth
        success: payload.success, //message de succes
        isAuth: true,
      };
    case FAIL_AUTH:
      return { ...state, isLoad: false, errors: payload };
    case CURRENT_AUTH:
      return {
        ...state,
        isLoad: false, //j'arrete l'attente
        user: payload, //user auth
        isAuth: true,
      };
    case LOGOUT_AUTH:
      localStorage.removeItem("token");
      return {
        isLoad: false,
        user: {},
        errors: [],
        success: [],
        isAuth: false,
      };
    case CLEAR_ERROR:
      return { ...state, errors: [] };
    case CLEAR_SUCCESS:
      return { ...state, success: [] };
    default:
      return state;
  }
};

//export
export default authReducer;
