import * as React from "react";
import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import axios from "axios";
import IP from "../../utils/api";
import { BasketContext } from "../../context/BasketContext";

export default function Checkout() {
  const { basket, setBasket } = useContext(BasketContext);
  const [formData, setFormData] = useState({
    streetname: "",
    housename: "",
    postcode: "",
    city: "",
    note: "",
    fullname: "",
    email: "",
    phonenumber: "",
  });

  const total = () => {
    return basket.reduce((previous, current) => {
      return previous + parseFloat(current.price) * current.qty;
    }, 0);
  };

  const checkout = () => {
    setFormData({
      ...formData,
      products: basket.map((product, i) => {
        return {
          id: product.id,
          quantity: product.qty,
          category: product.category,
          price: product.price,
        };
      }),
    });
    axios.post(`${IP}/order/create`, formData).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            MyShopTunis
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ display: "flex" }}>
        <Container component="main" maxWidth="md" sx={{ m: 0 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>

            <Typography component="h1" variant="h6">
              I already have an account{" "}
              <Button color="success">
                <Link href="/signin">Sign in</Link>
              </Button>
            </Typography>
            <hr />
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="Street name"
                  fullWidth
                  autoComplete="given-name"
                  variant="outlined"
                  value={formData.streetname}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      streetname: event.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="House name"
                  fullWidth
                  autoComplete="family-name"
                  variant="outlined"
                  value={formData.housename}
                  onChange={(event) => {
                    setFormData({ ...formData, housename: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Postal code"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="outlined"
                  value={formData.postcode}
                  onChange={(event) => {
                    setFormData({ ...formData, postcode: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="address2"
                  name="address2"
                  label="city"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="outlined"
                  value={formData.city}
                  onChange={(event) => {
                    setFormData({ ...formData, city: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="note"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="outlined"
                  value={formData.note}
                  onChange={(event) => {
                    setFormData({ ...formData, note: event.target.value });
                  }}
                />
              </Grid>

              {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
            </Grid>
            <hr />
            <Typography component="h1" variant="h6" align="left">
              Personal information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Full name"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="outlined"
                  value={formData.fullname}
                  onChange={(event) => {
                    setFormData({ ...formData, fullname: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(event) => {
                    setFormData({ ...formData, email: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phone_number"
                  name="phone_number"
                  label="Phone Number"
                  fullWidth
                  autoComplete="phone number"
                  variant="outlined"
                  value={formData.phonenumber}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      phonenumber: event.target.value,
                    });
                  }}
                />
              </Grid>
            </Grid>

            <Button
              color="success"
              variant="contained"
              sx={{ mt: 3 }}
              onClick={checkout}
            >
              Order & Pay
            </Button>
          </Paper>
        </Container>
        <Container maxWidth="sm">
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Box>
            <div className="header-bag">
                        <h3 className="text-header">IN OUR BAG</h3>
                      </div>
                      <hr />
              {basket.map((product, i) => {
                return (
                 
                  <>
                    <div className="container-bag">
                      
                      <div key={i} className="content-bag">
                        <div className="image-product">
                          <img
                            src={IP + "/" + product.image}
                            alt=""
                            className="image-bag"
                          />
                        </div>

                        <div className="content-product">
                          <div className="title-quantity">
                            <h2 className="title-product">{product.title}</h2>
                            <span className="quantity-product">
                              {product.qty}
                            </span>
                          </div>
                          <div className="price-delete">
                            <h4 className="price-cart">{product.price} TND</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <hr />
              <div
               className="total"
              >
              Total:  {total()} TND
              </div>
            </Box>
          </Paper>
        </Container>
      </Container>
    </>
  );
}
