import React from 'react';

// Example TextInput component
const TextInput = ({ name, type, placeholder, className, value, onChange }) => (
  <div className={className}>
    <label htmlFor={name}>{placeholder}</label>
    <input 
      type={type || 'text'} 
      id={name} 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      className="form-control" 
    />
  </div>
);


export default TextInput;
