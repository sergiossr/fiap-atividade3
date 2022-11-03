import API from "../Common/api";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const postCliente = (payload) => API.post("/cliente/create", payload);
const getCliente = () => API.get("/clientes");

const exportedObject = {
    postCliente,
    getCliente
};
export default exportedObject;