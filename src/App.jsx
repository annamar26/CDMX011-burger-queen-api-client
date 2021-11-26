import "../src/App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Logo from "../src/images/Logo.png";
import moment from "moment";
import { useGetOrders } from "./hooks/useGetOrders";
import MakeOrder from "./Pages/MakeOrder";
import { useGetProducts } from "./hooks/useGetProducts";
import Home from "./Pages/Home";
import { useSetTime } from "./hooks/useSetTime";
import GridOrders from '../src/Pages/GridOrders'
import {Edit} from '../src/Pages/Edit'
import Form from '../src/Pages/Components/Form'


function App() {
  const { pendingOrders, ordersToDeliver, updateOrder} = useGetOrders();
  const { desayuno, comida } = useGetProducts();
  const {time}= useSetTime()


  return (
    <BrowserRouter className="App">
      <header>
        <img src={Logo} alt=""></img>

        <h1>Burguer Queen</h1>

        <p>{moment(time).format("DD/MM/YYYY, h:mm:ss a")}</p>
      </header>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/menu"
          element={<Home options={["Desayuno", "Comida"]} header={"Menu"} />}
        />
        <Route
          exact
          path="/menu/desayuno"
          element={<MakeOrder products={desayuno} />}
        />
        <Route
          exact
          path="/menu/comida"
          element={<MakeOrder products={comida} />}
        />
        <Route
          exact
          path="/cocina"
          element={<GridOrders orders={pendingOrders} header={"Cocina"} updateOrder={updateOrder}/>}
        />
        <Route
          exact
          path="/pedidos"
          element={
            <GridOrders orders={ordersToDeliver} header={"Pedidos Listos"}  updateOrder={updateOrder}/>
          }
        />
        <Route
          exact
          path="/admin"
          element={
            <Home options={["Agregar Producto", "Editar/Eliminar Producto","Agregar empleado", "Editar/Eliminar empleado"]} header={"Consola"} />
          }
        />
        <Route
          exact
          path="/Agregar%20empleado"
          element={
            <Edit content={<Form />} />
          }
        />
        
 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
