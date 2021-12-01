import { useDataEmployees } from "../hooks/useDataEmployees";

export function FormRegister({ handleClose }) {
  const { handleUserChange, handleDataRole, postDataUsers } =
    useDataEmployees();
  return (
    <>
      <form id="form-admin">
        <section>
          <label htmlFor="firstName">Nombre(s)</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleUserChange}
          />
          <label htmlFor="">Apellidos</label>
          <input name="lastName" type="text" onChange={handleUserChange} />
          <label htmlFor="role">Puesto</label>
          <select id="role" onChange={handleDataRole}>
            <option value="N/A">Seleccione el puesto</option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="kitchen">Cocinero</option>
          </select>
          <label htmlFor="">Correo Electrónico</label>
          <input name="email" type="email" onChange={handleUserChange} />
          <label htmlFor="password">Constraseña</label>
          <input name="password" type="password" onChange={handleUserChange} />
          <section>
            <button
              onClick={(e) => {
                e.preventDefault();
                postDataUsers();
                handleClose();
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
