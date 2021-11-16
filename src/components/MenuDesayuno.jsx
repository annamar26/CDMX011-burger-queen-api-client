import { Button } from "@mui/material";
import React from "react";
import Comanda from './Comanda'
import useGetSuma from "../hooks/useGetSuma";
import { useSetOrder } from "../hooks/useSetOrder";

import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";
import BackButton from "./BackButton";
import useGetClient from "../hooks/useGetClient";
import { TextField } from "@mui/material";

function MenuDesayuno() {

   const {order, addProduct}= useSetComanda()
  const {desayuno}= useGetProducts()
  const { suma, sumar } = useGetSuma()
  const { orderToKitchen } = useSetOrder()
  const {cliente, obtenerNombre}= useGetClient();
  
 
    return (
    <div className='contenedorBotones'>
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
        <BackButton />
        <Button onClick={()=>{orderToKitchen(order, cliente); console.log(cliente)}}>Order</Button>
     </div>
    );
  }




export default MenuDesayuno;
