import { useDataProducts } from "../hooks/useDataProducts";

function FormAddProducts() {
  const { handleProductChange, postDataProducts } = useDataProducts();

  return (
    <>
      <form id="form-admin">
        <section>
          <label htmlFor="name">Producto</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleProductChange}
          />

          <label htmlFor="price">Precio</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={handleProductChange}
          />

          <label htmlFor="type">Categoría</label>
          <select id="type" name="type" onChange={handleProductChange}>
            <option>Seleccione la categoría</option>
            <option  value="Desayuno">Desayuno</option>
            <option  value="Comida">Comida</option>
          </select>

          <label htmlFor="dateEntry">Fecha</label>
          <input
            type="date"
            id="dateEntry"
            name="dateEntry"
            min="2021-01-01"
            max="2021-12-31"
            onChange={handleProductChange}
          ></input>

          <label htmlFor="uploadImg">Subir imagen</label>
          <input type="file" name="image" onChange={handleProductChange} />
         
          <section>
            <button onClick={()=> postDataProducts()}>Enviar</button>
          </section>
        </section>
      </form>
    </>
  );
}

export default FormAddProducts;
