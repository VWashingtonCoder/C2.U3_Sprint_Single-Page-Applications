import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup"
//components
import Home from "./components/Home"
import OrderForm from "./components/OrderForm";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1{
    font-size:2.5rem
  }
  div{
    display:flex;
    flex-flow: column wrap;
    font-size: 20px;
  }
  
`
const App = () => {
  
  return (
    <div className="App">
      <StyledNav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </StyledNav>
          
      <Switch>
        <Route path={"/pizza"}>
          <OrderForm></OrderForm>
        </Route> 
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
