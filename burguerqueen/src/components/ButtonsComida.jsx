import { Button } from "@mui/material";
import {purple, pink } from "@mui/material/colors"

import React, { Fragment } from "react";

function ButtonsComida() {

const regresar= ()=>{
  window.location.href='/menu'
}
  return (
    <div >
      <section id="desayunoButttons">  <Button variant="contained" margin="normal" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="primary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="primary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="normal" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="primary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="primary">
        Ejemplo
      </Button>
     
        </section>
        <Button  onClick={regresar}id='regresarMenu' variant="contained" margin="large" color="secondary">
          Regresar
        </Button>
  
    </div>
  );
}

export default ButtonsComida;
