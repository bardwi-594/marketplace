import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Components/Product";
import Order from "./Pages/Order";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />

          <Route
            exact
            path="/product/:productid"
            component={Product}
          />
           <Route
            exact
            path="/order"
            component={Order}
          />
          
        </Switch>
      </BrowserRouter>
      </Provider>

  );
}

export default App;

