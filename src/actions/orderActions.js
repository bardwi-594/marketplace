import { CREATE_ORDER, GET_ORDER , CLEAR_BUY, REMOVE_ORDER} from "../types";


export const ordersHandler = (order) => (dispatch) => {
  fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_ORDER, payload: data });
      localStorage.clear("buyItem");
      dispatch({ type: CLEAR_BUY });
    });
};
  
  
export const getOrders = () => (dispatch) => {
  fetch("/api/orders")
    .then((res) => res.json())
    .then((data) => {
     dispatch({ type: GET_ORDER, payload: data });
    });
};

export const removeOrder = () => (dispatch) => {
    dispatch({ type: REMOVE_ORDER });
};
  