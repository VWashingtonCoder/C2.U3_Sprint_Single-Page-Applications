import React from "react";

const App = () => {
  return (
    <>
      <div id="container-header">
        <h1>Lambda Eats</h1>
        {/* <link>Home</link>
        <link>PizzaOrder</link> */}
      </div>
      
      <div id="container-image">
        {/* img of pizza */}
        <p>Where Coders Are Our Key Customers</p>
      </div>

      <div id="container-pizzaText">
        <p>We know how hard it can be after a long session of coding.Let's be honest...you're normally starving but the last thing you want to do is cook. Well let us cater to you! Our amazing pizzas and toppings were picked specifically with coders in mind. So send us an order below</p>
      </div>

      <div id="container-order">
        <button>Order Pizza</button>
      </div>

      <div id="container-footer">
        {/* <link>Back to the Top</link> */}
      </div>
    </>
  );
};
export default App;
