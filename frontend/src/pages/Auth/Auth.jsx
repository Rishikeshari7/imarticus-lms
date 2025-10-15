import React from "react";
import bg from "../../assets/Auth/bg.webp";
import { useLocation } from "react-router-dom";
import {Login,Signup,VerifyOtp} from "@/components"

const Auth = () => {
  const location = useLocation();
  const path = location.pathname;

  let Component=Login;
  if (path === "/signup") Component = Signup;
  else if (path ==="/verify-otp") Component = VerifyOtp;

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" w-full h-full md:w-11/12 md:h-11/12 flex justify-end items-center">
          <div className="h-full w-full md:w-[26rem] flex flex-col gap-4 p-5 md:rounded-3xl shadow-xl bg-white">
            <div className="flex justify-center" >
              <img
              src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo-green.svg"
              alt="logo"
              className="w-52 mb-8 mt-3"
            />
            </div>
            <Component/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
