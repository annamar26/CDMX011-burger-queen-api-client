import React from 'react'
import { useComanda } from '../hooks/useComanda'

function Comanda() {
    const {comanda } = useComanda;
    
    return (
        <div>
            <section id="comanda">
          {comanda.map((p) => (
            <ul key={p.id}>
              <li>{p.name}</li>
              <li>{" $" + p.price}</li>
            </ul>
          ))}
        </section>
        </div>
    )
}

export default Comanda
