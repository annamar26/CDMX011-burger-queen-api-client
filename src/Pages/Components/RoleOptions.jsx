import { Button } from "@mui/material";
import React, {Fragment} from "react";
import BackButton from "./BackButton";


function RoleOptions({options}) {

  return (

    <Fragment>
      <section id="menusContainer" className="container">
      {options.map((option, index) => (
        <Button
        key={index}
          color="secondary"
          id="Desayuno"
          variant="contained"
          margin="large"
          type="submit"
          data-testid="Desayuno"
          onClick={()=>window.location.pathname = `/${option}`}
        >
         {option}
        </Button>
      ))}
      </section>
     
      <BackButton  content={'Salir'}/>
    </Fragment>
  );
}

export default RoleOptions;
