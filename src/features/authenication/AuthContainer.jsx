import React, { useState } from "react";
import SendOTPform from "./SendOTPform";
import CheckOtp from "./CheckOtp";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState("");
  const { register, handleSubmit, getValues ,formState:{errors}} = useForm();
  const {
    isPending,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const handleSendOtp = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <SendOTPform
          setStep={setStep}
          register={register}
          isPending={isPending}
          handleSendOtp={handleSubmit(handleSendOtp)}
          errors={errors}
        />
      );
    } else {
      return (
        <CheckOtp
          otpResponse={otpResponse}
          onSendOtp={handleSendOtp}
          setStep={setStep}
          phoneNumber={getValues("phoneNumber")}
        />
      );
    }
  };
  return renderStep();
}

export default AuthContainer;
