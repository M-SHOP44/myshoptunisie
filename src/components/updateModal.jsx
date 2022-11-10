import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import axios from "axios";
import IP from "../utils/api";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const UpdateModal = ({ handleClose, product, open }) => {
  const [formData, setFormData] = useState(
    product
      ? {
          category: product.category,
          title: product.title,
          description: product.description,
          image: product.image,
          price: product.price,
        }
      : {}
  );

  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios.get(`${IP}/category/approved`).then((response) => {
      setCategory(response.data);
      console.log(category);
    });
  }
  const updateProduct = () => {
    axios.put(`${IP}/product/${product._id}`, formData).then((response) => {
      console.log(response.data);
      handleClose();
      setOpensnack(true);
    });
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setOpensnack(true);
  };
  const handleClos = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpensnack(false);
  };

  const [opensnack, setOpensnack] = React.useState(false);

  return (
    <div>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Title"
              name="title"
              autoComplete="text"
              autoFocus
              value={formData.title}
              onChange={(event) => {
                setFormData({ ...formData, title: event.target.value });
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="category"
                value={formData.category}
                onChange={(event) => {
                  setFormData({ ...formData, category: event.target.value });
                }}
              >
                {category.map((item, i) => (
                  <MenuItem value={item._id}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              name="description"
              label="Description"
              type="text"
              id="description"
              autoComplete="current-description"
              value={formData.description}
              onChange={(event) => {
                setFormData({ ...formData, description: event.target.value });
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="TND"
              type="text"
              id="price"
              autoComplete="current-category"
              value={formData.price}
              onChange={(event) => {
                setFormData({ ...formData, price: event.target.value });
              }}
            />

            <Input
              margin="normal"
              required
              fullWidth
              name="category"
              label="image"
              type="file"
              id="category"
              autoComplete="current-category"
              onChange={(event) => {
                setFormData({ ...formData, image: event.target.files[0] });
              }}
            />

            <Button
              type="submit"
              onClick={() => {
                handleClick();
                updateProduct();
              }}
              variant="contained"
              sx={{ mt: 3, mb: 2, ml: 40 }}
            >
              Update
            </Button>
          </Box>
        </Modal>
      )}

      <Snackbar open={opensnack} autoHideDuration={3000} onClose={handleClos}>
        <Alert onClose={handleClos} severity="info" sx={{ width: "100%" }}>
          Updated successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UpdateModal;
