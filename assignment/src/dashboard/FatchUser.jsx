import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fatchUsers } from "./userDetails";
import { NavLink, useNavigate } from "react-router-dom";
import Logout from "./Logout";


const FatchUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fatchUsers,
  });
  console.log("data", data);
  const navigate =useNavigate()

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;
  return (
    <>
  <div className="flex flex-col items-center mt-6 space-y-4">
    <ul className="space-y-2">
      {data.map((user) => (
        <li key={user.id} className="text-center">
          <NavLink
            to={`/details/${user.id}`}
            className="text-blue-600 hover:underline"
          >
            {user.id} - {user.name}
          </NavLink>
        </li>
      ))}
    </ul>

    <button
      onClick={() => navigate("/addUser")}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add User
    </button>
    <Logout/>
  </div>
</>

  );
};

export default FatchUser;
