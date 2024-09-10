import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ onClose, open, title, children }) {
  const ref=  useOutsideClick(onClose)

  return (
    open && (
      <div className=" backdrop-blur-sm bg-opacity-30 fixed top-0 left-0 w-screen  h-screen bg-gray-500 z-50 ">
        <div
          className="w-5/12 transition-all duration-500   max-w-screen-sm min-w-[320px] mx-auto  rounded-xl shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white "
        >
          <div ref={ref}>
          <div className="text-slate-900 flex justify-between border-b-2 p-4">
            <p className=" text-xl ">{title}</p>
            <button className=" text-xl" onClick={onClose}>
              <HiOutlineX />
            </button>
          </div>
          {children}
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
