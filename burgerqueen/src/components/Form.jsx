import { useInputs } from "../hooks/useInputs";
import { logIn } from "../lib/FirebaseAuth";

function Form() {
  const { isActive, yepActive, value, password, emailInput, passwordInput } =
    useInputs();

  return (
    <form onSubmit={(e) => logIn(e, value, password)}>
      <section id="float-father">
        <p>Inicia tu sesión</p>
        <section id="float-label">
          <label className={isActive ? "Active" : ""} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="text"
            value={value}
            onChange={(e) => emailInput(e.target.value)}
          />
        </section>
        <section id="float-label">
          <label className={yepActive ? "Active" : ""} htmlFor="email">
            Constraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => passwordInput(e.target.value)}
          />
        </section>
        <button type="submit" id="login">
          Iniciar sesión
        </button>
      </section>
    </form>
  );
}

export default Form;
