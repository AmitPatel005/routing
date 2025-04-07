import axios from "axios";

export const api = axios.create({
    baseURL:"https://67f2043dc733555e24ae8de4.mockapi.io"
})

export const loginApi= axios.create({
    baseURL:"https://dummyjson.com/auth"
})