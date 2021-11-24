import "../src/App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Home from "../src/Pages/Home/Home";
import Logo from "../src/images/Logo.png";
import moment from "moment";
import MakeOrder from "../src/Pages/MakeOrder/MakeOrder";
import GridContainer from "../src/Pages/GridContainer/GridContainer";
import { useGetOrders } from "./hooks/useGetOrders";
import { useGetProducts } from "./hooks/useGetProducts";
import { actualizar } from "./lib/axios/axios";

function App() {
  const { pendingOrders, ordersToDeliver } = useGetOrders();
  const { desayuno, comida } = useGetProducts();
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    setInterval(() => setTime(Date.now()), 1000);
  }, []);

  return (
    <BrowserRouter className="App">
      <header>
        <img src={Logo} alt=""></img>

        <h1>Burguer Queen</h1>

        <p>{moment(time).format("DD/MM/YYYY, h:mm:ss a")}</p>
      </header>
      <Routes>
        <Route exact path="/" element={<Login header={"Inicia sesión"} />} />
        <Route
          exact
          path="/menu"
          element={<Home header={"Menú"} options={["desayuno", "comida"]} />}
        />
        <Route
          exact
          path="/desayuno"
          element={<MakeOrder products={desayuno} />}
        />
        <Route
          exact
          path="/comida"
          element={<MakeOrder products={comida} />}
        />
        <Route
          exact
          path="/cocina"
          element={<GridContainer orders={pendingOrders} header={"Cocina"} actualizar={actualizar} />}
        />
        <Route
          exact
          path="/pedidos"
          element={
            <GridContainer orders={ordersToDeliver} header={"Pedidos Listos"} />
          }
        />
        <Route
          exact
          path="/admin"
          element={
            <Home header={"Dashboard"} options={["productos", "empleados"]} />
          }
        />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
