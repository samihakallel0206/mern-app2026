import {
  ADD_PROD,
  DELETE_PROD,
  EDIT_PROD,
  FAIL_PROD,
  GET_ALL_PRODS,
  GET_MY_PRODS,
  GET_ONE_PROD,
  LOAD_PROD,
} from "../actionType/product.actionType";
import axios from "axios";

export const getALLProducts = () => async (dispatch) => {
  dispatch({ type: LOAD_PROD });
  try {
    const result = await axios.get("/api/products/allProd");
    dispatch({ type: GET_ALL_PRODS, payload: result.data.listProd });
  } catch (error) {
    dispatch({ type: FAIL_PROD, payload: error.response.data });
  }
};

export const getOneProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PROD });
  try {
    // console.log(id)
    const result = await axios.get(`/api/products/prod/${id}`);
    // console.log(result)
    dispatch({ type: GET_ONE_PROD, payload: result.data.prodToGet });
  } catch (error) {
    dispatch({ type: FAIL_PROD, payload: error.response.data });
  }
};

export const addProduct = (newProd) => async (dispatch) => {
  dispatch({ type: LOAD_PROD });
  // console.log(newProd)
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.post("/api/products/addProd", newProd, config);

    //parler avec une api
    // console.log(result.data)
    dispatch({ type: ADD_PROD, payload: result.data.newProd });
  } catch (error) {
    dispatch({ type: FAIL_PROD, payload: error.response.data });
  }
};
export const getMyProd = () => async (dispatch) => {
  dispatch({ type: LOAD_PROD });

  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/products/me", config);

    dispatch({ type: GET_MY_PRODS, payload: result.data.maListProd });
  } catch (error) {
    dispatch({ type: FAIL_PROD, payload: error.response.data });
  }
};

export const editProd = (id, prodEdited) => async (dispatch) => {
  dispatch({ type: LOAD_PROD });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.put(`/api/products/${id}`, prodEdited, config);
    dispatch({ type: EDIT_PROD, payload: result.data });
     dispatch(getMyProd());
  } catch (error) {
    dispatch({ type: FAIL_PROD, payload: error.response.data });
  }
};

export const deleteProd = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PROD });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.delete(`/api/products/${id}`, config);
    dispatch({ type: DELETE_PROD, payload: result.data.prodToFind });
    dispatch(getMyProd())
  } catch (error) {
    dispatch({ type: FAIL_PROD, payload: error.response.data });
  }
};
