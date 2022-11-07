import React from "react";
import { useState, useEffect } from "react";
import IP from "../../../utils/api";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Moment from 'react-moment';


const ListShopowner = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getShopowner();
  }, []);

  const getShopowner = () => {
    axios.get(`${IP}/shopOwner/`).then((response) => {
      setList(response.data);
      console.log(response.data, "sssss ");
    });
  };

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>nameDeLaBoutique</TableCell>
         
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {list.map((shopowner, i) => (
          
          <TableRow key={i}>
              <TableCell>{shopowner.email}</TableCell>
              <TableCell>{shopowner.nameDeLaBoutique}</TableCell>
              <TableCell align="right"><Moment format="YYYY/MM/DD" date={shopowner.createdAt}>{}</Moment></TableCell>
          </TableRow>
        ))}</TableBody>
       

      </Table>
    </>
  );
};

export default ListShopowner;
