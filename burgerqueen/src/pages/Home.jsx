import camarera from "../images/camarera.png";
import Banner from "../components/Banner";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Home({ loggedUser }) {
  function desyunos(e) {
    e.preventDefault();
    window.location.href = "./breakfast";
  }
  function comida(e) {
    e.preventDefault();
    window.location.href = "./lunch";
  }
 let userLoggged =[];
  const cook = cookies.get("name");
  for(const [key, value] of Object.entries(cook)){
    userLoggged.push(value);
  }
  
  return (
    <>
    <Banner>
    <p>{userLoggged[0]}<img src={camarera} alt="Error al cargar imagen" /></p>
    </Banner>
      <div className="menu-btns" id="home">
        <button onClick={desyunos}>Desayunos</button>
        <button onClick={comida}>Comida</button>
      </div>
    </>
  );
}

export default Home;
