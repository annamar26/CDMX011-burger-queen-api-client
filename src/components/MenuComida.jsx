import { Button } from "@mui/material";
import React, { useState } from "react";
import Comanda from "./Comanda";
import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";
import useGetSuma from "../hooks/useGetSuma";
import BackButton from "./BackButton";
import ButtonEnviarOrden from "./ButtonEnviarOrden";

import { TextField } from "@mui/material";
import useGetClient from "../hooks/useGetClient";

function MenuComida() {
 
  const { order, addProduct } = useSetComanda()

  const { comida } = useGetProducts()
  const { suma, sumar } = useGetSuma()
  const {cliente, obtenerNombre}= useGetClient()
 


  return (
    <div className="contenedorBotones">
      <section id='cliente'>
          <h2>Cliente:</h2>
          <TextField  id='clientName' size='small'
          variant='outlined'
          color='secondary'
          onChange={(e) => obtenerNombre(e.target.value)}
          
      
          >

          </TextField>
          
        </section>
      <Comanda content={order} cuenta={suma} cliente={cliente}/>
      <section id="desayunoButttons">
        {comida.map((item) => (
        
            <Button
             key={item.id}
             variant="contained"
              margin="large"
              color="secondary"
              onClick={()=>{
                addProduct(item.name, item.price);
                sumar(item.price)
            }}>
              {item.name} {"$" + item.price}
            </Button>
        
        ))}
      </section>
      <ButtonEnviarOrden />
      <BackButton content={'Regresar'} />
    </div>
  );
}

export default MenuComida;
