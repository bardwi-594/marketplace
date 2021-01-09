import { BUY_PRODUCT, REMOVE_PRODUCT} from "../types";

export const buyReducer = (
    state = { buyItem: JSON.parse(localStorage.getItem("buyItem") || "[]") },
    action
  ) => {
    switch (action.type) {
      case BUY_PRODUCT:
        return { buyItem: action.payload.buyItem };
      case REMOVE_PRODUCT:
        return { buyItem: action.payload.buyItem };
      default:
        return state;
  }
};