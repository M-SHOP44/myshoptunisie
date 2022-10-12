import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
// import Signup from "./pages/Signup.jsx"
// import Signin from "./pages/Signin.jsx"

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green} from "@mui/material/colors";

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
          <Route path="/" element={<UserLayout />} />
          {/* <Route path="/" element={<Signup />} /> */}
          {/* <Route path="/" element={<Signin />} /> */}

        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;