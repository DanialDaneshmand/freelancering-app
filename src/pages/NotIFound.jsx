import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useBack } from "../hooks/useBack";

function NotIFound() {
    const moveBack=useBack()
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div>
        <p className="text-2xl">صفحه ای که دنبالش بودید پیدا نشد !</p>
        <button onClick={moveBack} className=" mt-4 flex items-center gap-x-2">
          <FaArrowRight className="text-2xl text-blue-700"/><span>برگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotIFound;
