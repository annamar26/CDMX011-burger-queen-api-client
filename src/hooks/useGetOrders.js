import { useState, useEffect } from "react";
import Axios from "axios";

export const useGetOrders = () => {
    const [pendingOrders, setPendingOrders] = useState([]);
    const [ordersToDeliver, setOrdersToDeliver] = useState([]);


    const getOrders = async() => {
        const resp = await Axios({
            url: "http://localhost:4000/orders",
        });;

        const filtrado = resp.data.filter(objeto => objeto.status === 'En preparacion')
        const filtrado2 = resp.data.filter(objeto => objeto.status === 'Listo')
        setPendingOrders(filtrado)
        setOrdersToDeliver(filtrado2)
    };

    const updateOrder = async(objeto, id) => {


        Axios.put(`http://localhost:4000/orders/${id}`, objeto)
        getOrders()

    };


    useEffect(() => {
        getOrders()
    }, [pendingOrders], [ordersToDeliver])

    return { pendingOrders, ordersToDeliver, getOrders, updateOrder };
};