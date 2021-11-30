/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Axios from "axios";
const useGetEmployes = () => {

    const [employee, setEmployee] = useState([]);



    const getUsers = async() => {
        const resp = await Axios({

            url: "http://localhost:4000/users",
        });


        let data = resp.data
        setEmployee(data)


    };

    const updateEmployee = async(objeto, id) => {


        await Axios.put(`http://localhost:4000/users/${id}`, objeto)
        getUsers()

    };
    const deleteEmployee = async(objeto, id) => {


        await Axios.delete(`http://localhost:4000/users/${id}`, objeto)
        getUsers()

    };


    useEffect(() => {
        getUsers()
    }, [employee])

    return { employee, getUsers, updateEmployee, deleteEmployee };
};


export default useGetEmployes