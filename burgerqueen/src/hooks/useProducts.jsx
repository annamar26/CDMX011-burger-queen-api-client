import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";

export const useProducts = () => {
  const [desayunos, setDesayunos] = useState([]);
  const [comidas, setComidas] = useState([]);
 
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const resp = await dataApi.get("http://localhost:3001/products");
    setDesayunos(resp.data.desayunos);
    setComidas(resp.data.comida);
  };
 
  return {
    desayunos,
    comidas,
 
  };
};
