import React from "react";

function TextFeild({label,value,onChange,name}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2">
         {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type="text"
        id={name}
        className=" textFeild__input"
        // autoComplete="off"
      />
    </div>
  );
}

export default TextFeild;
