import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Container from "@mui/material/Container";
import { styled, alpha } from "@mui/material/styles";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BasketContext } from "../context/BasketContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: "5rem",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000">
        MyShopTunisie
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const UserLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  const [basket, setBasket] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("client"));
    const basketData = JSON.parse(localStorage.getItem("basket"));
    const token = localStorage.getItem("token");
    if (userData && token) {
      setUser(userData);
    }
    if (basketData) {
      setBasket(basketData)
    }
  }, []);
  return (
    <BasketContext.Provider value={{ basket , setBasket}} >
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            color="secondary"
            margin={"0px 0px 0px 0px"}
            sx={{ flexGrow: 1 }}
          >
            MyShopTunis
          </Typography>
          <Button
            style={{ hover: "none" }}
            sx={{ flexGrow: 5, justifyContent: "start" }}
            margin={"0"}
          >
            <StorefrontTwoToneIcon color="secondary" />
            <Link
              color="secondary"
              underline="none"
              fontSize={"15px"}
              fontFamily={"'Gill Sans', sans-serif"}
              href="/sell"
            >
              Sell at MyShopTunisie
            </Link>
          </Button>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {user ? (
            <>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Typography color="secondary">{user.username}</Typography>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={()=>setUser(null)}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="secondary" href="/signup">
                Signup
              </Button>
              <Button color="secondary" href="/signin">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Stack direction="row" spacing={5} margin={"0 auto"}>
            <Link href="#" underline="none">
              {"Canapé"}
            </Link>
            <Link href="#" underline="none">
              {"Table"}
            </Link>
            <Link href="#" underline="none">
              {"Chaise"}
            </Link>
            <Link href="#" underline="none">
              {"Lit"}
            </Link>
            <Link href="#" underline="none">
              {"Bibliotheque"}
            </Link>
            <Link href="#" underline="none">
              {"Tapie"}
            </Link>
            <Link href="#" underline="none">
              {"Luminaire"}
            </Link>
            <Link href="#" underline="none">
              {"Bureau"}
            </Link>
          </Stack>
         
        </Toolbar>
      </AppBar>
      <div>{children}</div>
      <Box
        component="footer"
        sx={{
          py: 20,
          px: 2,
          mb: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
    </BasketContext.Provider>
  );
};

export default UserLayout;
