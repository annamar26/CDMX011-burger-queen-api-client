import { Fragment, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Form() {
  const [isActive, setIsActive] = useState(false);
  const [yepActive, setYepActive] = useState(false);
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = (text) => {
    setValue(text);
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const passwordInput = (text) => {
    setPassword(text);
    if (text !== "") {
      setYepActive(true);
    } else {
      setYepActive(false);
    }
  };
  const logIn = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:3001/usuarios", {
        //Recuperamos datos de la fake api
        params: { email: value, password: password },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          //Si un usuario coincide permite el login
          let respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" }); //Guardamos datos de inicio de sesion
          cookies.set("name", respuesta.name, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });
          alert("Bienvenido " + respuesta.name);
          window.location.href = "./home";
        } else {
          alert("Email o contraseña incorrecto");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <form onSubmit={logIn}>
        <div id="float-label">
          <label className={isActive ? "Active" : ""} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            value={value}
            onChange={(e) => emailInput(e.target.value)}
          />
        </div>
        <div id="float-label">
          <label className={yepActive ? "Active" : ""} htmlFor="email">
            Constraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => passwordInput(e.target.value)}
          />
        </div>

        <button type="submit">Pínchame</button>
      </form>
    </Fragment>
  );
}

export default Form;
