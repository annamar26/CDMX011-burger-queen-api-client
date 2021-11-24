import React, { Fragment } from "react";
import Form from "../../components/Form"
import camarera from '../../images/camarera.png'
import guardaespaldas from '../../images/guardaespaldas.png'
import cocinero from '../../images/cocinero.png'


function Login({header}) {
  return (
    <Fragment>
      <main>
        <div className="Usuarios">
          <img src={guardaespaldas} alt=""></img>
          <img src={camarera} alt=""></img>
          <img src={cocinero} alt=""></img>
        </div>
        <Form header={header} />
       
      </main>
    </Fragment>
  );
}
export default Login;