import React from "react";

function ConfirmDelete({ onClose, onConfirm, disabeld, title }) {
  
  return (
    <div className="p-4 ">
      <p className="text-lg text-slate-600">
        {" "}
        {`از حذف ${title} مطمعن هستید ؟`}
      </p>
      <div className=" flex gap-x-16 mt-8">
        <button
          onClick={onClose}
          className=" flex-1 btn bg-blue-600 text-white"
        >
          لغو
        </button>
        <button
          disabled={disabeld}
          onClick={onConfirm}
          className=" flex-1 border border-red-600 rounded-xl py-3 text-red-600"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
