
function Home() {
function desyunos(e) {
  e.preventDefault();
  window.location.href = "./breakfast"
}
function comida(e) {
  e.preventDefault();
  window.location.href = "./lunch";
}
  return (
    <div className="menu-btns" id="home">
      <button onClick={desyunos}>Desayunos</button>
      <button onClick={comida}>Comida</button>
     </div>
      
  );
}

export default Home;
