import { useState } from "react";
const useSetComanda = () => {
    const [order, setOrder] = useState([]);
    const [suma, setSuma] = useState(0);
    const [cliente, setCliente] = useState("");

    const obtenerNombre = (nombre) => {
        setCliente(nombre)
    }


    const sumar = (price) => {
        setSuma(price + suma);

    };



    return {
        order,
        suma,
        sumar,
        obtenerNombre,
        cliente,
        setOrder

    }
}
export default useSetComanda;