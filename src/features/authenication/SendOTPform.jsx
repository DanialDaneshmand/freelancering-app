import React, { useState } from "react";
import TextFeild from "../../ui/TextFeild";
import Loading from "../../ui/Loading";

function SendOTPform({
  isPending,
  handleSendOtp,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <div className=" w-64 ">
      <form className="space-y-6" onSubmit={handleSendOtp}>
        <TextFeild
          label="شماره موبایل"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
