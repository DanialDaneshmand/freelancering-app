import React, { useEffect, useState } from "react";
import { useOwnerProjects } from "./useOwnerProjects";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import Table from "../../ui/Table";
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProjects from "./useDeleteProjects";
import AddProject from "./AddProject";
import axios from "axios";
import http from "../../services/httpServices";
import toLocalDateShort from "../../utils/toLocalDateShort";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenAddProject, setIsOpenAddProject] = useState(false);
  const { removeProject, isDeleting } = useRemoveProjects();
  // const [projectList, setProjectList] = useState([]);
  // useEffect(() => {
  //   const getProjects = async () => {
  //     try {
  //       const { data } = await http.get(
  //         "http://localhost:5000/api/project/list"
  //       );
  //       console.log(data.data.projects, "danial");
  //       setProjectList(data.data.projects);
  //     } catch (error) {
  //       console.log(error);
  //       console.log("danial");
  //     }
  //   };
  //   getProjects();
  // }, []);
  return (
    <div>
      <AddProject
        isOpen={isOpenAddProject}
        setIsOpenAddProject={setIsOpenAddProject}
      />
      <div className=" overflow-x-scroll p-3">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>عنوان پروژه</th>
              <th>دسته بندی </th>
              <th>بودجه </th>
              <th>ددلاین</th>
              <th>تگ ها</th>
              <th>فریلنسر</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            {projects&& projects.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td> {truncateText(item.title, 30)}</td>
                <td>{item.category.title}</td>
                <td>{toPersianNumbersWithComma(item.budget)}</td>
                <td>{toLocalDateShort(item.deadline)}</td>
                <td>
                  <div className=" flex flex-wrap justify-center gap-2 max-w-[200px]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className=" block py-1 px-2 bg-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td>{item.freelancer?.name || "-"}</td>
                <td>
                  {item.status === "OPEN" ? (
                    <span className="py-1 px-2 rounded-full block bg-blue-600 text-white text-center">
                      باز
                    </span>
                  ) : (
                    <span className="py-1 px-2 rounded-full block bg-red-600 text-white text-center">
                      بسته
                    </span>
                  )}
                </td>
                <td>
                  <>
                    <button
                      className="ml-2 text-blue-600"
                      onClick={() => setIsOpenEdit(true)}
                    >
                      <FaPencil />
                    </button>
                    <Modal
                      open={isOpenEdit}
                      onClose={() => setIsOpenEdit(false)}
                      title={`ویرایش ${item.title}`}
                    ></Modal>
                  </>
                  <>
                    <button
                      className=" text-red-600"
                      onClick={() => setIsOpenDelete(true)}
                    >
                      <FaRegTrashCan />
                    </button>
                    <Modal
                      open={isOpenDelete}
                      onClose={() => setIsOpenDelete(false)}
                      title={`حذف ${item.title}`}
                    >
                      <ConfirmDelete
                        title={item.title}
                        onConfirm={() =>
                          removeProject(item._id, {
                            onSuccess: (data) => setIsOpenDelete(false),
                          })
                        }
                        onClose={() => setIsOpenDelete(false)}
                        // disabeld={false}
                      />
                    </Modal>
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectTable;
