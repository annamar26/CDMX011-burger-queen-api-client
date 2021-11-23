
import '../src/App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, 
Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu'
import Logo from '../src/images/Logo.png'
import moment from 'moment';
import MenuDesayuno from './components/MenuDesayuno';
import MenuComida from './components/MenuComida';
import OrdersPage from './components/OrdersPage';
import { useGetOrders } from './hooks/useGetOrders';






function App() {
  const { pendingOrders, ordersToDeliver} = useGetOrders()
const [time, setTime] = useState(Date.now());

useEffect(() => {
   setInterval(() => setTime(Date.now()), 1000);

}, []); 

  return (
    <BrowserRouter className="App">
       <header>
        <img src={Logo} alt=""></img>
        
          <h1>Burguer Queen</h1>
     
        <p>{moment(time).format('DD/MM/YYYY, h:mm:ss a')}</p>

       
      </header>
  <Routes>
  <Route exact path='/' element={<Login />} />
  <Route exact path='/menu' element={<Menu name="Desayuno"/>} />
  <Route exact path='/menu/desayuno' element={<MenuDesayuno />} />
  <Route exact path='/menu/comida' element={<MenuComida />} />
  <Route exact path='/cocina' element={<OrdersPage orders={pendingOrders} header={"Cocina"}/>} />
  <Route exact path='/pedidos' element={<OrdersPage orders={ordersToDeliver} header={"Pedidos Listos"}/>} />
  
   </Routes>
 
    </BrowserRouter>
  );
}

export default App;
