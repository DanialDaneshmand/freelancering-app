import React from "react";

function RadioInput({name,value,label,onChange,checked}) {
  return (
    <div className="flex items-center gap-x-2 ">
      <input
        className="w-4 h-4 cursor-pointer"
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className="cursor-pointer text-gray-700" htmlFor={value}>{label}</label>
    </div>
  );
}

export default RadioInput;
