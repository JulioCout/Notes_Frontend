import axios from "axios"

export const api = axios.create({
    baseURL: "https://julionotes-api.herokuapp.com"
})