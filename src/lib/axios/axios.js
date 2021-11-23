import Axios from "axios";
export const getOrders = async() => {
    const resp = await Axios({
        url: "http://localhost:4000/orders",
    });;

    return resp.data

};
export const getProducts = async() => {
    const resp = await Axios({
        url: "http://localhost:4000/products",
    });
    return resp.data
}
export const orderToKitchen = async(order) => {

    return await Axios.post("http://localhost:4000/orders", order);


};