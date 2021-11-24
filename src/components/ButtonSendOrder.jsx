import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { orderToKitchen } from "../lib/axios/axios";


function ButtonSendOrder({ cliente, orden, total, mesero }) {
  const buildOrder = (array, cliente, total, mesero) => {
    if (array.length === 0) {
      throw new Error('La orden no puede estar vacía')
    } else {
      const order = { 
        mesero: mesero,
        cliente: cliente,
        productos: array,
        total: total,
        status: "En preparacion",
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
      };

    return orderToKitchen(order)}
    
  };

  return (
    <Fragment>
      <Button
        onClick={() => {
          buildOrder(orden, cliente, total, mesero);
          window.location.reload()
        }}
        variant="contained"
        margin="large"
        color="secondary"
        size="small"
        id="enviarOrden"
      >
        Order
      </Button>
    </Fragment>
  );
}

export default ButtonSendOrder;
