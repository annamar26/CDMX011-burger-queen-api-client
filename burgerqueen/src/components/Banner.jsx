import logo from "../images/logo.png";
import moment from "moment";
import { useTime } from "../hooks/useTime";

function Banner() {
  const { time } = useTime();

  return (
    <div>
      <header>
        <img src={logo} alt="Error al cargar imagen" id="logo" />
        <section>
          <p id="header-text">POS System</p>
          <section id="time">
            <p>{moment(time).format("l")}</p>
            <p>{moment(time).format("LTS")}</p>
          </section>
        </section>
      </header>
    </div>
  );
}

export default Banner;
