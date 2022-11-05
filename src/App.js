import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import Signup from "./pages/user/Signup"
import Signin from "./pages/user/Signin"
import Home from "./pages/user/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, green} from "@mui/material/colors";
import Login from "../src/pages/shopowner/register/Login"
import Register from "./pages/shopowner/register/Register"
import ShopOwnerLayout from './layout/ShopOwnerLayout'
//import HomeShopowner from './pages/shopowner/dashboard/HomeShopowner'
import Checkout from "../src/pages/user/Checkout"
import { BasketContext } from "./context/BasketContext";

const App = () => {
  const [basket, setBasket] = React.useState([]);

  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: '#fff',
       
      },
    }
  });

  React.useEffect(() => {
    const basketData = JSON.parse(localStorage.getItem("basket"));
    if (basketData) {
      setBasket(basketData)
    }
  }, []);
  return (
    <BasketContext.Provider value={{ basket , setBasket}} >
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Register />} />
          <Route path="/sellershop" element={<ShopOwnerLayout></ShopOwnerLayout>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/category/:category" element={<UserLayout ><Home /></UserLayout>} />
          <Route path="/" element={<UserLayout ><Home /></UserLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
    </BasketContext.Provider>

  );
};

export default App;
