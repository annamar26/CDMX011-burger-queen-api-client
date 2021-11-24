import React, { Fragment } from 'react'
import RoleOptions from '../../components/RoleOptions'
import { getUser } from '../../lib/FirebaseAut'

const Home = ({header, options}) => {
    const {email}= getUser()
    return (
        <Fragment >
            <h1 id='MenuH1'>{header} </h1>
            <h2 align='center' color='secondary'>Bienvenido {email}</h2>
            <RoleOptions options={options} />
        </Fragment>
    )
}

export default Home
