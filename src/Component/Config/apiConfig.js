import axios from "axios";

export const API_URL="https://fooddeliverybackend-production-2a4b.up.railway.app";
export const api=axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})