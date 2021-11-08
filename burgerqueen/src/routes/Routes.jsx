import '../css/App.css'
import Login from '../pages/Login';
import Home from '../pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function RoutesPath() {//Enrutado
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/home" element={<Home/>} />
    </Routes>
    </Router>
  );
}

export default RoutesPath;
