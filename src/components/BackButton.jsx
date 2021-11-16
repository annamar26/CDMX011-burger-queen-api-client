import React, { Fragment } from 'react'
import { Button } from "@mui/material";

function BackButton({content}) {
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
        {content}
      </Button>
        </Fragment>
    )
}

export default BackButton
