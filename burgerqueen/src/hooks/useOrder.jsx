import { useState } from "react";

export const useOrder = () => {
  const [order, setOrder] = useState([]);
  const [cuenta, setCuenta] = useState(0);

  const addProduct = (product, price, id, i) => {
    setOrder([...order, { name: product, price: price, id: id, quantity: i }]);
  };
  const suma = (price) => {
    setCuenta(cuenta + price);
  };
  const resta = (price) => {
    setCuenta(cuenta - price);
  };
  const newPricePlus = (price) => {
    setCuenta(cuenta + price);
  };
  const newPriceMinus = (price) => {
    setCuenta(cuenta - price);
  };
  const deleteElement = (index, e) => {
    setOrder(order.filter((v, i) => i !== index));
  };

  return {
    order,
    addProduct,
    cuenta,
    suma,
    resta,
    deleteElement,
    newPricePlus,
    newPriceMinus
  };
};
