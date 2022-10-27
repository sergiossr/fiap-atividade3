import axios from "axios";


const ApiConn = axios.create({
  baseURL: "http://localhost:8080",
});


export default ApiConn;