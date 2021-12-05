import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";

export const useProducts = () => {
  const [desayunos, setDesayunos] = useState([]);
  const [comidas, setComidas] = useState([]);
const [recoveredDataProduct, setRecoveredDataProduct] = useState({
  name:"",
  id:"",
});

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const resp = await dataApi.get("http://localhost:3001/products");
    setDesayunos(resp.data.filter(prod =>prod.type === "Desayuno"));
    setComidas(resp.data.filter(prod => prod.type === "Comida"));
  };
 
  const recoverDataProduct = (id, name)=>{
    setRecoveredDataProduct({
      name: name,
      id: id,
    })
  }

  const deleteProduct = async (id) => {
    await dataApi.delete(`http://localhost:3001/products/${id}`);
  };

  return {
    desayunos,
    comidas,
    recoverDataProduct,
    recoveredDataProduct,
    deleteProduct,

  };
};
