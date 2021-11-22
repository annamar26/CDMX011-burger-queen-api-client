import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDataKitchen } from "../hooks/useDataKitchen";
  

function Kitchen() {

  const { dataKitchen, updateApi } = useDataKitchen();
  return (
    <div className="cards-kitchen">
      {dataKitchen.map((item, i) => (
        <Card key={i} sx={{ width: 275, margin: 2 }}>
          <CardContent>
            <h1>Cliente: {item.client}</h1>
            <p>Orden:</p>
            {item.products.map((elem, j) => (
              <section key={j}>
                <p>{elem.name} </p>
                <p>Cant: {elem.quantity}</p>
              </section>
            ))}
            <p>Entrada: {item.entry}</p>
            <p>Salida: {item.exit}</p>
            <p>Estado: {item.status}</p>
            <button onClick={()=>updateApi(item.id)}>
              Lista</button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


export default Kitchen;


