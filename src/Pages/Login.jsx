import { Fragment } from "react";
import React from "react";
import Form from "./Components/Form"
import camarera from '../images/camarera.png'
import guardaespaldas from '../images/guardaespaldas.png'
import cocinero from '../images/cocinero.png'


function Login() {
  return (
    <Fragment>
      <main>
        <div className="Usuarios">
          <img src={guardaespaldas} alt=""></img>
          <img src={camarera} alt=""></img>
          <img src={cocinero} alt=""></img>
        </div>
        <Form />
       
      </main>
    </Fragment>
  );
}
export default Login;