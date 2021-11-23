import { useState, useEffect } from "react";
import { getProducts } from '../lib/axios/axios'

export const useGetProducts = () => {
    const [desayuno, setDesayuno] = useState([]);
    const [comida, setComida] = useState([]);
    getProducts().then((resp) => {
        setDesayuno(resp.desayuno);
        setComida(resp.comida)
    })


    useEffect(() => {
        getProducts()
    }, [desayuno], [comida]);
    return { desayuno, comida };
};