import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";

export const useProducts = () => {
  const [desayunos, setDesayunos] = useState([]);
  const [comidas, setComidas] = useState([]);
const [recoveredIdProduct, setRecoveredIdProduct] = useState({
  name:"",
  id:"",
});

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    const resp = await dataApi.get("http://localhost:3001/products");
    setDesayunos(resp.data.desayunos);
    setComidas(resp.data.comida);
  };
 
  const recoverIdProduct = (id, name)=>{
    setRecoveredIdProduct({
      name: name,
      id: id,
    })
  }
  const deleteProduct = async (id) => {
    await dataApi.delete(`http://localhost:3001/users/${id}`);
    console.log("Eliminar producto funcionando en json api", id);
  };

  return {
    desayunos,
    comidas,
    recoverIdProduct,
    recoveredIdProduct,
    deleteProduct,

  };
};
