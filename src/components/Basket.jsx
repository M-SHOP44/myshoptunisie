import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import "../App.css";
import IP from '../utils/api'
import { BasketContext } from "../context/BasketContext";

export default function Basket() {

  const { basket, setBasket } = React.useContext(BasketContext);
  React.useEffect(() => {
    console.log(basket);
  }, [basket]);

  const buyItem = (item) => {
    let data = [...basket];
    const x = data.find((product) => product._id == item._id);
    if (x) {
      basket.map((product) => {
        if (product._id == item._id) {
          product.qty++;
        }
        return product;
      });
    } else {
      data.push(item);
    }
    setBasket(data);
    localStorage.setItem("basket", JSON.stringify(data));
  };
  const removeItem = (item) => {
    let data = [...basket];

    setBasket(
      data.filter((product) => {
        if (product._id == item._id) {
          product.qty--;
        }
        if (product.qty != 0) return product;
      })
    );
    localStorage.setItem("basket", JSON.stringify(data));
  };
  
const remove = (item) =>{
  let data = [...basket];

    setBasket(
      data.filter((product) => {
        if (product._id != item._id) 
         return product;
      })
    );
    localStorage.setItem("basket", JSON.stringify(data));
}
const clear = () =>{
  setBasket([])
  localStorage.setItem("basket", JSON.stringify([]));
}
  return (
    <div>
      <Box role="presentation">
        {basket.map((product, i) => {
          return (
            <div key={i}>
              <img src= {IP +"/"+ product.image} alt="" width='30%'/>
              <h2>{product.title}</h2>
              <h3 color="red">{product.price}</h3>
              <h5>{product.qty}</h5>
              <button onClick={() => buyItem(product)}>+</button>
              <button onClick={() => removeItem(product)}>-</button>
              <button onClick={() => remove(product)}>remove</button>
              
            </div>
          );
        })}
        <button onClick={() => clear()}>clear</button>
      </Box>
    </div>
  );
}
