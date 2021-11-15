import { useState } from "react";
const useSetComanda = () => {
    const [order, setOrder] = useState([]);

    const addProduct = (product, price) => {
        setOrder([...order, { product, precio: price }]);
        console.log(order)
    };





    return {
        order,
        addProduct
    }
}
export default useSetComanda;