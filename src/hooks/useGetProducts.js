import { useState, useEffect } from "react";
import Axios from "axios";

export const useGetProducts = () => {
    const [desayuno, setDesayuno] = useState([]);
    const [comida, setComida] = useState([]);
    const getProducts = async() => {
        const resp = await Axios({
            url: "http://localhost:4000/products",
        });
        setDesayuno(resp.data.desayuno);
        setComida(resp.data.comida)
    };
    useEffect(() => {
        getProducts();
    }, [setDesayuno], [setComida]);
    return { desayuno, comida };
};