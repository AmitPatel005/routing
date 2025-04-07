import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  

  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
    <button
      onClick={handleClick}
      className="absolute top-4 right-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
    >
      Logout
    </button>
    <Outlet />
  </div>
  );
};

export default Logout;
