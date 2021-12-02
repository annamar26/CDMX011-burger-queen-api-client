import Button from "@mui/material/Button";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import emailIco from "../../images/emailIco.png";

import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Typography, MenuItem } from "@mui/material";
import useSetOpenModal from "../../hooks/useSetOpenModal";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import { red, green } from "@mui/material/colors";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DefaultModal from "./DefaultModal"
import {useGetProducts} from "../../hooks/useGetProducts"

export const EditProductForm = ({header, item, handleClose}) => {
  
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [image, setImage] = useState(null)
    const [type, setType] = useState(item.type);
  
  
  const { open, handleOpen, handleContent, content} = useSetOpenModal();
  const {updateProduct} = useGetProducts()
  
    return (
        <form
        onSubmit={(e) => {
          e.preventDefault()
         
        
 updateProduct(item.id,{name, price, image, type})
  .then(()=>{
    handleContent("Producto actualizado correctamente")

    setTimeout(handleOpen, 2000);
  })
  .catch(()=>{
    handleContent("Ocurrió un error, intente nuevamente")
    setTimeout(handleOpen, 2000);
  })
  
  
            
        
  
        }}
        className="form"
        id="form2"
        data-testid="form"
      >
        <h1>{header}</h1>
       
        <TextField
          fullWidth
          editable='true'
          autoFocus
          color="secondary"
          margin="normal"
          variant="outlined"
          id="name"
          type="text"
          label="Nombre completo del empleado"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" id="show">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          editable='true'
          color="secondary"
          margin="normal"
          variant="outlined"
          id="price"
          type="number"
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" id="show">
                <img src={emailIco} alt=""></img>
              </InputAdornment>
            ),
          }}
        />
        <TextField
        editable='true'
          fullWidth
          color="secondary"
          margin="normal"
          variant="outlined"
          id="image"
          type="file"
          helperText='Imagen del producto'
          placeholder=''
          value={image}
          onChange={(e) => setImage(e.target.value)}
         
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />
  
        <TextField
          id="outlined-select-currency"
          select
          label="Categoría"
          onChange={(e) => setType(e.target.value)}
          fullWidth
          placeholder="Categoría"
          color="secondary"
          margin="normal"
          value={item.type}
            
          
        >
          
            <MenuItem value={"Desayuno"}>
             Desayuno
            </MenuItem>
            <MenuItem value={"Comida"}>
             Comida
            </MenuItem>
        
        </TextField>
     
          <Button
          align='center'
           variant="contained"
           margin="large"
           color="secondary"
           size='small'
           type='submit'
           
          >Actualizar</Button>
         
       
           <DefaultModal open={open} handleClose={handleClose}>
             
            {content === "Producto actualizado correctamente" ? (
              <CheckCircleIcon
                className='modal-icon'
                fontSize="large"
                sx={{ color: green[500] }}
              />
            ) : (
              <ErrorOutlineRoundedIcon
              className='modal-icon'
                fontSize="large"
                sx={{ color: red[500] }}
              />
            )}
            <Typography
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {content}
          </Typography>
  
          <section id="modalButtons">
            <Button
              align="center"
              variant="contained"
              margin="large"
              color="secondary"
              size="small"
              type="button"
              onClick={handleClose}
            >
              OK
            </Button>
          </section>
           
       
        </DefaultModal> 
      </form>
    );
    
}
