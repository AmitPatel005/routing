
import React from 'react';

const InputField = ({ label, type = "text", value, onChange, placeholder, name ,minLength}) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default InputField;
