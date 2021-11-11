import { Button } from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import Comanda from './Comanda'
import Axios from "axios";
function ButtonsDesayuno() {
  const regresar= ()=>{
    window.location.href='/menu'
  }
    const [products, setProducts] = useState([]);
    useEffect(() => {
      Axios({
        url: "http://localhost:4000/desayuno",
      })
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setProducts]);
  
    return (
    <div className='contenedorBotones'><Comanda  />
        <section id="desayunoButttons">
          {products.map((item) => (
            <div key={item.id}>
              <Button variant="contained" margin="normal" color="secondary">
        {item.name} {'$'+ item.price}
      </Button>
              
            </div>
          ))}
        </section>
        <Button  onClick={regresar}id='regresarMenu' variant="contained" margin="large" color="secondary">
          Regresar
        </Button>
     </div>
    );
  }




export default ButtonsDesayuno;
