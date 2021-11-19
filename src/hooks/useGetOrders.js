import { useState, useEffect } from "react";
import Axios from "axios";

export const useGetOrders = () => {
    const [orders, setOrders] = useState([]);


    const getOrders = async() => {
        const resp = await Axios({
            url: "http://localhost:4000/orders",
        });;

        const filtrado = resp.data.filter(objeto => objeto.status === 'En preparacion')
        setOrders(filtrado)
    };


    useEffect(() => {
        getOrders()
    }, [orders])

    return { orders, setOrders, getOrders };
};