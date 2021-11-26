/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Axios from "axios";
const useGetEmployes = () => {

    const [employee, setEmployees] = useState([]);



    const getUsers = async() => {
        const resp = await Axios({
            url: "https://fake-server-burguer-queen.herokuapp.com/users",
        });;


        console.log(resp.data)


    };

    const updateEmployee = async(objeto, id) => {


        await Axios.put(`http://localhost:4000/users/${id}`, objeto)
        getUsers()

    };


    useEffect(() => {
        getUsers()
    }, [employee])

    return { employee, getUsers, updateEmployee };
};


export default useGetEmployes