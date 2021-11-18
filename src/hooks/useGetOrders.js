import { useState, useEffect } from "react";
import Axios from "axios";

export const useGetOrders = () => {
    const [orders, setOrders] = useState([]);


    const getOrders = async() => {
        const resp = await Axios({
            url: "http://localhost:4000/orders",
        });;
        setOrders(resp.data)
    };


    useEffect(() => {
        getOrders()
    }, [orders])


    return { orders, setOrders };
};