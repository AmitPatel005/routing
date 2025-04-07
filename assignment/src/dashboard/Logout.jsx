import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleClick}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
