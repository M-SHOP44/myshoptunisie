import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import Signup from "./pages/Signup.jsx"
import Signin from "./pages/Signin.jsx"
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green} from "@mui/material/colors";
import { BasketContext } from "./context/BasketContext";

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

        </Routes>
      </Router>
    </ThemeProvider>
    </BasketContext.Provider>
  );
};

export default App;
