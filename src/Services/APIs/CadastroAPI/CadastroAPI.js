import API from "../Common/api";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const postCliente = (payload) => API.post("/cliente/create", payload);
const getClientes = () => API.get("/clientes");
const getCliente = (id) => API.get("/cliente/" + id);

const exportedObject = {
  postCliente,
  getCliente,
  getClientes
};
export default exportedObject;