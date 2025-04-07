
import React from 'react';

const InputField = ({ label, type = "text", value, onChange, placeholder, name ,minLength}) => {
  return (
    <div >
      <label >{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength}
        
      />
    </div>
  );
};

export default InputField;
