import React from "react";

export default function OrderForm(props) {
    const{
        values,
        submit,
        change,
        disabled,
        errors,
    } = props
    
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    
    const onChange = evt => {
        const {name, value, type, checked} = evt.target;
        const useValue = type === "checkbox" ? checked : value;
        change(name, useValue)
    }
    return (
        <form id="pizza-form" onSubmit={onSubmit}>
            <div className="form-group header">
                <h2>It's Pizza Building Time</h2>
                <h3>Fill out your order below</h3>
            </div>
            <div className="form-group errors">
                <div className="txtName">{errors.name}</div>
                <div className="ddSize">{errors.size}</div>
            </div>
            <div className="form-group inputs">
                <div className="form group text-name">
                    <label> Your Name<br/>      
                        <input
                            value={values.name}
                            onChange={onChange}
                            name = "name"
                            type = "text"
                            id = "name-input"
                        />
                    </label>
                </div>
                <div className="form group dropdown">
                    <br/>
                    <label> Pizza Size <br/>
                        <select
                            onChange = {onChange}
                            value = {values.size}
                            name = "size"
                            id = "size-dropdown"
                        >
                            <option value = ""> ---Pick A Size--- </option>
                            <option value = "S"> Small </option>
                            <option value = "M"> Medium </option>
                            <option value = "L"> Large </option>
                            <option value = "XL"> X-Large </option>
                        </select>
                    </label>
                </div>
                <div className="form group checklist" id="checks">
                    <h4>Pick Your Toppings</h4>
                    <label> Beef 
                        <input
                            type = "checkbox"
                            name = "beef"
                            checked = {values.beef}
                            onChange = {onChange}
                        />
                    </label>
                    <label> Chicken
                        <input
                            type = "checkbox"
                            name = "chicken"
                            checked = {values.chicken}
                            onChange = {onChange}
                        />
                    </label>
                    <label> Banana Peppers 
                        <input
                            type = "checkbox"
                            name = "peppers"
                            checked = {values.peppers}
                            onChange = {onChange}
                        />
                    </label>
                    <label> Pineapple
                        <input
                            type = "checkbox"
                            name = "pineapple"
                            checked = {values.pineapple}
                            onChange = {onChange}
                        />
                    </label>
                    <label> Extra Cheese 
                        <input
                            type = "checkbox"
                            name = "cheese"
                            checked = {values.cheese}
                            onChange = {onChange}
                        />
                    </label>
                </div>
                <div className="form group text-special">
                    <label><br/> Any Additional Special Requests:<br/>  
                        <input
                            value={values.special}
                            onChange={onChange}
                            name = "special"
                            type = "text"
                            id = "special-text"
                        />
                    </label>
                </div>
                <div className="form-group submit">
                    <button 
                        id="order-button" 
                        disabled={disabled}
                    >
                        Add to Order
                    </button>
                </div>
            </div>
        </form>
    )
}