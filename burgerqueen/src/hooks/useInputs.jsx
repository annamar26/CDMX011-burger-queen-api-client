import {  useState } from "react";
import { dataApi } from "../api/dataApi";

export const useInputs = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [yepActive, setYepActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const [employeesList, setEmployeesList] = useState([]);
  const showError = () => {
    setErrorMessage("Error verifica tus credenciales");
  };
  const emailInput = (text) => {
    setEmail(text);
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
/*
  const nameInput = (name) => {
    setEmployeeName(name);
  };
  const jobInput = (jobData) => {
    setJob(jobData);
  };
  const addDataEmployee = (data)=>{
    setEmployeesList(data)
  }
  const postUsersApi = ()=>{
    dataApi
  .post("http://localhost:3001/employees", {
    id: "",
    name: {
      firstName:"", 
      lastName:""
    },
    rol: job,
    email: value,
    password: password,
  })
  .then((res) => {
    addDataEmployee(res.data);
  });
  }*/
  return {
    isActive,
    yepActive,
    email,
    password,
    emailInput,
    passwordInput,
    /*nameInput,
    employeeName,
    jobInput,
    job,
    addDataEmployee,
    postDataEmployees,
    employeesList,*/
    showError,
    errorMessage,
  };
};
