import React, { Fragment, useState } from "react";
import OrderToCook from "./OrderToCook";
import Axios from "axios";
import { useGetOrders } from "../hooks/useGetOrders";
function Cocina() {
  const { orders,  getOrders} = useGetOrders();
  const actualizar = async (objeto, id) => {
   
    /* let res= await Axios.post(`http://localhost:4000/orders/${id}`) */
      let res2= Axios.put(`http://localhost:4000/orders/${id}`, objeto) 
        console.log(res2.data)
      
     getOrders()
     
    
       
     
      };
  
       
  return (
    <Fragment>
     
      <div id="orderContainer">
        <OrderToCook orders={orders} actualizar={actualizar} />
      </div>
    </Fragment>
  );
}

export default Cocina;
