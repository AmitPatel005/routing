import axios from "axios";

const api = axios.create({
    baseURL:"https://67f2043dc733555e24ae8de4.mockapi.io"
})

export const fatchUsers=async ()=>{
    const res = await api.get("/user")
    return res.data
}

export const addUserDetails=async(data)=>{
    const res = await api.post("/user",data)
    return res.data
}

export const userDetail=async(id)=>{
    const res=await api.get(`/user/${id}`)
    return res.data
}
