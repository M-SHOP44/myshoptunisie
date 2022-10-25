import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import "../App.css";
import IP from "../utils/api";
import { BasketContext } from "../context/BasketContext";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";

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

  const remove = (item) => {
    let data = [...basket];

    setBasket(
      data.filter((product) => {
        if (product._id != item._id) return product;
      })
    );
    localStorage.setItem("basket", JSON.stringify(data));
  };
  const clear = () => {
    setBasket([]);
    localStorage.setItem("basket", JSON.stringify([]));
  };
  const total = () => {
    return basket.reduce((previous,current)=>{
      return previous + ( parseFloat(current.price) * current.qty )
    },0)
  }
  return (
    <>
      <div>
        <Box role="presentation">
          {basket.map((product, i) => {
            return (
              <>
                <div key={i} className="container-cart">
                  <div className="left-side">
                    <img
                      src={IP + "/" + product.image}
                      alt=""
                      
                    />
                  </div>

                  <div className="right-side">
                    <h2 className="title-cart">{product.title}</h2>
                    <div className="price-delete">
                    <h4 className="price-cart">{product.price} DTN</h4>
                    <IconButton
                        onClick={() => remove(product)}
                        aria-label="delete"
                        size="small"
                        className="delete-icon"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </div>
                   
                    <div className="counter1">
                      <div className="counter">
                        <AddIcon onClick={() => buyItem(product)}></AddIcon>
                        <Divider orientation="vertical" flexItem />
                        <span className="h5">{product.qty}</span>
                        <Divider orientation="vertical" flexItem />
                        <RemoveIcon
                          onClick={() => removeItem(product)}
                        ></RemoveIcon>
                      </div>
                    </div>
                  </div>
                </div>
               
                <Divider variant="middle" />
             
              </>
            );
          })}
             <div className="total">
              <div>
              <h3>Total:</h3>
              </div>
              <div>
              <h5>{total()}</h5>
              </div>
                    
                    
                </div>
          <div className="click">
            <Button variant="contained"  onClick={() => clear()}>
              clear
            </Button>
            <Button variant="contained" >Checkout</Button>
          </div>
        </Box>
      </div>
    </>
  );
}
