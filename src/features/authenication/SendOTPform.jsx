import React, { useState } from "react";
import TextFeild from "../../ui/TextFeild";
import Loading from "../../ui/Loading";

function SendOTPform({ isPending, handleSendOtp, register ,errors }) {
  return (
    <div className=" w-64 ">
      <form className="space-y-6" onSubmit={handleSendOtp}>
        <TextFeild
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
          validationSchema={{
            required: "شماره تلفن الزامی است",
          }}
          required
          errors={errors}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button className=" btn" type="submit">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOTPform;
