import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";

export const useDataEmployees = () => {
  const [dataUsers, setDataUsers] = useState([]);//<-----Hacer post 
  const [postUsers, setPostUsers] = useState([]);
  const [dataRole, setDataRole] = useState({
  admin: false,
  waiter: false,
  kitchen: false
  })
  const [dataEmploy, setDataEmploy] = useState({
    id: "",
    name: "",
    uid: "",
  });
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password:""
  });
  const handleUserChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    });
  };
  const handleDataRole = (event) =>{
    //console.log(event.target.value)
     setDataRole({
      [event.target.value]: true,
     [event.target.value]: true,
    [event.target.value]: true,
    })
  }

  const recoveryDataEmployee = (id, name, uid) => {
    setDataEmploy({
      id: id,
      name: name,
      uid: uid,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getUsers();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getUsers = async () => {
    const resp = await dataApi.get("http://localhost:3001/users");
    setDataUsers(resp.data);
  };

  const deleteEmployee = async (id) => {
    await dataApi.delete(`http://localhost:3001/users/${id}`);
    console.log("Eliminar empleado funcionando en json api");
  };

  const postDataUsers = async () => {
    await dataApi
      .post("http://localhost:3001/users", {
        id: "",
        name: {
          firstName: user.firstName,
          lastName: user.lastName,
        },
        role: { 
          admin: dataRole.admin, 
          waiter: dataRole.waiter, 
          kitchen: dataRole.kitchen 
        },
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  /*
  dataApi
  .post("http://localhost:3001/employees", {
    id: "",
    uid: user,
    name: name,
    rol: job,
    email: value,
    password: password,
  })
  .then((res) => {
    addDataEmployee(res.data);
  });*/
  return {
    dataUsers,
    deleteEmployee,
    dataEmploy,
    recoveryDataEmployee,
    handleUserChange,
    handleDataRole,
    user,
    dataRole,
    postDataUsers,

  };
};
