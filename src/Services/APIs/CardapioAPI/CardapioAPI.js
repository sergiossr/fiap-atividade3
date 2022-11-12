import API from "../Common/api";

const getCardapio = () => API.get("/pizzas");
const getPizza = (id) => API.get("/pizza/"+id);

const exportedObject = {
    getCardapio,
    getPizza
};
export default exportedObject;