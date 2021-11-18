import React, { Fragment, useState } from "react";
import OrderToCook from "./OrderToCook";
import Axios from "axios";
import { useGetOrders } from "../hooks/useGetOrders";
function Cocina() {
  const { orders } = useGetOrders();

  return (
    <Fragment>
     
      <div id="orderContainer">
        <OrderToCook orders={orders} />
      </div>
    </Fragment>
  );
}

export default Cocina;
