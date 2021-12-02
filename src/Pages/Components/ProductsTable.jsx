import React, {Fragment} from 'react'
import {Button, Typography, Paper, TableContainer, TableBody, TableRow, TableCell, TableHead, Table } from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useState } from "react";
import DefaultModal from './DefaultModal';
  import useSetOpenModal from "../../hooks/useSetOpenModal";
import CloseIcon from '@mui/icons-material/Close';

import { useGetProducts } from '../../hooks/useGetProducts';
import { EditProductForm } from './EditProductForm';
const style = {
  position: "absolute",
  top: "5%",
  left: "95%",
  transform: "translate(-50%, -50%)",
  

};
const ProductsTable = ({array}) => {
const [object, setObject]= useState({});
const[edit, setEdit]= useState(false)
  const { handleOpen, open, handleClose} =  useSetOpenModal();
  const {deleteProduct} = useGetProducts()



    return (
        <div id='employeeTable'>
            <TableContainer  align='center' component={Paper}>
              <Table  align='center' size="small" aria-label="a dense table">
                <TableHead
                  sx={{ maxWidth: 100 }}
                  fontSize="large"
                  color="primary"
                  id="tableHeader"
                >
                  <TableRow align="center" width="100" fontSize="large">
                  <TableCell width="5" align="center">
                      Editar
                    </TableCell>
                    <TableCell width="5" align="center">
                      Borrar
                    </TableCell>
                  <TableCell width="5" align="center">
                      ID
                    </TableCell>
                    <TableCell width="100" align="center">
                      Producto
                    </TableCell>
                    <TableCell width="100" align="center">
                     Precio
                    </TableCell>
                    
                    <TableCell width="8" align="center">
                     Categoría
                    </TableCell>
                    <TableCell width="8" align="center">
                     Fecha de ingreso
                    </TableCell>
                    
                  </TableRow>
                </TableHead>

                <TableBody>
                  {array.map((item, index) => (
                    <TableRow key={index}>
                           <TableCell width="5" align="center">
                               
                      <EditRoundedIcon  size="small"
        onClick={() => {
          handleOpen();  
          setObject(item) 
          setEdit("si")}}/> 
         
                   </TableCell>
                      <TableCell width="5" align="center">
                      
                      <DeleteRoundedIcon 
                      onClick={() => {
                        handleOpen();  
                        setObject(item) 
                        setEdit("no")}}/> 
                      </TableCell>
                         <TableCell width="5" align="center">
                     {item.id}
                    </TableCell>
                      <TableCell width="100" align="center">
                        {item.name}
                      </TableCell>
                      <TableCell width="100" align="center">
                        {item.price}
                      </TableCell>
                     
                      <TableCell width="8" align="center">
                       {item.type}
                      </TableCell>
                      <TableCell width="8" align="center">
                      {item.dateEntry}
                      </TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
           
            <DefaultModal open={open} handleClose={handleClose} >
           
              {edit=== "si" ?<Fragment>
             <CloseIcon sx={style} onClick={handleClose}/>
             <EditProductForm  header={"Editar producto"} item={object} handleClose={handleClose}/> </Fragment>:
              <Typography align='center' id="modal-modal-title" variant="h6" component="h2">
              ¿Estas seguro de querer eliminar {object.name}?
              <section id='modalButtons'>
          <Button
          align='center'
           variant="contained"
           margin="large"
           color="secondary"
           size='small'
            onClick={async() => {
             
             await deleteProduct(object.id)
              handleClose()
            }}
          >Aceptar</Button>
          <Button
          align='center'
           variant="contained"
           margin="large"
           color="secondary"
           size='small'
            onClick={handleClose}
          >Cancelar</Button></section>
            </Typography>}
             </DefaultModal>
           

        </div>
    )
}

export default ProductsTable