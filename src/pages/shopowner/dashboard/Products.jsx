import * as React from 'react';
import Container from '../../../components/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '../../../components/modal'
import BasicModal from '../../../components/modal';
const Products = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      const rows = [
        createData('bibliotheque', 159, 6.0, 24, 4.0),
     
      ];
      

  return (
   <Container>
    <BasicModal open={open} handleClose={()=> setOpen(false)} />
    <TableContainer component={Paper} mt={15}>
      <Table mt={15}  aria-label="simple table">
        <TableHead>
          <TableRow>
           <Button onClick={handleOpen}>Add product</Button>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Container>
  )
}

export default Products