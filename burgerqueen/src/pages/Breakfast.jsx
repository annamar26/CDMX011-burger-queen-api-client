import React, { Fragment } from "react";
import GoBack from "../components/GoBack";
import { useProducts } from "../hooks/useProducts";

function Breakfast() {
  const { desayunos } = useProducts();

  return (
    <Fragment>
      <div className="menu-container">
        <section>
          {desayunos.map((product) => (
            <button
              key={product.id}
              onClick={(e) => {
                e.preventDefault();
                console.log(product.price);
              }}
            >
              {product.name}
            </button>
          ))}
        </section>
      </div>
      <button onClick={GoBack}>Regresar</button>
    </Fragment>
  );
}

export default Breakfast;
