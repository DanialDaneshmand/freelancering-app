import React from "react";
import { FaPlus } from "react-icons/fa6";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function AddProject({ isOpen, setIsOpenAddProject }) {
  return (
    <div>
      <div className="flex w-full justify-between p-2">
        <p className=" text-2xl font-bold text-gray-600">پروژه های شما</p>
        <button
          onClick={() => setIsOpenAddProject(true)}
          className=" flex bg-blue-600 text-white rounded-xl hover:bg-blue-500  px-4 py-4  justify-center items-center  gap-3 font-bold text-lg "
        >
          <span>
            <FaPlus />
          </span>
          <span>اضافه کردن پروژه جدید</span>
        </button>
        <Modal
          title="اضافه کردن پروژه جدید "
          onClose={() => setIsOpenAddProject(false)}
          open={isOpen}
        >
          <CreateProjectForm onClose={() => setIsOpenAddProject(false)} />
        </Modal>
      </div>
    </div>
  );
}

export default AddProject;
