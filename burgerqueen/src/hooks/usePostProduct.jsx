import { useState } from "react";
import { dataApi } from "../api/dataApi";

export const usePostProducts = () => {
  const [dataPost, setDataPost] = useState([]);
  const [clientName, setClientName] = useState("");

const clientNameFn = (value) =>{
  setClientName(value)
}

  const postProducts = (content, client) => {
    let post = [];
    for (let i = 0; i < content.length; i++) {
      post.push(content[i].name);
    }

    dataApi
      .post("http://localhost:3001/orders", {
        id: client,
        products: post,
        status: "Pendiente",
      })
      .then((res) => {
        setDataPost(res.data);
      });
  };

  return {
    postProducts,
    dataPost,
    clientNameFn,
    clientName
  };
};
