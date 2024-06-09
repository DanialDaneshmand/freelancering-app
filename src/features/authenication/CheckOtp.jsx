import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";

const RESEND_OTP = 5;

function CheckOtp({ phoneNumber, setStep, onSendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_OTP);

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const navigate = useNavigate();
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const handleCheckOtp = async (e) => {
    e.preventDefault();

    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      console.log(user, message);
      toast.success(message);
      if (user.isActive) {
        if (user.role === "OWNER") navigate("/owner");
        if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className=" space-y-4">
      <form onSubmit={handleCheckOtp}>
        <button onClick={() => setStep(1)} className="text-2xl text-gray-700">
          <FaArrowRight />
        </button>
        {!otpResponse && (
          <p className="flex items-center">
            <span>{otpResponse?.message}</span>
            <button onClick={()=>setStep(1)}>
              <FaPencil className="text-blue-700" />
            </button>
          </p>
        )}
        <div className="text-gray-700 mb-2">
          {time > 0 ? (
            <p>{time}ثانیه تا ارسال مجدد کد</p>
          ) : (
            <button onClick={onSendOtp}>ارسال مجدد کد</button>
          )}
        </div>
        <p className="text-gray-700 mb-6">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid blue",
            borderRadius: "0.5rem",
            outline: "none",
          }}
          containerStyle="flex flex-row-reverse gap-x-2 mb-6"
        />

        {isPending ? (
          <Loading />
        ) : (
          <button className=" btn" type="submit">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default CheckOtp;
