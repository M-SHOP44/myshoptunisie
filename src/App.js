import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import Signup from "./pages/user/Signup"
import Signin from "./pages/user/Signin"
import Home from "./pages/user/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green} from "@mui/material/colors";
import { BasketContext } from "./context/BasketContext";
import Login from "../src/pages/shopowner/register/Login"
import Checkout from "../src/pages/shopowner/register/Checkout"
import DashboardShopowner from './pages/shopowner/dashboard/HomeShopowner'
const App = () => {
  const [products, setProducts] = React.useState([]);
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
    <BasketContext.Provider value={{ products , setProducts}} >
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout ><Home /></UserLayout>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Checkout />} />
          <Route path="/sellershop" element={<DashboardShopowner/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
    </BasketContext.Provider>
  );
};

export default App;
