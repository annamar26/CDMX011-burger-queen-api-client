import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";
export const useDataEmployees = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [user, setUser] = useState({
   firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [dataRole, setDataRole] = useState({
    admin: false,
    waiter: false,
    kitchen: false,
  });

  const [recoveredData, setRecoveredData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const recoveryDataUser = (id, name, lastName, email, password) => {
    setRecoveredData({
      id: id,
      firstName: name,
      lastName: lastName,
      email: email,
      password: password,
    });
  };

 useEffect(() => {
   getUsers()
 }, [dataUsers])
 const handleUserChange = (event) => {
  /*console.log(event.target.defaultValue)
  if(event.target.value===""){
    setUser({
      ...user,
    [event.target.value]: event.target.defaultValue, 
    
  });
  } */
    setUser({
      ...user,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    });
  };

  const handleDataRole = (event) => {
    setDataRole({
      [event.target.value]: true,
      [event.target.value]: true,
      [event.target.value]: true,
    });
  };

  useEffect(() => {
      getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await dataApi.get("http://localhost:3001/users");
    setDataUsers(resp.data);
  };

  const deleteUser = async (id) => {
    await dataApi.delete(`http://localhost:3001/users/${id}`);
  };

  const editUser = async (id) => {
    await dataApi.patch(`http://localhost:3001/users/${id}`, {
      name: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
      role: {
        admin: dataRole.admin,
        waiter: dataRole.waiter,
        kitchen: dataRole.kitchen,
      },
      email: user.email,
      password: user.password,
    });
  };
  const postDataUsers = async () => {
    await dataApi.post("http://localhost:3001/users", {
      id: "",
      name: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
      role: {
        admin: dataRole.admin,
        waiter: dataRole.waiter,
        kitchen: dataRole.kitchen,
      },
      email: user.email,
      password: user.password,
    });
  };

  return {
    dataUsers,
    deleteUser,
    recoveredData,
    recoveryDataUser,
    handleUserChange,
    handleDataRole,
    user,
    dataRole,
    postDataUsers,
    editUser,
  };
};
