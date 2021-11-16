import { Button } from "@mui/material";
import React from "react";
import Comanda from "./Comanda";
import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";
import BackButton from "./BackButton";

function MenuDesayuno() {
  const { order, addProduct, suma, sumar } = useSetComanda();
  const { desayuno } = useGetProducts();

  return (
    <div className="contenedorBotones">
      <Comanda order={order} cuenta={suma} />
      <section id="desayunoButttons">
        {desayuno.map((item) => (
          <div key={item.id}>
            <Button
              variant="contained"
              margin="normal"
              color="secondary"
              onClick={() => {
                addProduct(item.id, item.name, item.price);
                sumar(item.price);
              }}
            >
              {item.name} {"$" + item.price}
            </Button>
          </div>
        ))}
      </section>
      <BackButton content={"Regresar"} />
    </div>
  );
}

export default MenuDesayuno;
