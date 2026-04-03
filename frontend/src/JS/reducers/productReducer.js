//import

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
    case GET_ONE_PROD:
      return { ...state, isLoadProd: false, prod: payload };

    case FAIL_PROD:
      return { ...state, isLoadProd: false, errors: payload };
    case ADD_PROD:
      return {
        ...state,
        isLoadProd: false,
        products: [...state.products, payload], //rajouter le nouveau produit
      };
    case GET_MY_PRODS:
      return { ...state, isLoadProd: false, myProd: payload };
    case EDIT_PROD:
      return {
        ...state,
        isLoadProd: false,
        products: state.products.map((prod) =>
          prod._id === payload.id ? { ...prod, ...payload.prodEdited } : prod,
        ),
      };
    case DELETE_PROD:
      return {
        ...state,
        isLoadProd: false,
        products: state.products.filter((prod) => prod.id !== payload.id),
      };
    default:
      return state;
  }
};

//export
export default productReducer;
