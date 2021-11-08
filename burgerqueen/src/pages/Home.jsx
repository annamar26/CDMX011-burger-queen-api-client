import Cookies from "universal-cookie";

const cookies = new Cookies();

function Home() {
  console.log("id: " + cookies.get("id"));
  console.log("name: " + cookies.get("name"));
  console.log("email: " + cookies.get("email"));

  if (!cookies.get("email")) {
    window.location.href = "./";
  }
  const logOut = (e) => {
    e.preventDefault();
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("email", { path: "/" });
    window.location.href = "./";
  };

  return (
    <div>
      Holi crayoli soy el Home
      <form onSubmit={logOut}>
        <button type="submit">Pínchame</button>
      </form>
    </div>
  );
}
export default Home;
