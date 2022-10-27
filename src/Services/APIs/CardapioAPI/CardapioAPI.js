import API from "../Common/api";

const getCardapio = () => API.get("/pizzas");
// const getPersons = (payload) =>
//   api.post("/persons/getPersons", payload, { headers: { "Content-Type": "application/json" } });


const exportedObject = {
    getCardapio
};
export default exportedObject;