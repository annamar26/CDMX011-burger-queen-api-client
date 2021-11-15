import { Button } from "@mui/material";
import React from "react";
import Comanda from "./Comanda";
import { useGetProducts } from "../hooks/useGetProducts";
import useSetComanda from "../hooks/useSetComanda";
import useGetSuma from "../hooks/useGetSuma";

function MenuComida() {
  const regresar = () => {
    window.location.href = "/menu";
  };
  const { order, addProduct } = useSetComanda()

  const { comida } = useGetProducts()
  const { suma, sumar } = useGetSuma()


  return (
    <div className="contenedorBotones">
      <Comanda content={order} cuenta={suma} />
      <section id="desayunoButttons">
        {comida.map((item) => (
        
            <Button
             key={item.id}
             variant="contained"
              margin="large"
              color="secondary"
              onClick={()=>{
                addProduct(item.name, item.price);
                sumar(item.price)
            }}>
              {item.name} {"$" + item.price}
            </Button>
        
        ))}
      </section>
      <Button
        onClick={regresar}
        id="regresarMenu2"
        variant="contained"
        margin="large"
        color="secondary"
      >
        Regresar
      </Button>
    </div>
  );
}

export default MenuComida;
