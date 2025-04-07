import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from './api'
import InputField from '../inputFild/Input'


const Login = () => {
    const navigate = useNavigate()
    const [data,setData]=useState({
        username:"",
        password:""
    })

    
    const mutateLogin=useMutation({
        mutationFn:loginUser,
        onSuccess:(data)=>{
            console.log("login success",data)
            localStorage.setItem("token",data.accessToken)

            navigate("/dashBoard")
        }
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        mutateLogin.mutate(data)
        
    }

    const handleChange =(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <InputField
                    label="Username : "
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-6">
                <InputField
                    label="Password : "
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            >
                Login
            </button>
        </form>
    </div>
</div>
  )
}

export default Login
