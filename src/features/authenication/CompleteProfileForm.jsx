import React, { useState } from "react";
import TextFeild from "../../ui/TextFeild";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [role, setRole] = useState("");
  const { register, handleSubmit,formState:{errors} ,watch} = useForm();
  const navigate = useNavigate();
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleProfileSubmit = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        toast.success("پروفایل شما در انتظار تایید است .");
        return navigate("/");
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen p-16 sm:p-0">
      <div className="w-full sm:max-w-sm">
        <div className="flex justify-center items-center mb-16">
          <p className="text-4xl font-bold text-slate-800">تکمیل اطلاعات</p>
        </div>
        <form
          className="space-y-8"
          onSubmit={handleSubmit(handleProfileSubmit)}
        >
          <TextFeild
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: " نام ضروری است",
            }}
            required
            errors={errors}
          />
          <TextFeild
            label="ایمیل "
            name="email"
            register={register}
            validationSchema={{
              required: " ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است"
              }
            }}
            required
            errors={errors}
          />
          <div className="flex justify-center gap-x-8">
            <RadioInput
              name="role"
              value="OWNER"
              label="کارفرما"
              register={register}
              checked={watch("role") === "OWNER"}
            />
            <RadioInput
              name="role"
              value="FREELANCER"
              label="فریلنسر"
              register={register}
              checked={watch("role") === "FREELANCER"}
            />
          </div>
          {isPending ? (
            <Loading />
          ) : (
            <button className=" btn" type="submit">
              تایید
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
