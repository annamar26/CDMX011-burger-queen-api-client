import React, { Fragment } from 'react'
import { Button } from "@mui/material";

function BackButton({content}) {
    const back = () => {
        window.history.back();
      };
    return (
        <Fragment>
             <Button
        onClick={back}
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
