import { Button } from "@mui/material";
import React, { useState } from "react";
import Comanda from "./Comanda";
import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";

import BackButton from "./BackButton";

function MenuComida() {
  const { comida } = useGetProducts();

  const { sumar, suma } = useSetComanda();

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
        {comida.map((item, index) => (
          <Button
            mycustomattribute={1}
            id={item.id}
            key={item.id}
            variant="contained"
            margin="large"
            color="secondary"
            value={"false"}
            increment={1}
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
                actualizar(item.id, elemToSetup.quantity+1);
              }
            }}
          >
            {item.name} {"$" + item.price}
          </Button>
        ))}
      </section>
     
      <BackButton content={"Regresar"} />
    </div>
  );
}

export default MenuComida;
