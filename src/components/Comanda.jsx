import React, { useState } from "react";
import { TablePagination, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import useGetClient from '../hooks/useGetClient'





const Comanda = ({content, cuenta}) => {
  



 /*  const columns = [
  { field: 'product', headerName: 'Producto', width: 130 },
  { field: 'price', headerName: 'Precio', width: 70 },
 
];
const rows = [
  content.map((item, index) => (
  { id:index+'a', product: item.product, price: item.price }
  ))
];
return (
<div style={{ height: 400, width: '100%' }}>
<DataGrid
  rows={rows}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
 
/>
</div>
); */


    return( <div>
      <Card id='Comanda'>
        
        <CardContent>
          <TableContainer>
            <Table stickyHeader aria-label='a dense table'>
              <TableHead color='primary' id='tableHeader'>
                <TableRow>
                  <TableCell width='80' align='center'>Produto</TableCell>
                  <TableCell width='20'align='center'>Precio</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {content.map((item, index) => (
           <TableRow key={index+'a'}>
             <TableCell width='80' align='center' key={index}>{item.product}</TableCell>
             {/* <TableCell width='10' align='center' key={index+2}><img alt='' src={iconoNotPassword}/></TableCell> */}
             <TableCell width='20' align='center' key={item.id}>{"$"+item.precio}</TableCell>
             </TableRow>
              ))}
           
              </TableBody>
            </Table>
            
          </TableContainer>
          
        </CardContent>
      </Card><section id='Total'>
          <h2>Total</h2>
          <h3>$ {cuenta}

          </h3>
          
        </section>
       
    </div>)

}



export default Comanda





