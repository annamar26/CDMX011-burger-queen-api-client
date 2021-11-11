import { Button } from "@mui/material";
import React, { Component, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import axios from "axios";

function MenusCointeiner() {
  const showDesayunoItems = () => {
    window.location.href = '/menu/desayuno'
  };
  // the data

  const showComidaItems = () => {
    window.location.href = "/menu/comida";
  };
  const regresar = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <section id="menusContainer" className="container">
        {" "}
        <Button
          color="secondary"
          id="Desayuno"
          variant="contained"
          margin="large"
          type="submit"
          data-testid="Desayuno"
          onClick={showDesayunoItems}
        >
          Desayuno
        </Button>
        <Button
          color="secondary"
          id="AlmuerzoCena"
          variant="contained"
          margin="large"
          type="submit"
          data-testid="Desayuno"
          onClick={showComidaItems}
        >
          Almuerzo y Cena
        </Button>
      </section>
      <Button
        onClick={regresar}
        id="regresarMenu"
        variant="contained"
        margin="large"
        color="secondary"
      >
        Salir
      </Button>
    </div>
  );
}

export default MenusCointeiner;
