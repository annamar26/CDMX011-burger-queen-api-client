import { useState } from "react";
const useGetSuma = () => {
    const [suma, setSuma] = useState(0);

    const sumar = (price) => {
        setSuma(price + suma);

    };


    return {
        suma,
        sumar
    }
}
export default useGetSuma;