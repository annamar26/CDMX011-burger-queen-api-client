import { Button } from "@mui/material";
import React from "react";
import Comanda from "./Comanda";
import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";
import BackButton from "./BackButton";

function MenuDesayuno() {
  const { order, addProduct, sumar, suma, setOrder } = useSetComanda();
  const { desayuno } = useGetProducts();

  return (
    <div className="contenedorBotones">
      <Comanda order={order} cuenta={suma} />
      <section id="desayunoButttons">
        {desayuno.map((item, index) => (
          <div key={item.id}>
            <Button
              variant="contained"
              margin="normal"
              color="secondary"
              onClick={() => {
          
                if (!order.includes(item)) {
                  addProduct(item.id, item.name, item.price, 1);
                  sumar(item.price);
                  console.log(order);
                } else {
                  item.quantity += 1;
                  sumar(item.precio);
                  console.log(order);
                }
                }
              }
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
