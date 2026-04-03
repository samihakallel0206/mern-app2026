//nos actions

import {
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  CURRENT_AUTH,
  FAIL_AUTH,
  LOAD_AUTH,
  LOGOUT_AUTH,
  SUCCESS_AUTH,
} from "../actionType/auth.actiontype";
import axios from "axios";
//action se déclenche une fois l'utilisateur submit le form du register
export const register = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_AUTH });
  try {
    //req api backend
    console.log(newUser);
    const result = await axios.post("/api/auth/register", newUser);
    // console.log(result);
    dispatch({ type: SUCCESS_AUTH, payload: result.data });
    navigate("/profile");
  } catch (error) {
    dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
  }
};

//action se déclenche une fois l'utilisateur submit le form du login
export const login = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_AUTH });
  try {
    // console.log(user)
    const result = await axios.post("/api/auth/login", user);
    // console.log(result)
    dispatch({ type: SUCCESS_AUTH, payload: result.data });
    navigate('/profile')
  } catch (error) {
    dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
  }
};

// action qui permet de savoir qui est authentifier
export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_AUTH });
  try {
    //   je récupère le token
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    //   envoie de la requête
    const result = await axios.get("/api/auth/current", config);
    dispatch({ type: CURRENT_AUTH, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
  }
};
//logout: sortir
export const logout = (navigate) => (dispatch) => {
  dispatch({ type: LOGOUT_AUTH });
  navigate('/')
};

export const clearError = () => {
  return {type:CLEAR_ERROR}
  
}
export const clearSuccess = () => {
  return {type:CLEAR_SUCCESS}
  
}