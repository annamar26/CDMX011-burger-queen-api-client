import React, { Fragment } from 'react'
import MenusCointeiner from './MenusCointeiner'
import { getUser } from '../lib/FirebaseAut'

const Menu = () => {
    const {email}= getUser()
    return (
        <Fragment >
            <h1 id='MenuH1'>Menu </h1>
            <h2 align='center' color='secondary'>Bienvenido {email}</h2>
            <MenusCointeiner />
        </Fragment>
    )
}

export default Menu
