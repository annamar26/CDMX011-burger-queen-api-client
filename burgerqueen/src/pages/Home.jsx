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
  const userName = cookies.get("name").firstName ;
 
  return (
    <>
    <Banner>
    <p>{userName}<img src={camarera} alt="mesero" /></p>
            </Banner>
      <div className="menu-btns" id="home">
        <button onClick={desyunos}>Desayunos</button>
        <button onClick={comida}>Comida</button>
      </div>
    </>
  );
}

export default Home;
