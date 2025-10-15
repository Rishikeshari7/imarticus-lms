import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaMobileAlt, FaUserShield, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import GoogleFacebook from "./GoogleFacebook";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {login, loading, error} = useAuthStore();
  const navigate = useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    const res = await login(email, password);
    if(res && res.success){
      navigate("/dashboard");
    }
  }

  return (
    <div className="space-y-4 ">
      <h1 className=" text-4xl font-semibold">Log in</h1>
      <form className="flex flex-col gap-2 mb-0">
        <input
          type="email"
          placeholder="Enter your Email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-3 mb-3 focus:outline-none focus:ring-1 focus:ring-[#048E6C] placeholder-gray-500 "
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#048E6C] placeholder-gray-500 "
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#048E6C] font-semibold cursor-pointer">
            Login with OTP
          </p>
          <p className="text-[#048E6C] font-semibold cursor-pointer">
            Forget Password ?
          </p>
        </div>
        <button
          disabled={loading}
          onClick={submitHandler}
          className="w-full bg-green-800 text-white py-3 cursor-pointer rounded-md font-semibold my-4"
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>
      <div className="flex items-center mb-4">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-2 text-gray-700 text-sm">Or</span>
        <hr className="flex-grow border-gray-600" />
      </div>
      <div className="space-y-2.5">
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 hover:bg-gray-200">
          Log in with Mobile Number
          <FaMobileAlt className="text-green-800" />
        </button>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 hover:bg-gray-200">
          Log in with Username
          <FaUserShield className="ml-2 text-green-800" />
        </button>

       <GoogleFacebook />
        <p className="text-gray-600 text-center mt-4 ">
          Don't have an account?
          {" "}<a
            href="/signup"
            className="text-[#048E6C] font-semibold cursor-pointer"
          >
            Sign up for free
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
