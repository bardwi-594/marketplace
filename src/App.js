import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
function App() {
  return (
   
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
          
          
        </Switch>
      </BrowserRouter>

  );
}

export default App;

