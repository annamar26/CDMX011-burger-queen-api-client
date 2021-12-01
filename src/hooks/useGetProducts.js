import { useState, useEffect } from "react";
import Axios from "axios";

export const useGetProducts = () => {
    const [desayuno, setDesayuno] = useState([]);
    const [comida, setComida] = useState([]);
   
    const getProducts = async() => {
        const resp = await Axios({
            url: "https://fake-server-burguer-queen.herokuapp.com/products",
        });
      
        setDesayuno(resp.data.filter(objeto => objeto.type === 'Desayuno'))
        setComida(resp.data.filter(objeto => objeto.type === 'Comida'))
    };
    const addProduct = async(name, price, image, type)=>{
        if(type==='Desayuno')
        Axios.post("https://fake-server-burguer-queen.herokuapp.com/products", {
            name, price, image, type, dateEntry: new Date().toLocaleDateString()})
    getProducts()
    }
    const searchProduct = async(name) => {
        
        const resp=  await Axios.get("https://fake-server-burguer-queen.herokuapp.com/products", {params : {name: name}})
        return resp.data
     }
     const deleteProduct = async(id) => {


        await Axios.delete(`https://fake-server-burguer-queen.herokuapp.com/products/${id}`)
        getProducts()

    }
    const updateProduct = async(id , objeto) => {


        await Axios.put(`https://fake-server-burguer-queen.herokuapp.com/products/${id}`, objeto)
        getProducts()

    };
    useEffect(() => {
        getProducts();
    }, [setDesayuno], [setComida], [desayuno], [comida]);
    return { desayuno, comida, addProduct, searchProduct, deleteProduct, updateProduct};
};