import { CREATE_ORDER, GET_ORDER ,REMOVE_ORDER} from "../types";

const ordersReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    case GET_ORDER:
      return { orders: action.payload };
    case REMOVE_ORDER:
      return { order: null };
    
    default:
      return state;
  }
};
export { ordersReducer };