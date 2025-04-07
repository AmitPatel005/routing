import axios from "axios";




const loginApi= axios.create({
    baseURL:"https://dummyjson.com/auth"
})

export const loginUser = async ({username,password})=>{
    console.log("login user",{username,password})
    const response =await loginApi.post("/login",{username,password})
    return response.data
}
