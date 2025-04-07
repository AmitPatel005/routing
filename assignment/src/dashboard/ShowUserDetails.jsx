import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { userDetail } from './userDetails'
import { useParams } from 'react-router-dom'

const ShowUserDetails = () => {
    const {id}=useParams()
    const {data ,isLoading,error} =useQuery({
        queryKey:["users"],
        queryFn:()=>userDetail(id)
    })
    if (isLoading) return <p>Loading user...</p>;
     if (error) return <p>Error fetching user</p>;
  return (
    
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-4">
    <h2 className="text-2xl font-bold text-gray-800">Name: {data.name}</h2>
    <h3 className="text-lg text-blue-600">Technology: {data.technology}</h3>
    <h3 className="text-lg text-green-600">Company: {data.company}</h3>
    <p className="text-gray-600">Description: {data.description}</p>
  </div>
  
    
  )
}

export default ShowUserDetails
