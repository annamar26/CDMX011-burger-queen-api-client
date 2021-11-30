import { Fragment } from "react";
import camarera from "../images/camarera.png";
import cocinero from "../images/cocinero.png"; // with import
import gerente from "../images/gerente.png";
import { FormLogin } from "../components/Form";

function Login() {
  return (
    <Fragment>
      <main>
        <div className="images">
          <img src={gerente} alt="Error al cargar imagen" />
          <img src={camarera} alt="Error al cargar imagen" />
          <img src={cocinero} alt="Error al cargar imagen" />
        </div>
        <FormLogin/ >
      </main>
    </Fragment>
  );
}
export default Login;
