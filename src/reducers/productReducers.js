import { GET_PRODUCTS} from "../types";

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_PRODUCTS:
        return { lists: action.payload,  productLists: action.payload };
      default:
        return state;
  }
};