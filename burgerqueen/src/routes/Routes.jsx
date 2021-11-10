import '../css/App.css'
import Login from '../pages/Login';
import Home from '../pages/Home';
import logo from "../images/logo.png";
import { useState, useEffect } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Breakfast from '../pages/Breakfast';

function RoutesPath() {//Enrutado
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    setInterval(()=>setTime(Date.now()), 1000)
    return () => {
    }
  }, []);

  return (
    <Router>
<header>
<img src={logo} alt="Error al cargar imagen" id="logo" />
<section>
  <p id="header-text">POS System</p>
  <section id="time">
  <p>{moment(time).format('l')}</p>
  <p>{moment(time).format('LTS')}</p>
  </section>
</section>
</header>
   <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/breakfast" element={<Breakfast/>} />

    </Routes>
    </Router>
  );
}

export default RoutesPath;
