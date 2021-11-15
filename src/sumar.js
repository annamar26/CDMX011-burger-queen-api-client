import { useState } from "react";


const getTotal = (precio) => {
    const { suma, setSuma } = useState(0);
    setSuma(suma + precio);
    return { suma }
};
export default { getTotal }