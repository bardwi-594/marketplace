import { GET_PRODUCTS} from "../types";

export const getProducts = () => async (dispatch) => {
   fetch("/api/products")
   .then((res) => res.json())
   .then((data)=>{
       dispatch({ type: GET_PRODUCTS, payload: data})
   })
};

