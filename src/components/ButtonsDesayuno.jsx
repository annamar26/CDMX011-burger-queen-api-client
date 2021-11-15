import { Button } from "@mui/material";
import React  from "react";
import Comanda from './Comanda'
import { useProductsList } from "../hooks/useProductsList";
function ButtonsDesayuno() {
  const regresar= ()=>{
    window.location.href='/menu'
  }
   const {desayuno}= useProductsList()
  
    return (
    <div className='contenedorBotones'><Comanda  />
        <section id="desayunoButttons">
          {desayuno.map((item) => (
            <div key={item.id}>
              <Button variant="contained" margin="normal" color="secondary">
        {item.name} {'$'+ item.price}
      </Button>
              
            </div>
          ))}
        </section>
        <Button  onClick={regresar}id='regresarMenu' variant="contained" margin="large" color="secondary">
          Regresar
        </Button>
     </div>
    );
  }




export default ButtonsDesayuno;
