import { useState } from "react";
import Axios from "axios";
export const useSetComanda = () => {
    const [order, setOrder] = useState([]);
    const [addition, setAddition] = useState(0);
    const [client, setClient] = useState("");
    const [table, setTable] = useState(0)

    const getName = (name) => {
        setClient(name)
    }
    const getTable = (num) => {
        setTable(num)
    }

    const add = (price) => {
        setAddition(price + addition);

    };
    const orderToKitchen = async(array, client, total, waiter, table) => {

        await Axios.post("https://fake-server-burguer-queen.herokuapp.com/orders", {
            waiter: waiter,
            cliente: client,
            table: table,
            products: array,
            total: total,
            status: "En preparacion",
            date: new Date().toLocaleDateString(),
            hour: new Date().toLocaleTimeString(),
        });
        return window.location.reload()
    };

    return {
        order,
        addition,
        add,
        getName,
        client,
        setOrder,
        orderToKitchen,
        getTable,
        table

    }
}