import React from "react";

function RHFselectOption({ label, requierd, register, name, options }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2">
        {label}
        {requierd && <span className="text-red-600">*</span>}
      </label>
      <select className="w-full outline-none border border-gray-300 py-2 rounded-lg" {...register(name)} name={name} id={name}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFselectOption;
