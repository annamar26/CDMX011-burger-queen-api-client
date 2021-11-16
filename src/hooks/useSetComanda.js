import { useState } from "react";
const useSetComanda = () => {
    const [order, setOrder] = useState([]);
    const [suma, setSuma] = useState(0);
    const [cliente, setCliente] = useState("");
    const obtenerNombre = (nombre) => {
        setCliente(nombre)
    }

    const addProduct = (id, product, price) => {
        setOrder([...order, { id: id, producto: product, precio: price }]);
        console.log(order)
    };


    const sumar = (price) => {
        setSuma(price + suma);

    };


    return {
        order,
        addProduct,
        suma,
        sumar,
        obtenerNombre,
        cliente
    }
}
export default useSetComanda;