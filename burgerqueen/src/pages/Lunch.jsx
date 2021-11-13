import React, { Fragment, useState } from "react";
import GoBack from "../components/GoBack";
import { useComanda } from "../hooks/useComanda";
import { useProducts } from "../hooks/useProducts";

function Lunch() {
  const { comidas } = useProducts();
  const { comanda, addProduct} = useComanda();

  return (
    <Fragment>
      <div className="lunch-container">
        <section id="comanda">
          {comanda.map((p) => (
            <ul key={p.id}>
              <li>{p.name}</li>
              <li>{" $" + p.price}</li>
            </ul>
          ))}
        </section>
        <section className="menu-container">
          {comidas.map((product) => (
            <button
              key={product.id}
              onClick={() =>
                addProduct(product.name, product.price, product.id)
              }
            >
              {product.name + "$" + product.price}
            </button>
          ))}
        </section>
      </div>
      <button onClick={GoBack}>Regresar</button>
    </Fragment>
  );
}

export default Lunch;
