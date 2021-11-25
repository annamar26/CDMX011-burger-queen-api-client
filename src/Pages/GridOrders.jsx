import React, { Fragment } from "react";
import OrderToCook from "./Components/OrderCard";

function OrdersPage({ orders, header, updateOrder }) {
  return (
    <Fragment>
      <h2 width="100" align="center">
        {header}
      </h2>
      <div id="orderContainer">
        <OrderToCook orders={orders} updateOrder={updateOrder} />
      </div>
    </Fragment>
  );
}

export default OrdersPage;
