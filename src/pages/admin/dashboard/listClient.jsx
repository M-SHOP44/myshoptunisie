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


const ListClient = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getClient();
  }, []);

  const getClient = () => {
    axios.get(`${IP}/client/`).then((response) => {
      setList(response.data);
      // console.log(response.data, "hhhh");
    });
  };

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Usename</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell>lastname</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {list.map((client, i) => (
          
          <TableRow key={i}>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.username}</TableCell>
              <TableCell>{client.firstname}</TableCell>
              <TableCell>{client.lastname}</TableCell>
              <TableCell align="right"><Moment format="YYYY/MM/DD" date={client.createdAt}>{}</Moment></TableCell>
          </TableRow>
        ))}</TableBody>
       

      </Table>
    </>
  );
};

export default ListClient;
