import { Button } from "@mui/material";
import React, { Fragment } from "react";
import Axios from "axios";

function ButtonEnviarOrden({ cliente, orden, total, mesero }) {
  const orderToKitchen = async (array, cliente, total, mesero) => {
    if (array.length === 0) {
      alert("Tu orden esta vacía");
    } else {
      let res = await Axios.post("http://localhost:4000/orders", {
        mesero: mesero,
        cliente: cliente,
        productos: array,
        total: total,
        status: "En preparacion",
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
      });

      let data = res.data;
      console.log(data);
    }
  };

  return (
    <Fragment>
      <Button
        onClick={() => {
          orderToKitchen(orden, cliente, total, mesero);
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

export default ButtonEnviarOrden;
