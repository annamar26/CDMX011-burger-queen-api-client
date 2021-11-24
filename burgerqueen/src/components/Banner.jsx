import logo from "../images/logo.png";
import moment from "moment";
import { usePostProducts } from "../hooks/usePostProduct";
function Banner() {
  const { time } = usePostProducts();

  return (
    <div>
      <header>
        <img src={logo} alt="Error al cargar imagen" id="logo" />
        <section>
          <p id="header-text">POS System</p>
          <section id="time">
            <p>{moment().format('l')}</p>
            <p>{moment(time).format('LT')}</p>
          </section>
        </section>
      </header>
    </div>
  );
}

export default Banner;
