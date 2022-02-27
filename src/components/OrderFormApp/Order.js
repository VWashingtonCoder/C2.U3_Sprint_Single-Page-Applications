import React from "react";

export default function Order ({props}) {
    console.log(props)
    return (
        <div className="container-order">
            <h2>Order Commited And Pushed</h2>
            <p>Name: {props.name}</p>
            <p>Pizza Size: {props.size}</p>
            <p>Beef: 
                {props.toppings.includes("beef") ? " X" : " None"}
            </p>
            <p>Chicken: 
                {props.toppings.includes("chicken") ? " X" : " None"}
            </p>
            <p>Banana Peppers: 
                {props.toppings.includes("peppers") ? " X" : " None"}
            </p>
            <p>Pineapple: 
                {props.toppings.includes("pineapple") ? " X" : " None"}
            </p>
            <p>Extra Cheese: 
                {props.toppings.includes("cheese") ? " X" : " None"}</p>
            <p>Special Requests: 
                {props.special === "" ?
                " None" : props.special}
            </p>
        </div>
    )
}