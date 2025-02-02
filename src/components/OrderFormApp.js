import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { StyledOrderForm } from "./themes/Themes";
//components
import Order from "./OrderFormApp/Order"
import OrderForm from "./OrderFormApp/OrderForm"
import formSchema from "./OrderFormApp/FormSchema"
import { initialFormValues, initialFormErrors, initialOrder, initialDisabled } from "./OrderFormApp/Data" 

function OrderFormApp(){
  /* States */
  const [orderInfo, setOrderInfo] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  /* Post */
  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
    .then(res => {
      setOrderInfo(res.data, ...orderInfo)
      setFormValues(initialFormValues);
    })
    .catch(err => console.error(err));
  }
  /* Event Handlers */
  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }
  
  const formSubmit = () => {
    const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size.trim(),
        toppings: ['beef', 'chicken', 'peppers', 'pineapple', 'cheese'].filter(topping => !!formValues[topping]),
        special: formValues.special.trim()
      }
      postNewOrder(newOrder);
    }
  /* Side Effect*/
    useEffect(() => {
      formSchema.isValid(formValues).then(valid=> setDisabled(!valid))
    }, [formValues])

   

  return(
      <StyledOrderForm className="container-pizza">
        <OrderForm
          id="pizza-form"
          values={formValues}
          submit={formSubmit}
          change={inputChange}
          disabled={disabled}
          errors={formErrors}
        />
        {orderInfo === initialOrder ? 
          <h3>Push Us Your Order!</h3> : <Order props={orderInfo} />       
        }
      </StyledOrderForm>
  )
};

export default OrderFormApp;
