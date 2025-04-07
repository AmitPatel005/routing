// import axios from "axios";

// const loginApi= axios.create({
//     baseURL:"https://dummyjson.com/auth"
// })
import { loginApi } from "../constant/Instance"

export const loginUser = async ({username,password})=>{
    try{
        console.log("login user",{username,password})
    const response =await loginApi.post("/login",{username,password})
    return response.data
    }catch(err){
        alert("check username password",err)
    }
}
