import { useDataEmployees } from "../hooks/useDataEmployees";

export function FormEdit({ handleClose, recoveredData, user, handleUserChange, handleDataRole, editUser}) {
  /*const {
    handleUserChange,
    handleDataRole,
    editUser,
  } = useDataEmployees();*/
  return (
    <>
      <form
        id="form-admin"
      >
        <section>
          <label htmlFor="">Nombre(s)</label>
          <input
            name="firstName"
            type="text"
            /*defaultValue={recoveredData.firstName}*/
            onChange={handleUserChange}
          />
          <label htmlFor="">Apellidos</label>
          <input
            name="lastName"
            type="text"
            /*defaultValue={recoveredData.lastName}*/
            onChange={handleUserChange}
          />
          <label htmlFor="role">Puesto</label>
          <select id="role" onChange={handleDataRole}>
            <option value="N/A">Seleccione el puesto</option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="kitchen">Cocinero</option>
          </select>
          <label htmlFor="">Correo Electrónico</label>
          <input
            name="email"
            type="email"
           /* defaultValue={recoveredData.email}*/
            onChange={handleUserChange}
          />
          <label htmlFor="password">Constraseña</label>
          <input
            name="password"
            type="password"
            /*defaultValue={recoveredData.password}*/
            onChange={handleUserChange}
          />
          <section>
            <button onClick={(e) => {
                if (
                  user.firstName === "" ||
                  user.lastName === "" ||
                  user.role === "" ||
                  user.password === "" ||
                  user.email === ""
                ) {
                  alert("error");
                }else{
                  e.preventDefault();
                  editUser(recoveredData.id);
                  handleClose();
                }
              }}>Editar</button>
          </section>
        </section>
      </form>
    </>
  );
}
/* onClick={(e) => {
                if (
                  user.firstName === "" ||
                  user.lastName === "" ||
                  user.password === "" ||
                  user.email === ""
                ) {
                  alert("error");
                }else{
                  e.preventDefault();
                  editUser(recoveredData.id);
                  handleClose();
                }}}
            >
                */
