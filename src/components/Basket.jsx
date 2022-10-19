import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../App.css";
import { BasketContext } from "../context/BasketContext";
import FolderList from "./cart";

export default function   Basket() {
  const [state, setState] = React.useState({
    right: false,
  });

  const { products, setProducts } = React.useContext(BasketContext);
  React.useEffect(()=>{
    console.log(products);
  },[products])

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

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
                width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
              }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
            <div className="cart">
            <h1>Shopping Cart</h1>
            </div> 
            <FolderList/>
              {products.map((product, i) => {
                return (
                  <div key={i}>
                    <span></span>
                    <h2>{product.title}</h2>
                    <h3>{product.price}</h3>
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
