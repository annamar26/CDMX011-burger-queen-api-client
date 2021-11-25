import React, { Fragment } from "react";
import OrderCard from "./Components/OrderCard";

function OrdersPage({ orders, header, updateOrder }) {
  return (
    <Fragment>
      <h2 width="100" align="center">
        {header}
      </h2>
      <div id="orderContainer">
        <OrderCard orders={orders} updateOrder={updateOrder} />
      </div>
    </Fragment>
  );
}

export default OrdersPage;
