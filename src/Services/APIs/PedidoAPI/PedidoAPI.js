import API from "../Common/api";

const postPedido = (payload) => API.post("/pedido",payload);

const exportedObject = {
    postPedido
};
export default exportedObject;