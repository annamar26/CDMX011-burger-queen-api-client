import { Button } from "@mui/material";
import React, { useState } from "react";
import Comanda from "./Comanda";
import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";
import BackButton from "./BackButton";


function MenuDesayuno() {
  const { sumar, suma } = useSetComanda();
  const { desayuno } = useGetProducts();
  const [order, setOrder] = useState([]);
  const actualizar = (id, count) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: count };
      }
      return item;
    });
    setOrder(newOrder);
  };
  return (
    <div className="contenedorBotones">
      <Comanda order={order} cuenta={suma} />
      <section id="desayunoButttons">
        {desayuno.map((item, index) => (
          <div key={item.id}>
            <Button
             id={item.id}
             key={item.id}
              variant="contained"
              margin="normal"
              color="secondary"
              value={"false"}
              onClick={(e) => {
                if (e.target.value === "false") {
                  sumar(item.price);

                  setOrder([
                    ...order,
                    {
                      ...item,
                      quantity: 1,
                    },
                  ]);

                  document.getElementById(item.id).value = "true";
                } else {
                  const elemToSetup = order.find(
                    (product) => product.id === item.id
                  );
                  console.log(elemToSetup);
                  sumar(item.price);
                  actualizar(item.id, elemToSetup.quantity + 1);
                }
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
