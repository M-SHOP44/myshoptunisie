import * as React from "react";
import { useState, useEffect } from "react";
import Container from "../../../components/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import BasicModal from "../../../components/modal";
import UpdateModal from "../../../components/updateModal";
import axios from "axios";
import IP from "../../../utils/api";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Moment from 'react-moment';

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [elementToUpdate, setElementToUpdate] = React.useState();
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false)
  
  useEffect(() => {
    getProducts();
  }, [refresh]);

  const handleOpen = () => setOpen(true);
  
  const handleUpdate = (productIndex) => {
    setElementToUpdate(products[productIndex]);
    setUpdate(true);
  };

  const getProducts = () => {
    axios.get(`${IP}/product/`).then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  };


const deleteProduct = (id) => {
  axios.delete(`${IP}/product/${id}`).then((response) => {
    console.log(response.data);
    setRefresh(!refresh)
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
  <>
  <Container>
    <BasicModal open={open} handleClose={() => {
      setRefresh(!refresh)
      setOpen(false)
     } } />
      <UpdateModal
        open={update}
        handleClose={() =>{
          setRefresh(!refresh)
           setUpdate(false)}}
        product={elementToUpdate}
      />
    <Button variant="contained" size="medium" onClick={handleOpen}>
      Add product
    </Button>
    <TableContainer component={Paper} mt={15}>
      <Table mt={15} aria-label="simple table">
        <TableHead></TableHead>
        <TableBody>
          {products.map((product, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={IP + "/" + product.image} alt="" width="30%" />
              </TableCell>

              <TableCell align="right">{product.title}</TableCell>
              <TableCell align="right">{product.category?.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right"><Moment format="YYYY/MM/DD" date={product.createdAt}>{}</Moment></TableCell>
              <TableCell align="right">
                <Button
                  onClick={() => {
                    handleUpdate(i);
                  }}
                  className="edit-button"
                  color="info"
                  variant="contained"
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  className="delete-button"
                  onClick={() => {
                    handleClick();
                    deleteProduct(product._id);
              
                  }}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  </Container>
  <div>
  <Snackbar open={opensnack} autoHideDuration={3000} onClose={handleClos}>
        <Alert onClose={handleClos} severity="error" sx={{ width: '100%' }}>
         Deleted successfully!
        </Alert>
    </Snackbar>
  </div>
  </>
);
                }

export default Products;
