import moment from "moment";
import { useState, useEffect } from "react";
import { dataApi } from "../api/dataApi";

export const usePostProducts = () => {
  const [dataPost, setDataPost] = useState([]);
  const [clientName, setClientName] = useState("");
  const [time, setTime] = useState(Date.now());
  
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const clientNameFn = (value) => {
    setClientName(value);
  };

  const postProducts = ((order, client) => {
    const product = [];
    order.map((item) => (
      product.push({ name: item.name, quantity: item.quantity})
  ));
    dataApi
      .post("http://localhost:3001/orders", {
        id:"",
        client: client,
        products: product,
        entry: moment(time).format('LT'),
        exit:"",
        status: "Pendiente",
      })
      .then((res) => {
        setDataPost(res.data);
      });
  });

  const updateApi = async()=>{
  /* const res = await dataApi.put('http://localhost:3001/orders', { status: 'ok' });

  console.log(res.data)*/
  }

  return {
    postProducts,
    dataPost,
    clientNameFn,
    clientName,
    time, 
    updateApi
  };
};
