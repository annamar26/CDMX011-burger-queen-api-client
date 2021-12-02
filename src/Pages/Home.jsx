import React, { Fragment } from 'react'
import RoleOptions from './Components/RoleOptions'
import Cookies from "universal-cookie"
const cookies = new Cookies()

const Home = ({options, header}) => {

    return (
        <Fragment >
            <h1 id='MenuH1'>{header} </h1>
            <h2 align='center' color='secondary'>Bienvenido {cookies.get('name')} </h2>
            <RoleOptions options={options}/>
           
        </Fragment>
    )
}

export default Home
