import { Button } from "@mui/material";
import React from "react";
import Comanda from "./Comanda";
import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";

import BackButton from "./BackButton";


function MenuComida() {
 
  const { order, addProduct, suma, sumar } = useSetComanda()

  const { comida } = useGetProducts()

 


  return (
    <div className="contenedorBotones">
      
      <Comanda order={order} cuenta={suma}/>
      <section id="desayunoButttons">
        {comida.map((item) => (
        
            <Button
             key={item.id}
             variant="contained"
              margin="large"
              color="secondary"
              onClick={()=>{
                addProduct(item.id, item.name, item.price);
                sumar(item.price)
            }}>
              {item.name} {"$" + item.price}
            </Button>
        
        ))}
      </section>
     
      <BackButton content={'Regresar'}  />
    </div>
  );
}

export default MenuComida;
