import { Fragment, useState } from "react";
import axios from "axios";

function Home() {
const [showResults, setShowResults] = useState(false);

  function Breakfast() {
  axios.get('http://localhost:3001/products')
  .then(response=>{
    console.log(response.data)
  })
  .catch(err=>console.log(err))
}

function desyunos(e) {
  e.preventDefault();
  window.location.href = "./breakfast";

}

  return (
    <div className="menu">
      <button onClick={desyunos}>Desayunos</button>
     </div>
      
  );
}

export default Home;
