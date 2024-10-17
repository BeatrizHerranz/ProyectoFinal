import React from "react";

const InputField = ({ label, type, name, value, onChange }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                className="form-control" 
            />
        </div>
    );
};

export default InputField;
