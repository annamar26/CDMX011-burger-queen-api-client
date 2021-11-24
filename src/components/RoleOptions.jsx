import { Button } from "@mui/material";
import React, { Fragment } from "react";
import BackButton from "../components/BackButton";

const RoleOptions = ({ options }) => {
  return (
    <Fragment>
      <section className="container">
        <Button
          color="secondary"
          id="Desayuno"
          variant="contained"
          margin="large"
          type="submit"
          data-testid="Desayuno"
          onClick={() => {
            window.location.href = `${options[0]}`;
          }}
        >
          {options[0]}
        </Button>
        <Button
          color="secondary"
          id="AlmuerzoCena"
          variant="contained"
          margin="large"
          type="submit"
          data-testid="Desayuno"
          onClick={() => {
            window.location.href = `${options[1]}`;
          }}
        >
          {options[1]}
        </Button>
      </section>
      <BackButton content={"Salir"} />
    </Fragment>
  );
};

export default RoleOptions;
