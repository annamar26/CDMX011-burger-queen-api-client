import React, { Fragment } from "react";
import OrderToCook from "./OrderToCook";
import Axios from "axios";
import { useGetOrders } from "../hooks/useGetOrders";
function OrdersPage({orders, header}) {
  const { getOrders} = useGetOrders();
  const actualizar = async (objeto, id) => {
   
    /* let res= await Axios.post(`http://localhost:4000/orders/${id}`) */
      let res2= Axios.put(`http://localhost:4000/orders/${id}`, objeto) 
        console.log(res2.data)
      
     getOrders()
     
    
       
     
      };
      

  return (
    <Fragment>
     <h2 width='100' align='center'>{header}</h2>
      <div id="orderContainer">
        
        <OrderToCook orders={orders} actualizar={actualizar} />
      </div>
    </Fragment>
  );
}

export default OrdersPage;
