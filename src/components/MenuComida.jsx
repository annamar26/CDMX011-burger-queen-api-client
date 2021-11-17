import { Button } from "@mui/material";
import React, { useState } from "react";
import Comanda from "./Comanda";
import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";

import BackButton from "./BackButton";

function MenuComida() {
  const { sumar, suma } = useSetComanda();

  const { comida } = useGetProducts();

  const [order, setOrder] = useState([]);
const [count, setCount] = useState(1);
  /* const remover = (id)=>{
  const newOrder = order.filter((element) => element.id !== id);
  setOrder(newOrder)
} */

  const actualizar = (id, count) => {
    const newOrder = order.map((item) => {
      setCount(count+1)
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
                setCount(1);
                sumar(item.price);
               

                setOrder([
                  ...order,
                  {
                    ...item,
                    quantity: count,
                  },
                ]);
                document.getElementById(item.id).value = "true";
            

                console.log(order);
              } else {
             setCount(1)
                sumar(item.price);
                actualizar(item.id, count);
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
