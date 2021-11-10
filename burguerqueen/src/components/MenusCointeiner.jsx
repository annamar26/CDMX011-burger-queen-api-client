import { Button } from "@mui/material";
import React, { Fragment } from "react";

function MenusCointeiner() {
  const showDesayunoItems = () => {
    window.location.href = "/desayuno";
  };
  const showComidaItems = () => {
    window.location.href = "/comida";
  };
  const regresar = () => {
    window.location.href = "/";
  };
  return (
   
        <div>
     <section className="container"> <Button
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
