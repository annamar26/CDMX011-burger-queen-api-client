import { Button } from '@mui/material'
import React, { Fragment } from 'react'

function MenusCointeiner() {
    return (
        <Fragment className='container'>
            <Button
               color='secondary'
               id="Desayuno"
               variant="contained"
               margin="large"
               type="submit"
               data-testid='Desayuno'>Desayuno

                
            </Button>
        </Fragment>
    )
}

export default MenusCointeiner
