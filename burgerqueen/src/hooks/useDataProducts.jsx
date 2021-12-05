import { useState } from 'react'
import { dataApi } from '../api/dataApi';

export const useDataProducts = () => {
  const [product, setProduct] = useState({
  name:"",
  price:"",
  image:"",
  type:"",
  dateEntry:"",
})

    const handleProductChange = (event) => {
      console.log(event.target.value)
        setProduct({
          ...product,
          [event.target.name]: event.target.value,
          [event.target.name]: event.target.value,
          [event.target.name]: event.target.value,
          [event.target.name]: event.target.value,
          [event.target.name]: event.target.value,
        });
      };
      const postDataProducts = async () => {
        await dataApi.post("http://localhost:3001/products", {
          id: "",
          name: product.name,
          price: product.price,
          image: product.image,
          type: product.type,
          dateEntry: product.dateEntry,
          quantity: 1
        });
      };
    
    return {
        handleProductChange,
        postDataProducts,
    }
}
