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
    return basket.reduce((previous, current) => {
      return previous + parseFloat(current.price) * current.qty;
    }, 0);
  };
  const totalunitaire = () => {
    return;
  };
  return (
    <>
      <div>
        <Box role="presentation">
          {basket.map((product, i) => {
            return (
              <>
                <div key={i} className="container-cart">
                  <div className="left-side">
                    <img src={IP + "/" + product.image} alt="" />
                  </div>

                  <div className="right-side">
                    <h2 className="title-cart">{product.title}</h2>
                    <div className="price-delete">
                      <h4 className="price-cart">{product.price} TND</h4>
                      <IconButton
                        onClick={() => remove(product)}
                        aria-label="delete"
                        size="small"
                        className="delete-icon"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </div>

                    <div className="row1">
                      <div className="container-quantity">
                        <RemoveIcon className="minus" style={{fontSize:'small'}}></RemoveIcon>
                        <div className="quan">
                        <span className="quantity">{product.qty}</span>
                        </div>
                        <AddIcon className="plus" style={{fontSize:'small'}}></AddIcon>
                      </div>
                      <div className="totalone">
                        <span id="span">
                          Total:{" "}
                          <span style={{ fontWeight: "bold" }}>
                            {product.price * product.qty}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Divider variant="middle" />
              </>
            );
          })}

          <div className="span2">
            <div className="tot">
            Total:
            </div>
            <div
              style={{ fontWeight: "bold", color: "#fa6338", fontSize: "18px" }}
            >
              {total()} TND
            </div>
          </div>
          <div className="click">
            <Button
              style={{color:'white', backgroundColor:'success'}}
              className="clear"
              variant="contained"
              onClick={() => clear()}
            >
              clear
            </Button>
            <Button style={{color:'white'}} variant="contained" href="/checkout">Checkout</Button>
          </div>
        </Box>
      </div>
    </>
  );
}


// <div className="counter">
//                         <RemoveIcon
//                           className="addicon"
//                           style={{
//                             maxWidth: "15px",
                            
//                             fontWeight: "bold",
//                             cursor: "pointer",
//                             color: "#505050",
                            
//                           }}
//                           onClick={() => removeItem(product)}
//                         ></RemoveIcon>
//                         <Divider orientation="vertical" flexItem />
//                         <span
//                           className="paddingSpan"
//                           style={{ padding: "0px 10px" }}
//                         >
//                           {product.qty}
//                         </span>
//                         <Divider orientation="vertical" flexItem />
//                         <AddIcon
//                           className="addicon"
//                           style={{
//                             maxWidth: "15px",
                            
//                             fontWeight: "bold",
//                             cursor: "pointer",
//                             color: "#505050",
//                           }}
//                           onClick={() => buyItem(product)}
//                         ></AddIcon>
//                       </div>