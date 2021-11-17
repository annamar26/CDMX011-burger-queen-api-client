import { useState } from "react";

export const useOrder = () => {
  const [order, setOrder] = useState([]);
  const [cuenta, setCuenta] = useState(0);

  const addProduct = (product, price, id) => {
    setOrder([...order, { name: product, price: price, id: id }]);
  };

  const suma = (price) => {
    setCuenta(cuenta + price);
  };
 
  const resta = (plus, price )=>{
      setCuenta(plus-price);
  }

  return {
    order,
    addProduct,
    cuenta, 
  suma, resta
  };
};
