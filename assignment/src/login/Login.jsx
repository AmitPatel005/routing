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
    <>
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <InputField
        label="user name"
        type="username"
        name="username"
        value={data.username}
        onChange={handleChange}
        placeholder="Enter your username"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </form>
    </>
  )
}

export default Login
