import React, { Fragment } from 'react'
import { Button } from "@mui/material";

function BackButton() {
    const regresar = () => {
        window.history.back();
      };
    return (
        <Fragment>
             <Button
        onClick={regresar}
        id="regresarMenu2"
        variant="contained"
        margin="large"
        color="secondary"
        size='small'
      >
        Regresar
      </Button>
        </Fragment>
    )
}

export default BackButton
