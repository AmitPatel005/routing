import React, { useState } from 'react'
import InputField from '../inputFild/Input'
import {  useMutation, useQueryClient } from '@tanstack/react-query'
import { addUserDetails } from './userDetails'
import { useNavigate } from 'react-router-dom'


const AddUser = () => {
    const queryClient = useQueryClient()

    
    const [data, setData]= useState(
        {
            name: "",
            technology: "",
            company: "",
            description: ""
          }
    )
    const navigate=useNavigate()

    const addDetails= useMutation({
        mutationFn:addUserDetails,
        onSuccess:()=>{
            alert("added user")
            navigate("/dashBoard")
            
            queryClient.invalidateQueries(["users"]) 
        }
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        addDetails.mutate(data)

    }

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }


  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <InputField
        label="name"
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <InputField
        label="technology"
        type="text"
        name="technology"
        value={data.technology}
        onChange={handleChange}
        placeholder="Enter your technology"
      />
      <InputField
        label="company"
        type="text"
        name="company"
        value={data.company}
        onChange={handleChange}
        placeholder="Enter your company"
      />
      <InputField
        label="description"
        type="description"
        name="description"
        minLength={20} 
        value={data.description}
        onChange={handleChange}
        placeholder="Enter your description"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        submit
      </button>
    </form>
    </>
  )
}

export default AddUser
