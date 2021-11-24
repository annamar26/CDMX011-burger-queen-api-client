import moment from "moment";
import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";
import { usePostProducts } from "./usePostProduct";

export const useDataKitchen = () => {
  const [dataKitchen, setDataKitchen] = useState([]);
  const { time } = usePostProducts();
  const [timeInK, setTimeInK] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {setOpen(true)}
  const handleClose = () => {setOpen(false)};
  const [id, setId] = useState(0);
  
  useEffect(() => {
    getOrders();
  }, [dataKitchen]);
  const getOrders = async () => {
    const resp = await dataApi.get("http://localhost:3001/orders");
    setDataKitchen(resp.data);
  };

  const updateApi = async (id) => {
    await dataApi.patch(`http://localhost:3001/orders/${id}`, {
      status: "Lista",
      exit: moment(time).format("HH:mm"),
      time: timeInK,
    });
  };

  const timeInKitchen = (exit, entry) => {
    exit = moment(time).format("HH:mm");
    const numEntry = parseInt(entry.split(":").join(""));
    const numExit = parseInt(exit.split(":").join(""));
    const timeInKintechen = numExit - numEntry;
    setTimeInK(timeInKintechen);
  };
  const recoverID = (idOrder) => {
    setId(idOrder);
    console.log(id);
  };
  return {
    dataKitchen,
    updateApi,
    timeInKitchen,
    timeInK,
    open,
    handleOpen,
    handleClose,
    recoverID,
    id
  };
};
