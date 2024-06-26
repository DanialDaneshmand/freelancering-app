import React, { useState } from "react";
import { useOwnerProjects } from "./useOwnerProjects";
import truncateText from "../../utils/truncateText";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import Table from "../../ui/Table";
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/confirmDelete";
import useRemoveProjects from "./useDeleteProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const { removeProject, isDeleting } = useRemoveProjects();
  return (
    <div className=" overflow-x-scroll p-3">
      {/* <Table>
        <Table.Header>
          <Table.Row>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی </th>
            <th>بودجه </th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <td>1</td>
            <td> {truncateText("پروژه اول", 30)}</td>
            <td>برنامه نویسی</td>
            <td>{toPersianNumbersWithComma(1000000)}</td>
            <td>2023/213/123</td>
            <td>برنامه نویسی-ui/ux</td>
            <td>نام تستی</td>
            <td>بسته</td>
            <td>...</td>
          </Table.Row>
        </Table.Body>
      </Table> */}
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
          <tr>
            <td>1</td>
            <td> {truncateText("پروژه اول", 30)}</td>
            <td>برنامه نویسی</td>
            <td>{toPersianNumbersWithComma(1000000)}</td>
            <td>2023/213/123</td>
            <td>برنامه نویسی-ui/ux</td>
            <td>نام تستی</td>
            <td>بسته</td>
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
                  title={`ویرایش ...`}
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
                  title={`حذف ...`}
                >
                  <ConfirmDelete
                    onConfirm={() =>
                      removeProject(1, {
                        onSuccess: (data) => setIsOpenDelete(false),
                      })
                    }
                    onClose={() => setIsOpenDelete(false)}
                    disabeld={false}
                  />
                </Modal>
              </>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
