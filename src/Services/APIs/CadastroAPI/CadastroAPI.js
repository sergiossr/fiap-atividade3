import API from "../Common/api";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const postCliente = (data) => API.post("/cliente/create", data);
const getCliente = () => API.get("/clientes");

const exportedObject = {
    postCliente,
    getCliente
};
export default exportedObject;