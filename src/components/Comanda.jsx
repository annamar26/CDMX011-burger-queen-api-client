import React, { useState } from "react";
import { Fragment } from "react";
import { Card } from "@mui/material";
import CardContent from '@mui/material/CardContent';



function Comanda() {
 const [contenido, setContenido] = useState([])
 const agregarComida = (e, producto, precio)=>{
   e.preventDefault()
 console.log(producto, precio)
 }
  return (
    <Fragment >
         <Card  id='Comanda' variant='outlined' 
         >
             <CardContent>{contenido}
             </CardContent>
      
      
    </Card>
    </Fragment>
  );
}

export default Comanda;
