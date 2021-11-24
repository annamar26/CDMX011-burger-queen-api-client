import Axios from "axios";
export const getOrders = async() => {
    const resp = await Axios({
        url: "https://fake-server-burguer-queen.herokuapp.com/orders",
    });;

    return resp.data

};
export const getProducts = async() => {
    const resp = await Axios({
        url: "https://fake-server-burguer-queen.herokuapp.com/products",
    });
    console.log(resp.data)
    return resp.data
}
export const orderToKitchen = async(order) => {

    return await Axios.post("https://fake-server-burguer-queen.herokuapp.com/orders", order);


};
export const actualizar = async(objeto, id) => {


    return await Axios.put(`https://fake-server-burguer-queen.herokuapp.com/${id}`, objeto)







};