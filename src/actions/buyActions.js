import { BUY_PRODUCT, REMOVE_PRODUCT} from "../types";

export const buyProduct= (product) => (dispatch, getState) => {
    const buyItem = getState().buy.buyItem.slice();
    let itemExists = false;
    buyItem.forEach(item=>{
      if(item) {
        itemExists = true;
      }
    });
    if(!itemExists) {
      buyItem.push({...product, count: 1})
    }
    dispatch({
      type: BUY_PRODUCT,
      payload: { buyItem },
    });
    localStorage.setItem("buyItem", JSON.stringify(buyItem));
  };

  export const removeItem = (product) => (dispatch, getState) => {
     const buyItem = getState().buy.buyItem.slice().filter((item) => item._id !== product._id);
    
     dispatch({ type: REMOVE_PRODUCT, payload: { buyItem } });
    localStorage.setItem("buyItem", JSON.stringify(buyItem));
  };