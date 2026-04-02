//import

import {
  FAIL_PROD,
  GET_ALL_PRODS,
  LOAD_PROD,
} from "../actionType/product.actionType";

// initialState
const initialState = {
  isLoadProd: false,
  errors: null,
  products: [],
  prod: {},
  myProd: [],
};

// pure function
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PROD:
      return { ...state, isLoadProd: true };

    case GET_ALL_PRODS:
      return { ...state, isLoadProd: false, products: payload };
    case FAIL_PROD:
      return { ...state, isLoadProd: false, errors: payload };

    default:
      return state;
  }
};

//export
export default productReducer;
