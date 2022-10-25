import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import "../App.css";
import IP from '../utils/api'
import { BasketContext } from "../context/BasketContext";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
    <><div>
      <Box role="presentation">
        {basket.map((product, i) => {
          return (
            <>
            <div key={i} className='shop'>

              <div className="image">
              <img src={IP + "/" + product.image} alt=""  className="img"/>
              </div>

            <div className="title">
              <h2 className="h2">{product.title}</h2>
              <h4 className="h4"> Price : {product.price} DTN</h4>
              <div className="counter1">
              <div className="counter">
              <AddIcon onClick={() => buyItem(product)}></AddIcon>
              <Divider orientation="vertical" flexItem />
              <span  className="h5">{product.qty}</span>
              <Divider orientation="vertical" flexItem />
              <RemoveIcon onClick={() => removeItem(product)}></RemoveIcon>
              </div>
              <IconButton onClick={() => remove(product)} aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
            </div>  
          </div>
             
            <Divider  variant="middle" />
            
            </>
            
          );
          
        })}
        <div className="click">
        <button id="clear" onClick={() => clear()}>clear</button>
        <button  id="checkout" >Checkout</button>
        </div>
        
      </Box>
    </div>
    
    </> 
  );
}
