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
import HomeShopowner from './pages/shopowner/dashboard/HomeShopowner'
import Checkout from "../src/pages/user/Checkout"
const App = () => {
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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Register />} />
          <Route path="/sellershop" element={<ShopOwnerLayout><HomeShopowner/></ShopOwnerLayout>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/category/:category" element={<UserLayout ><Home /></UserLayout>} />
          <Route path="/" element={<UserLayout ><Home /></UserLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
