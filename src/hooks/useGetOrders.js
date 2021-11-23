import { useState, useEffect } from "react";
import { getOrders } from "../lib/axios/axios";

export const useGetOrders = () => {
    const [pendingOrders, setPendingOrders] = useState([]);
    const [ordersToDeliver, setOrdersToDeliver] = useState([]);

    getOrders().then((resp) => {
        setPendingOrders(resp.filter(objeto => objeto.status === 'En preparacion'));
        setOrdersToDeliver(resp.filter(objeto => objeto.status === 'Listo'))
    });

    useEffect(() => {
        getOrders()

    }, [pendingOrders], [ordersToDeliver])

    return { pendingOrders, ordersToDeliver };
};