import {
  ADD_PROD,
  FAIL_PROD,
  GET_ALL_PRODS,
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
