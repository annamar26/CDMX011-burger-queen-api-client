import React, { Fragment } from "react";
import {
  Paper,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
 
  Table,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useGetOrders } from "../hooks/useGetOrders";
import Axios from 'axios'

const OrderToCook = ({ orders }) => {
const {setOrders} = useGetOrders()
  const actualizar = (id) => {
    const newOrder = orders.map((item) => {
      if (item.id === id) {
        return { ...item, status: 'Listo' };
      }
      return item;
    });
  
  setOrders([...orders,{newOrder}])
  let res = Axios.post("http://localhost:4000/orders", 
      {orders}
    );

    let data = res.data;
    console.log(data);
  
  };
   
 
  return (
    <Fragment>
      {orders.map((item, index) => (
        <Card id='orden' key={item.id + 1}>
            
              <CardActions id='orderHeader'align='center'>
              <Button  variant="contained"
              onClick={()=>{actualizar(item.id)}}
        margin="large"
        color="secondary"
        size='small'>Orden Lista</Button>
           
        
            <Typography
              sx={{ fontSize: 22 }}
              gutterBottom
              align='center'
              color='secondary'
            >
              Orden:#{item.id}
            </Typography>   </CardActions>  <CardContent>
            <TableContainer component={Paper}>
           
              <Table size="small" aria-label="a dense table">
                <TableHead
                  sx={{ maxWidth: 100 }}
                  fontSize="large"
                  color="primary"
                  id="tableHeader"
                >
                  <TableRow align="center" width="100" fontSize="large">
                    <TableCell width="5" align="center">
                      Cantidad
                    </TableCell>
                    <TableCell width="95" align="center">
                      Produto
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {item.productos.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell width="5" align="center">
                        {product.quantity}
                      </TableCell>
                      <TableCell width="95" align="center">
                        {product.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        
          </CardContent>
        </Card>
      ))}
    </Fragment>
  );
};

export default OrderToCook;
