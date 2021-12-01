import { dataApi } from "./dataApi";
import Cookies from "universal-cookie";

const LoginJSON = () => {
  const cookies = new Cookies();

  const getUsers = async (email, password) => {
    await dataApi
      .get("http://localhost:3001/users", {
        params: { email: email, password: password },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          let res = response[0];
          cookies.set("id", res.id, { path: "/" });
          cookies.set("name", res.name, { path: "/" });
          cookies.set("role", res.role, { path: "/" });
          cookies.set("email", res.email, { path: "/" });
          cookies.set("password", res.password, { path: "/" });
          alert(`Bienvenido ${res.name.firstName}`);
          if (res.role.kitchen) {
            window.location.href = "./kitchen";
          } else if (res.role.waiter) {
            window.location.href = "./home";
          } else if (res.role.admin) {
            window.location.href = "./admin";
          }
        } else {
          alert("Tas mal carnal");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

 /* useEffect(() => {
    returnPage()
  }, []);

  const returnPage = ()=>{
    console.log(cookies.get("role"))
    if(cookies.get("role") === "Cocinero"){
      console.log("Aqui estoy")
     window.location.href = "./kitchen";
    };
  }*/

  const getCookies = () => {
    /*console.log("id: " + cookies.get("id"));
    console.log("name: " + cookies.get("name"));
    console.log("email: " + cookies.get("email"));
    console.log("password: " + cookies.get("password"));
*/
    if (!cookies.get("email")) {
      window.location.href = "./";
    }
  };

  const removeCookies = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("role", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("password", { path: "/" });
    window.location.href = "./";
  };
  return {
    getUsers,
    getCookies,
    removeCookies,
  };
};

export default LoginJSON;
