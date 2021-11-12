import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Comanda from './Comanda'
import Axios from "axios";
function ButtonsDesayuno() {
  const regresar= ()=>{
    window.location.href='/menu'
  }
    const [desayuno, setDesayuno] = useState([]);
    useEffect(() => {
      Axios({
        url: "http://localhost:4000/products",
      })
        .then((response) => {
          setDesayuno(response.data.desayuno);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setDesayuno]);
  
    return (
    <div className='contenedorBotones'><Comanda  />
        <section id="desayunoButttons">
          {desayuno.map((item) => (
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
