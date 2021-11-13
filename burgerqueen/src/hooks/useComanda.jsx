import { useState } from "react";

export const useComanda = () => {
    const [comanda, setComanda] = useState([]);
      
    const addProduct =  (product, price, id) => {
    setComanda([...comanda, { name: product, price: price, id: id }]);
      console.log(comanda)
    };

      
    


    return {
       comanda,
       addProduct
    }
}