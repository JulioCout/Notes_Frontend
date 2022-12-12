import axios from "axios"

export const api = axios.create({
    baseURL: "https://julionotes-api.onrender.com"
})