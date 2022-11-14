import API from "../Common/api";

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

const postPedido = (payload) => API.post("/pedido",payload);

const exportedObject = {
    postPedido
  };
  export default exportedObject;