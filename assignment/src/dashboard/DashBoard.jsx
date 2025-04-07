import React from 'react'
import FatchUser from './FatchUser'
import AddUser from './AddUser'
import ShowUserDetails from './ShowUserDetails'

const DashBoard = () => {
  return (
    <div className="flex space-x-6 p-6">
      <div className="flex-1">
        <FatchUser />
      </div>
      <div className="flex-1">
        <AddUser />
      </div>
    </div>
  )
}

export default DashBoard
