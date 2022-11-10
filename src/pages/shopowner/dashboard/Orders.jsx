import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import IP from "../../../utils/api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Moment from 'react-moment';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    axios.get(`${IP}/order/`).then((response) => {
      setOrders(response.data);
      console.log(response.data);
    });
  };
  const total = (products) => {
    return products.reduce((previous, current) => {
      return previous + parseFloat(current.price) * current.quantity;
    }, 0);
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Orders</TableCell>
            
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      {orders.map((order, i) => (
        <div key={i}>
          <Accordion>
            <AccordionSummary  >
              <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
              <Typography >{order.fullname}</Typography>
             <Typography  ><Moment format="YYYY/MM/DD" date={order.createdAt}>{}</Moment></Typography> 
             </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow key={i} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    
                    <TableCell align="right">Product</TableCell>
                    <TableCell align="right">quantity</TableCell>
                    <TableCell align="right">Total</TableCell>
                    
                  </TableRow>
                </TableHead>
                {order.products.map((product, i) => (
                  <TableBody >
                    <TableRow
                      
                    >
                      <TableCell align="right">{product.category}</TableCell>
                      <TableCell align="right">{product.quantity}</TableCell>
                      <TableCell align="right">{product.price*product.quantity}</TableCell>
                      
                     
                    </TableRow>
                  </TableBody>
                ))}
                <TableRow>
                    <TableCell colSpan={3} align="right">
                        Total:
                        {total(order.products)}
                    </TableCell>
                </TableRow>
              </Table>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </TableContainer>
  );
}
