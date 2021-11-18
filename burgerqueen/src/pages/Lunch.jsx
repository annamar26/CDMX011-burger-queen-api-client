import React, { Fragment } from "react";
import Comanda from "../components/Comanda";
import GoBack from "../components/GoBack";
import { useOrder } from "../hooks/useOrder";
import { useProducts } from "../hooks/useProducts";

function Lunch() {
  const { comidas } = useProducts();
  const {
    order,
    addProduct,
    cuenta,
    suma,
    resta,
    deleteElement,
    newPricePlus,
    newPriceMinus,
  } = useOrder();
  return (
    <Fragment>
      <div className="comanda-div">
        <section>
          <Comanda
            order={order}
            suma={cuenta}
            resta={resta}
            deleteElement={deleteElement}
            newPricePlus={newPricePlus}
            newPriceMinus={newPriceMinus}
          />
        </section>
      </div>

      <section className="lunch-container">
        <section className="menu-container">
          {comidas.map((product, i) => (
            <button
              className="m-1"
              key={i}
              onClick={(e) => {
                e.preventDefault();
                addProduct(product.name, product.price, product.id, 1);
                suma(product.price);
              }}
            >
              {product.name + "$" + product.price}
            </button>
          ))}
        </section>
      </section>
      <section id="regresar-btn">
        <button onClick={GoBack}>Regresar</button>
      </section>
    </Fragment>
  );
}

export default Lunch;

/*
{comanda.map((p) => (
  <ul key={p.id}>
    <li>{p.name}</li>
    <li>{" $" + p.price}</li>
  </ul>
))}*/
