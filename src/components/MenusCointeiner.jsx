import { Button } from "@mui/material";
import React, {Fragment} from "react";
import BackButton from "./BackButton";

function MenusCointeiner() {
  const showDesayunoItems = () => {
    window.location.href = '/menu/desayuno'
  };

  const showComidaItems = () => {
    window.location.href = "/menu/comida";
  };

  return (
    <Fragment>
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
      <BackButton  content={'Salir'}/>
    </Fragment>
  );
}

export default MenusCointeiner;
