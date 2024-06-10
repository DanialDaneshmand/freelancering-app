import React, { useState } from "react";
import SendOTPform from "./SendOTPform";
import CheckOtp from "./CheckOtp";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getOtp } from "../../services/authService";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, error, data:otpResponse, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const {message} = await mutateAsync({ phoneNumber });
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
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          isPending={isPending}
          handleSendOtp={handleSendOtp}
        />
      );
    } else {
      return <CheckOtp otpResponse={otpResponse}  onSendOtp={handleSendOtp} setStep={setStep} phoneNumber={phoneNumber}/>;
    }
  };
  return renderStep();
}

export default AuthContainer;
