import axios from "axios";
import store from "../modules/store";
import {BASE_URL} from "./config";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})


API.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        // console.log(store.getState().auth.token)
        // config.headers.Authorization = token
        // console.log("interceptor worked! Token: ", token)
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    },
);


export default API
