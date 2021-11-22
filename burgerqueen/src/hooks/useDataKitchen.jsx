import moment from "moment";
import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";
import { usePostProducts } from "./usePostProduct";


export const useDataKitchen = () => {
  const [dataKitchen, setDataKitchen] = useState([]);
  const {time} = usePostProducts();
  useEffect(() => {
    getOrders();
    const interval = setInterval(() => {
      getOrders();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getOrders = async () => {
    const resp = await dataApi.get("http://localhost:3001/orders");
    setDataKitchen(resp.data);
  };

  
  const updateApi = async(id)=>{
    const res = await dataApi.patch(`http://localhost:3001/orders/${id}`, {
      status: "Lista",
      exit: moment(time).format('LT')
    });
    console.log(res.data)
  }


  return {
    dataKitchen,
    updateApi
  };
};


