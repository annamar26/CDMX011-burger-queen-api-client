import { Fragment } from "react"

function Breakfast() {
    function regresar(e) {
        e.preventDefault();
        window.location.href = "./home";
      }
    return (
        <Fragment>
    <div className="menu">
        <button>Example</button>
        <button>Example</button>
        <button>Example</button>
        <button>Example</button>
        <button>Example</button>
      </div>
      <div>
          <button onClick={regresar}>Regresar</button>
      </div>
      </Fragment>
      )
    }

export default Breakfast