import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fatchUsers } from "./userDetails";
import { NavLink, useNavigate } from "react-router-dom";



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
    <div className="p-4 max-w-lg mx-auto">
      <ul>
        {data.map((user) => (
          <li key={user.id} className="p-2">
            <NavLink
              to={`/details/${user.id}`}
              className="text-blue-500 hover:underline"
            >
              {user.id} - {user.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* <button
        onClick={() => navigate("/addUser")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add User
      </button> */}
    </div>

  );
};

export default FatchUser;
