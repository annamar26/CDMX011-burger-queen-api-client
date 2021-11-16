import { useState } from "react"

const useGetClient = () => {
    const [cliente, setCliente] = useState("");
    const obtenerNombre = (nombre) => {
        setCliente(nombre)
    }

    return {
        obtenerNombre,
        cliente
    }
}

export default useGetClient