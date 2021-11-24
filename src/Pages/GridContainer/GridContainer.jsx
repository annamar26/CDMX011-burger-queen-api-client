import React, { Fragment } from "react";
import OrderCard from "../../components/OrderCard";
import { useGetOrders } from "../../hooks/useGetOrders";
function GridContainer({orders, header, actualizar}) {
  const { getOrders} = useGetOrders();
  
      

  return (
    <Fragment onLoad={getOrders}>
     <h2 width='100' align='center'>{header}</h2>
      <div id="orderContainer">
        
        <OrderCard orders={orders} actualizar={actualizar} />
      </div>
    </Fragment>
  );
}

export default GridContainer;
