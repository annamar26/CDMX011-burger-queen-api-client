import { Fragment } from "react";
import Banner from "../components/Banner";
import { FormLogin } from "../components/FormLogin";
import camarera from "../images/camarera.png";
import cocinero from "../images/cocinero.png"; 
import gerente from "../images/gerente.png";

function Login() {
  return (
    <Fragment>
      <Banner/>
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
