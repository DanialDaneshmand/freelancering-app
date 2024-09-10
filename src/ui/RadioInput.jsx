import React from "react";

function RadioInput({name,value,label,register,checked}) {
  return (
    <div className="flex items-center gap-x-2 ">
      <input
        {...register(name)}
        className="w-4 h-4 cursor-pointer"
        type="radio"
        name={name}
        id={value}
        value={value}
        checked={checked}
      />
      <label className="cursor-pointer text-gray-700" htmlFor={value}>{label}</label>
    </div>
  );
}

export default RadioInput;
