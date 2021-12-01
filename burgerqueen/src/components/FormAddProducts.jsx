import React from "react";

function FormAddProducts() {
  return (
    <>
      <form id="form-admin">
          <section>
        <label htmlFor="id">ID</label>
        <input id="id" name="id" type="text" />

        <label htmlFor="name">Producto</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="price">Precio</label>
        <input id="price" name="price" type="text" />

        <label htmlFor="type">Tipo</label>
        <input id="type" name="type" type="text" />
        <p>Cantidad: </p><p>{1}</p>
        <section>
            <button>Editar</button>
        </section>
        </section>
      </form>
    </>
  );
}

export default FormAddProducts;
