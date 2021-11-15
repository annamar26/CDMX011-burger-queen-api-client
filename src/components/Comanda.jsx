import React from "react";

import {Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import CardContent from '@mui/material/CardContent';



const Comanda = ({content, cuenta}) => {
  return (
    <div>
      <Card id='Comanda'>
        <section id='cliente'>
          <h2>Cliente:</h2>
          <TextField size='small'
          variant='outlined'>

          </TextField>
          
        </section>
        <CardContent>
          <TableContainer>
            <Table  pageSize={5}
        rowsPerPageOptions={[5]} stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell width='80' align='center'>Produto</TableCell>
                  <TableCell width='20'align='center'>Precio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {content.map((item, index) => (
           <TableRow key={index+'a'}>
             <TableCell width='80' align='center' key={index}>{item.product}</TableCell>
             <TableCell width='20' align='center' key={item.id}>{"$"+item.precio}</TableCell>
             </TableRow>
              ))}
            <TableRow id='Cuenta'>
            <TableCell align='right'>Total: </TableCell>
            <TableCell align='right'>$ {cuenta}</TableCell>
            </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
       
      </Card>
    </div>
  )
}



export default Comanda




