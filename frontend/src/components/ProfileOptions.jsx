import React from "react";
import { FaUserCircle, FaFileAlt, FaRupeeSign, FaCog, FaSignOutAlt } from "react-icons/fa";

const ProfileOptions = ({isOpen}) => {
  return (
    isOpen &&
    <div className="bg-white shadow-sm w-48 absolute mt-1 top-16 right-2 z-10 space-y-1 animate-slideDown">
      <div className="flex items-center gap-3 cursor-pointer hover:bg-[#F2F6F9] py-2 px-4 rounded-md">
        <FaUserCircle className="text-gray-500" />
        <span className="text-gray-700 font-semibold text-sm hover:text-[#035642]">My Profile</span>
      </div>

      <div className="flex items-center gap-3 cursor-pointer hover:bg-[#F2F6F9] py-2 px-4">
        <FaFileAlt className="text-gray-500" />
        <span className="text-gray-700 font-semibold text-sm hover:text-[#035642]">My Applications</span>
      </div>

      <div className="flex items-center gap-3 cursor-pointer hover:bg-[#F2F6F9] py-2 px-4 ">
        <FaRupeeSign className="text-gray-500" />
        <span className="text-gray-700 font-semibold text-sm hover:text-[#035642]">My Transactions</span>
      </div>

      <div className="flex items-center gap-3 cursor-pointer hover:bg-[#F2F6F9] py-2 px-4">
        <FaCog className="text-gray-500" />
        <span className="text-gray-700 font-semibold text-sm hover:text-[#035642]">Settings</span>
      </div>

      <div className="flex items-center gap-3 cursor-pointer hover:bg-[#F2F6F9] py-2 px-4">
        <FaSignOutAlt className="text-gray-500" />
        <span className="text-gray-700 font-semibold text-sm hover:text-[#035642]">Logout</span>
      </div>
    </div>
  );
};

export default ProfileOptions;
