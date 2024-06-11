import React from "react";
import AuthContainer from "../features/authenication/AuthContainer";

function Auth() {
  return (
    <div className="container  xl:max-w-screen-xl ">
      <div className="flex justify-center items-center h-screen">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
