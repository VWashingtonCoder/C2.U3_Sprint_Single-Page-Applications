import React from "react";

export default function Order ({ order }) {
    

    if (!order) {
        return <h3>Push Us Your Order!</h3>
    }

    return (
        <div className="container-order">
            <h2>Order Commited And Pushed</h2>
            <p>Name: {order.name}</p>
            <p>Pizza Size: {order.size}</p>
            <p>Beef ? {order.beef}</p>
            <p>Chicken ? {order.chicken}</p>
            <p>Banana Peppers ? {order.peppers}</p>
            <p>Pineapple ? {order.pineapple}</p>
            <p>Xtra Cheese ? {order.cheese}</p>
            <p>Special Requests: {order.special}</p>
        </div>
    )
}