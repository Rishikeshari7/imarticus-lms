import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaMobileAlt, FaUserShield } from "react-icons/fa";
import GoogleFacebook from "./GoogleFacebook";
import {countryCodes} from "@/data";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {sendOtp, loading} = useAuthStore();
  const navigate = useNavigate();
  const handleOtpSend = async(e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error("Password and Confirm Password not match");
      return;
    }
    const data={name,email,number:countryCode+number,password};
    const result = await sendOtp(data);
    console.log("result", result);
    if (result.success) navigate("/verify-otp");
  }
  return (
    <div className="space-y-5 overflow-scroll hide-scrollbar -mt-3">
      <h1 className=" text-[2rem] font-semibold">Sign up</h1>
      <form className="flex flex-col gap-2 mb-0 px-1">
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-3 mb-3 focus:outline-none focus:ring-1 focus:ring-[#048E6C] placeholder-gray-500 "
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-3 mb-3 focus:outline-none focus:ring-1 focus:ring-[#048E6C] placeholder-gray-500 "
        />
        <div className="flex gap-2 ">
           <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="h-12 text-sm text-green-700 max-w-[150px] md:max-w-[130px] border border-gray-400 rounded-md  focus:outline-none focus:ring-1 focus:ring-[#048E6C]"
          >
            {countryCodes.map((c,ind) => (
              <option key={ind} value={c.code}>
                {c.name} : {c.code}
              </option>
            ))}
          </select>
          <input
          type="tel"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full h-full flex-1 border border-gray-400 rounded-md p-3 mb-3 focus:outline-none focus:ring-1 focus:ring-[#048E6C] placeholder-gray-500 "
        />
        </div>
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
        <div className="relative mt-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Enter your password here"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-[#048E6C] placeholder-gray-500 "
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
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
          type="submit"
          onClick={handleOtpSend}
          className="w-full bg-green-800 text-white py-3 cursor-pointer rounded-md font-semibold my-4"
        >
         {loading ? "Signing Up..." : "Signup In"}
        </button>
      </form>
      <div className="flex items-center mb-4">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-2 text-gray-700 text-sm">Or</span>
        <hr className="flex-grow border-gray-600" />
      </div>
      <div className="space-y-2.5">
        <GoogleFacebook />
        <p className="text-gray-600 text-center mt-4  ">
          already have an account ?{" "}
          <a
            href="/login"
            className="text-[#048E6C] font-semibold cursor-pointer"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
