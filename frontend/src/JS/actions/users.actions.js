import axios from "axios";
import {
    DELETE_USER,
  FAIL_USER,
  GET_ALL_USERS,
  GET_ONE_USER,
  LOAD_USER,
} from "../actionType/users.actiontype";
//get ALL
export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/users/all", config);
    dispatch({ type: GET_ALL_USERS, payload: result.data.listUsers });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};

//get One
export const getOneUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get(`/api/users/${id}`, config);
    dispatch({ type: GET_ONE_USER, payload: result.data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};
export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    let config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.delete(`/api/users/${id}`, config);
    dispatch({ type: DELETE_USER, payload: result.data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  }
};