import React from "react";

function TextFeild({errors,label,name,type="text",register,required,validationSchema}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2">
         {label}{required&& <span className="text-red-600">*</span>}
      </label>
      <input
        {...register(name,validationSchema)}
        type={type}
        id={name}
        className=" textFeild__input"
        // autoComplete="off"
      />
      {errors&&errors[name]&&<span className="text-sm block text-red-600 mt-2">{errors[name]?.message}</span>}
    </div>
  );
}

export default TextFeild;
