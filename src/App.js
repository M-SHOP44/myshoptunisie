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
import DashboardShopowner from './pages/shopowner/dashboard/DashboardShopowner'
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
<<<<<<< HEAD

          {/* <Route path="/" element={<UserLayout ><Home /></UserLayout>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Checkout />} /> */}
          <Route path="/" element={<DashboardShopowner/>}/>
=======
          {/* <Route path="/" element={<UserLayout />} /> */}
          {/* <Route path="/" element={<MultiActiCard />} /> */}
          {/* <Route path="/" element={<Signup />} /> */}
          {/* <Route path="/" element={<Signin />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Checkout />} />
>>>>>>> 02d76aa86fe59fb45d93cf86f7853063879e4517

        </Routes>
      </Router>
    </ThemeProvider>
    </BasketContext.Provider>
  );
};

export default App;
