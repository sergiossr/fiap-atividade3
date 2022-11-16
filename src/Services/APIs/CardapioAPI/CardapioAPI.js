import API from "../Common/api";

const getCardapio = () => API.get("/pizzas");

const promiseCardapio = {
    getCardapio
};

export default promiseCardapio;