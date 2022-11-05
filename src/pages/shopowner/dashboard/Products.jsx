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
import { Await } from "react-router-dom";

const Products = () => {
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [elementToUpdate, setElementToUpdate] = React.useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);


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
  
   
  const deleteProduct = (id) =>{
    axios.delete(`${IP}/product/${id}`).then((response) =>{
      console.log(response.data);
    })
  }

  return (
    <Container>
      <BasicModal open={open} handleClose={() => setOpen(false)} />
      {update && <UpdateModal
        handleClose={() => setUpdate(false)}
        product={elementToUpdate}
      />}
      <Button variant="contained" size="medium" onClick={handleOpen} >Add product</Button>
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
                <TableCell align="right">{product.category}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.description}</TableCell>
                <TableCell align="right">{product.createdAt}</TableCell>
                <TableCell align="right">
                  <button
                    onClick={() => {
                      handleUpdate(i);
                    }}
                    className="edit-button"
                   
                  >
                    Edit
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                  className="delete-button"
                   onClick={() => {
                     console.log(product._id);
                     deleteProduct(product._id)}}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Products;
