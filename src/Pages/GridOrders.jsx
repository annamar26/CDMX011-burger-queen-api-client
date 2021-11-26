import React, { Fragment } from "react";


function OrdersPage({ header, content }) {
  return (
    <Fragment>
      <h2 width="100" align="center">
        {header}
      </h2>
      <div id="orderContainer">
      {content}
       
      </div>
    </Fragment>
  );
}

export default OrdersPage;
