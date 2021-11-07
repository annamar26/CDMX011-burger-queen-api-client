import { Fragment } from "react";
import logo from "./images/logo.png";
import camarera from "./images/camarera.png";
import cocinero from "./images/cocinero.png"; // with import
import gerente from "./images/gerente.png";
import Form from "./Form";

function Login() {

  return (
    <Fragment>
      <header>
        <img src={logo} alt="Error al cargar imagen" id="logo" />
        <section>
          <p id="header-text">Inicia tu sesión</p>
        </section>
      </header>
      <main>
        <div className="images">
          <img src={gerente} alt="Error al cargar imagen" />
          <img src={camarera} alt="Error al cargar imagen" />
          <img src={cocinero} alt="Error al cargar imagen" />
        </div>
      <Form></Form>

      </main>
    </Fragment>
  );
}
export default Login;

