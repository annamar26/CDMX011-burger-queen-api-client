import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Comanda from "./Comanda";
import Axios from "axios";

function ButtonsComida() {
  const regresar = () => {
    window.location.href = "/menu";
  };
  const llamar = (e, nombre, costo) =>{
    e.preventDefault()
    console.log(nombre, costo)
  }
  const [comida, setComida]= useState([]);
  useEffect(() => {
    Axios({
      url: "http://localhost:4000/products",
    })
      .then((response) => {
        setComida(response.data.comida);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setComida]);

  return (
    <div className="contenedorBotones">
      <Comanda />
      <section id="desayunoButttons">
        {comida.map((item) => (
          <div key={item.id}>
            <Button variant="contained" margin="large" color="secondary"  onClick={(e)=>{llamar(e, item.name, item.price)}}>
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
