// InputField.jsx
import React from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700">{label}</label>}
      <input
        className="w-full px-3 py-2 border rounded"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
