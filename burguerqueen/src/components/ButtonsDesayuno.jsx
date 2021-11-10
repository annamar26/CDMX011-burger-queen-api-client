import { Button } from "@mui/material";
import { spacing } from "@mui/system";
import axios from "axios";

import React, { Fragment } from "react";

function ButtonsDesayuno() {
  /*  async function axiosValidate(url) {
        await axios.get(url)
            .then((response) => {  product.push(response.product) }
             
          )
            .catch((error) => {
              product.push(error.response.code) 
                
            });
       return product } */
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
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
      <Button variant="contained" margin="large" color="secondary">
        Ejemplo
      </Button>
     
        </section>
        <Button  onClick={regresar}id='regresarMenu' variant="contained" margin="large" color="secondary">
          Regresar
        </Button>
  
    </div>
  );
}

export default ButtonsDesayuno;
