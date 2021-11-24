import { Button } from "@mui/material";
import React from "react";
import Comanda from "../../components/Comanda";
import useSetComanda from "../../hooks/useSetComanda";

import BackButton from "../../components/BackButton";

function MakeOrder({products}) {
 

  const { sumar, suma, order, setOrder} = useSetComanda();

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
        {products.map((item, index) => (
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

export default MakeOrder;
