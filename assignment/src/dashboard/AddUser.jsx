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
    (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
              <h2 className="text-2xl font-bold text-center text-gray-800">Add User</h2>

              <InputField
                  label="Name : "
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border border-gray-300 p-2 rounded-lg w-full"
              />

              <InputField
                  label="Technology : "
                  type="text"
                  name="technology"
                  value={data.technology}
                  onChange={handleChange}
                  placeholder="Enter your technology"
                  className="border border-gray-300 p-2 rounded-lg w-full"
              />

              <InputField
                  label="Company : "
                  type="text"
                  name="company"
                  value={data.company}
                  onChange={handleChange}
                  placeholder="Enter your company"
                  className="border border-gray-300 p-2 rounded-lg w-full"
              />

              <InputField
                  label="Description : "
                  type="text"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  placeholder="Enter your description"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  minLength={20}
              />

              <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                  Submit
              </button>
          </form>
      </div>
  ))
}

export default AddUser
