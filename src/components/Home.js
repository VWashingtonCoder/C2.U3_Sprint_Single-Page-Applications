import React from "react"
import { useHistory } from "react-router-dom";
import { StyledHome } from "./themes/Themes";
import pizzaSlices from "../images/pizzaSlices.jpg"


export default function Home () {
    const history = useHistory();

    const routeToForm = () => {
        history.push("/pizza");
    }

    return (
        <StyledHome className = "home-wrapper">
            <h2>Place Your Git Pizza Request Now</h2>
            <p>
                We know how hard it can be after a long session of coding. Let's be honest...you're normally starving but the last thing you want to do is cook. Well let us cater to you! Our amazing pizzas and toppings were picked specifically with coders in mind.
            </p>
            <button 
                onClick={routeToForm}
                id="order-pizza"
            >
                Order Now!
            </button>
            <img
                src= {pizzaSlices}
                alt="pizza-slices"
            />
        </StyledHome>
    )
}