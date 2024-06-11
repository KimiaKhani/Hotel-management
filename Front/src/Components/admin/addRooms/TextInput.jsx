import React from 'react';

const TextInput = ({ label, placeholder, name, className, type = "text" }) => {
  return (
    <div className={`mb-3 ${className}`}>
      <label htmlFor={name} className="form-label">{label}</label>
      <input type={type} className="form-control" id={name} name={name} placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
