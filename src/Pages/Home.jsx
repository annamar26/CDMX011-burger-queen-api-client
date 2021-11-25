import React, { Fragment } from 'react'
import MenusCointeiner from './Components/RoleOptions'
import { getUser } from '../lib/FirebaseAut'

const Home = ({options, header}) => {
    const {email}= getUser()
    return (
        <Fragment >
            <h1 id='MenuH1'>{header} </h1>
            <h2 align='center' color='secondary'>Bienvenido {email}</h2>
            <MenusCointeiner options={options}/>
        </Fragment>
    )
}

export default Home
