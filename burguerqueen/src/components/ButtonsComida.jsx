import { Button } from "@mui/material";
import React from "react";
import Comanda from "./Comanda";
import { useProductsList } from "../hooks/useProductsList";

function ButtonsComida() {
  const regresar = () => {
    window.location.href = "/menu";
  };
 
  const {comida}= useProductsList()

  return (
    <div className="contenedorBotones">
      <Comanda />
      <section id="desayunoButttons">
        {comida.map((item) => (
          <div key={item.id}>
            <Button variant="contained" margin="large" color="secondary" >
              {item.name} {"$" + item.price}
            </Button>
          </div>
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

export default ButtonsComida;
