import axios from "axios";

const instance = axios.create({
    //the api url
    baseURL: "http://localhost:5001/amzon-clone-41385/us-central1/api"
});

export default instance;