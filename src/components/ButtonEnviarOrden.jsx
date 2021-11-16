import { Button } from '@mui/material';
import React, { Fragment } from 'react'
import {useSetOrder} from '../hooks/useSetOrder';
import useSetComanda  from '../hooks/useSetComanda'
import useGetClient from "../hooks/useGetClient";

function ButtonEnviarOrden() {
    const { orderToKitchen } = useSetOrder()
    const {order }= useSetComanda()
    const {cliente }= useGetClient();
    return (
        <Fragment>
           <Button onClick={()=>{orderToKitchen(order, cliente)}}
            variant="contained"
            margin="large"
            color="secondary"
            size='small'
            id='enviarOrden'>Order</Button> 
        </Fragment>
    )
}

export default ButtonEnviarOrden
