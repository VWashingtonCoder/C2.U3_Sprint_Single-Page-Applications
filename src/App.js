import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { StyledNav, StyledApp } from "./components/themes/Themes";
//components
import Home from "./components/Home"
import OrderFormApp from "./components/OrderFormApp";

const App = () => {
  return (
    <StyledApp className="App">
      <StyledNav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </StyledNav>
          
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/pizza" component={OrderFormApp}/> 

      </Switch> 
      
    </StyledApp>
  );
};
export default App;
