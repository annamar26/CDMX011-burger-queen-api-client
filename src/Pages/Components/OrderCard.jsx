import React, { Fragment } from "react";
import { Paper, TableContainer, TableBody, TableRow, TableCell, TableHead, Table, Card, CardContent, CardActions,Typography,
} from "@mui/material";

import OrdersModal from './OrdersModal'


const OrderCard = ({ array, updateOrder }) => {
  return (
    <Fragment>
      {array.map((item) => (
        <Card className="orden" key={item.id + 1}>
          <CardActions className="orderHeader" align="center">
           <OrdersModal orders={array} item={item} updateOrder={updateOrder}/>
            <Typography
              sx={{ fontSize: 22 }}
              gutterBottom
              align="center"
              color="secondary"
            >
              Orden:#{item.id}
            </Typography>
          </CardActions>
          <CardContent>
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
                  {item.products.map((product, index) => (
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

export default OrderCard;
