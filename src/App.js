import React from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
//components
import Home from "./components/Home"

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
          
      <Switch>
        {/* <Route path={"/pizza"}>
          {/* <OrderForm></OrderForm> */}
        {/* </Route>  */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
