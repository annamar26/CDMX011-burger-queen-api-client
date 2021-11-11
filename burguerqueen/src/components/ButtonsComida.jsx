import { Button } from "@mui/material";
import Comanda from "./Comanda"

import React, { Fragment } from "react";

function ButtonsComida() {

const regresar= ()=>{
  window.location.href='/menu'
}
  return (
    <div className='contenedorBotones' ><Comanda  />
      <section id="desayunoButttons">  <Button variant="contained" margin="normal" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="normal" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
     
        </section>
        <Button  onClick={regresar}id='regresarMenu2' variant="contained" margin="large" color="secondary">
          Regresar
        </Button>
  
    </div>
  );
}

export default ButtonsComida;
