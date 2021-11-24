import Axios from "axios";
export const getOrders = async() => {
    const resp = await Axios({
        url: "https://my-json-server.typicode.com/annamar26/CDMX011-burger-queen-api-client/orders",
    });;

    return resp.data

};
export const getProducts = async() => {
    const resp = await Axios({
        url: "https://my-json-server.typicode.com/annamar26/CDMX011-burger-queen-api-client/products",
    });
    return resp.data
}
export const orderToKitchen = async(order) => {

    return await Axios.post("https://my-json-server.typicode.com/annamar26/CDMX011-burger-queen-api-client/orders", order);


};
export const actualizar = async(objeto, id) => {


    return await Axios.put(`https://my-json-server.typicode.com/annamar26/CDMX011-burger-queen-api-client/orders/${id}`, objeto)







};