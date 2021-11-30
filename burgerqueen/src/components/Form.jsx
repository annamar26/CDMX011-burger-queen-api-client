import { useState } from "react";
import LoginJSON from "../api/LoginJSON";
import { useDataEmployees } from "../hooks/useDataEmployees";
import { useInputs } from "../hooks/useInputs";
//import { FirebaseAuth } from "../lib/FirebaseAuth";

export function FormLogin() {
  const { getUsers } = LoginJSON();
 
  //const { LogIn } = FirebaseAuth();
  const {
    isActive,
    yepActive,
    email,
    password,
    emailInput,
    passwordInput,
    errorMessage,
  } = useInputs();
  //const err = errMessage;
  return (
    <form>
      <section id="float-father">
        <p>Inicia tu sesión</p>
        <p>{errorMessage}</p>
        <section id="float-label">
          <label className={isActive ? "Active" : ""} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => {emailInput(e.target.value);
            }}
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
        <button id="login" onClick={(e)=> {
          e.preventDefault()
          getUsers(email, password)}}>
          Iniciar sesión
        </button>
      </section>
    </form>
  );
}

export function FormAdmin() {
  //const { Register } = FirebaseAuth();
 
const {handleUserChange, user, handleDataRole, dataRole, postDataUsers} =useDataEmployees();
 

  return (
    <>
      <form id="form-admin">
        <section>
          <label htmlFor="">Nombre(s)</label>
          <input
            name="firstName"
            type="text"
            onChange={handleUserChange}
          />
         <label htmlFor="">Apellidos</label>
          <input
            name="lastName"
            type="text"
            onChange={handleUserChange}
          />
          <label htmlFor="">Puesto</label>
          <select name="role" onChange={handleDataRole}>
            <option value="N/A">Seleccione el puesto</option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="kitchen">Cocinero</option>
          </select>
          <label htmlFor="">Correo Electrónico</label>
          <input
            name="email"
            type="email"
            onChange={handleUserChange}
          />
          <label htmlFor="password">Constraseña</label>
          <input
            name="password"
            type="password" 
            onChange={handleUserChange}
          />
          <section>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(user);
                console.log(dataRole)
                //Register(e, email, password, employeeName, job);
                postDataUsers();
              }}
            >
              Registrar
            </button>
          </section>
        </section>
      </form>
    </>
  );
}

/*<input
            id="job"
            type="text"
            value={job}
            onChange={(e) => jobInput(e.target.value)}
          />*/
