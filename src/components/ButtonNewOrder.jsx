import { Button } from "@mui/material";
import React, { Fragment } from "react";

const ButtonNewOrder = () => {
  return (
    <Fragment>
      <Button
        onClick={() => window.location.reload()}
        id="nuevaOrden"
        variant="contained"
        margin="large"
        color="secondary"
        size="normal"
      >Nueva Orden</Button>
      
    </Fragment>
  );
};

export default ButtonNewOrder;
