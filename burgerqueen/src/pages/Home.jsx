import Cookies from "universal-cookie";

const cookies = new Cookies();

function Home() {
    console.log("id: "+cookies.get("id"));
    console.log("email: "+cookies.get("email"));

    return (
   <div>Holi crayoli estoy enRutada</div>
    );
  }
  export default Home;