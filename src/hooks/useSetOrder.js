import { useState, useEffect } from "react";
import useSetComanda from "./useSetComanda";
import Axios from "axios";

export const useSetOrder = () => {


    const ordenLista = []
    const orderToKitchen = async(array, nombre) => {

        for (let i = 0; i < array.length; i++) {
            ordenLista.push(array[i].product)


        }
        let res = await Axios.post('http://localhost:4000/orders', { "id": nombre, "productos": ordenLista, 'status': 'En preparacion' });

        let data = res.data;
        console.log(data);
    }
    return ({ orderToKitchen })
}