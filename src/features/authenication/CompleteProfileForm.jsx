import React, { useState } from "react";
import TextFeild from "../../ui/TextFeild";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
const navigate=useNavigate()
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
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
        <form className="space-y-8" onSubmit={handleProfileSubmit}>
          <TextFeild
            label="نام و نام خانوادگی"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextFeild
            label="ایمیل "
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center gap-x-8">
            <RadioInput
              name="role"
              value="OWNER"
              label="کارفرما"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "OWNER"}
            />
            <RadioInput
              name="role"
              value="FREELANCER"
              label="فریلنسر"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
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
