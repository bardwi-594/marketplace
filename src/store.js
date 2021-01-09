import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducers";
import { buyReducer } from "./reducers/buyReducers";
import { ordersReducer } from "./reducers/ordersReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
    buy: buyReducer,
    order: ordersReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;