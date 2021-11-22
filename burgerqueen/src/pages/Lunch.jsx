import React, { Fragment } from "react";
import Comanda from "../components/Comanda";
import GoBack from "../components/GoBack";
import { useOrder } from "../hooks/useOrder";
import { useProducts } from "../hooks/useProducts";

function Lunch() {
  const { comidas } = useProducts();
  const {
    cleanOrder,
    addProduct,
    total,
    minusButton,
    deleteRow,
    plusButton,
  } = useOrder();

  return (
    <Fragment>
      <div className="comanda-div">
        <section>
          <Comanda
            order={cleanOrder}
            total={total}    
            deleteRow={deleteRow}
           minusButton={minusButton}
           plusButton={plusButton}
          />
        </section>
      </div>

      <section className="lunch-container">
        <section className="menu-container">
          {comidas.map((product, i) => (
            <button
              key={i}
              id="activado"
              onClick={(e) => {
                if (e.target.id === "activado") {
                  e.target.id = "desactivado";
                  addProduct(
                    product.name,
                    product.price,
                    product.id,
                    product.quantity
                  );
                }
              }}
            >
              {product.name} 
            <br />
            ${product.price}
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
