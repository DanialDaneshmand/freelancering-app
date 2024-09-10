import React, { useEffect, useState } from "react";
import TextFeild from "../../ui/TextFeild";
import { useForm } from "react-hook-form";
import RHFselectOption from "../../ui/RHFselectOption";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategory from "../../hooks/useCategory";
import axios from "axios";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";

function CreateProjectForm({ onClose }) {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories, isLoading } = useCategory();
  const { createProject, isCreating } = useCreateProject();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newProject = { ...data, deadline: new Date(date).toISOString, tags };
    createProject(newProject, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };
  return (
    <div className=" px-4 py-8 max-h-[450px] overflow-y-scroll">
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-8">
        <TextFeild
          validationSchema={{
            required: "عنوان ضروری است",
            minLength: {
              value: 5,
              message: "طول عنوان نا معتبر است",
            },
          }}
          required
          register={register}
          label="عنوان پروژه"
          name="title"
          errors={errors}
        />
        <TextFeild
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول عنوان نا معتبر است",
            },
          }}
          required
          register={register}
          label="توضیحات"
          name="description"
          errors={errors}
        />
        <TextFeild
          validationSchema={{
            required: "بودجه ضروری است",
          }}
          type="number"
          required
          register={register}
          label="بودجه"
          name="bodjet"
          errors={errors}
        />
        <RHFselectOption
          requierd
          register={register}
          label="دسته بندی"
          name="category"
          options={[
            { label: "طراحی", value: "1" },
            { label: "برنامه نویسی", value: "2" },
          ]}
        />
        <div>
          <label className="mb-2">تگ ها</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <div>
          <DatePickerField label="ددلاین" date={date} setDate={setDate} />
        </div>
        <div className="mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProjectForm;
