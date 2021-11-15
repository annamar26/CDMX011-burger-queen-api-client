import { Button } from "@mui/material";
import React from "react";
import Comanda from './Comanda'
import useGetSuma from "../hooks/useGetSuma";

import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";
function MenuDesayuno() {
  const regresar= ()=>{
    window.location.href='/menu'
  }
  const {order, addProduct}= useSetComanda()
  const {desayuno}= useGetProducts()
  const { suma, sumar } = useGetSuma()
 
    return (
    <div className='contenedorBotones'><Comanda content={order} cuenta={suma}/>
        <section id="desayunoButttons">
          {desayuno.map((item) => (
            <div key={item.id}>
              <Button variant="contained" margin="normal" color="secondary"
              onClick={()=>{
                addProduct(item.name, item.price);
                sumar(item.price)
            }}
              >
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




export default MenuDesayuno;
