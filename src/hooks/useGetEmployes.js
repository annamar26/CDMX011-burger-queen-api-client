/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Axios from "axios";


const useGetEmployes = () => {

    const [employee, setEmployee] = useState([]);



    const getUsers = async() => {
        const resp = await Axios({

            url: "https://fake-server-burguer-queen.herokuapp.com/users",
        });


        let data = resp.data
        setEmployee(data)


    };

    const updateEmployee = async(id , objeto) => {


        await Axios.put(`https://fake-server-burguer-queen.herokuapp.com/users/${id}`, objeto)
        getUsers()

    };
    const searchEmployee = async(name, email, role) => {
        
       const resp=  await Axios.get("https://fake-server-burguer-queen.herokuapp.com/users", {params : {email: email, name: name, role: role}})
       return resp.data
    }
       
       
       
    const addEmployee = async(name, email, password, role)=>{
        Axios.post("https://fake-server-burguer-queen.herokuapp.com/users", {name, email, password, role})
    getUsers()
    }
    
   
    const deleteEmployee = async(id) => {


        await Axios.delete(`https://fake-server-burguer-queen.herokuapp.com/users/${id}`)
        getUsers()

    }


    useEffect(() => {
        getUsers()
    }, [employee])

    return { employee, getUsers, updateEmployee, deleteEmployee, addEmployee, searchEmployee};
};


export default useGetEmployes