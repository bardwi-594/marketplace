import { GET_PRODUCTS} from "../types";

export const getProducts = () => async (dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    dispatch({
        type:  GET_PRODUCTS,
        payload: data,
    })
}