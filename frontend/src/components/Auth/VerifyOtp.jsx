import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const { signup, loading } = useAuthStore();
  const [otp, setOtp] = React.useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await signup(otp);
    if (res && res.success) {
      navigate("/login");
    }
  };
  return (
    <div className="space-y-4 ">
      <div className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center">
        <a href="/signup">
          <MdArrowBack className="w-6 h-6 text-green-700" />
        </a>
      </div>

      <h1 className=" text-4xl font-semibold">Verify OTP</h1>
      <form className="flex flex-col gap-2 mb-0">
        <input
          type="text"
          placeholder="Enter your OTP here"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-3 mb-3 focus:outline-none focus:ring-1 focus:ring-[#048E6C] placeholder-gray-500 "
        />

        <button
          onClick={submitHandler}
          className="w-full bg-green-800 text-white py-3 cursor-pointer rounded-md font-semibold my-4"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
