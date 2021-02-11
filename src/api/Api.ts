import axios from "axios";
import {BASE_URL} from "./config";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})


API.interceptors.request.use(
    function(config) {
        // Do something before request is sent

        config.headers.common["Authorization"] = localStorage.getItem("ACCESS_TOKEN")
        // console.log("interceptor worked! Token: ", token)
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    },
);


export default API
