import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../App.css";
import { BasketContext } from "../context/BasketContext";


export default function Basket() {
var [quantity, setQuantity] = useState(0)

  const [state, setState] = React.useState({
    right: false,
  });

  const { basket, setBasket } = React.useContext(BasketContext);
  React.useEffect(()=>{
    console.log(basket);
  },[basket])

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
const increment = () =>{
  setQuantity(++quantity)
  console.log("hhhahahaha" , quantity)
}
const decrement = () =>{
  setQuantity(++quantity)
}
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} aria-label="Example">
            <ShoppingBasketIcon color="primary" />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
              }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              {basket.map((product, i) => {
                return (
                  <div key={i}>
                    <h2>{product.title}</h2>
                    <h3 color="red">{product.price}</h3>
                    <h5>{quantity}</h5>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                  </div>
                );
              })}
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
