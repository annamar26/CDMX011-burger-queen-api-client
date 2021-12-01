import { Fragment } from "react";
import { FormLogin } from "../components/FormLogin";
import camarera from "../images/camarera.png";
import cocinero from "../images/cocinero.png"; // with import
import gerente from "../images/gerente.png";

function Login() {
  return (
    <Fragment>
      <main>
        <div className="images">
          <img src={gerente} alt="Error al cargar imagen" />
          <img src={camarera} alt="Error al cargar imagen" />
          <img src={cocinero} alt="Error al cargar imagen" />
        </div>
        <FormLogin/>
      </main>
    </Fragment>
  );
}
export default Login;
