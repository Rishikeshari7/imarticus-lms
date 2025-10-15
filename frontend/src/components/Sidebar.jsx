import React, { useState } from 'react'
import Logo from '../assets/Auth/logo.png'
import { RxCross1 } from "react-icons/rx";
import { LuNotebook } from "react-icons/lu";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const Sidebar = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState('Course');

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed md:static top-0 left-0 min-h-screen h-full flex flex-col w-80 bg-[#035642] justify-between z-30 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="w-full">
          <div className="w-full flex md:hidden justify-end mt-2 pr-2">
            <RxCross1
              onClick={onClose}
              className="text-white text-xl cursor-pointer"
            />
          </div>

          <div className="cursor-pointer flex w-full justify-center py-4">
            <img src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo.svg" />
          </div>

          <div className="my-4 nav flex flex-col items-center">
            <div
              onClick={() => setIsActive('Course')}
              className={`text-white cursor-pointer font-light w-full md:w-64 ${
                isActive === 'Course' ? 'bg-[#053127]' : ''
              } rounded-lg py-3 px-3 flex justify-start items-center gap-1`}
            >
              <LuNotebook className="text-white" />
              Course
            </div>
            <div
              onClick={() => setIsActive('Discussion')}
              className={`text-white cursor-pointer font-light w-full md:w-64 ${
                isActive === 'Discussion' ? 'bg-[#053127]' : ''
              } rounded-lg py-3 px-3 flex justify-start items-center gap-1`}
            >
              <HiOutlineChatAlt2 className="text-white" />
              Discussion
            </div>
          </div>
        </div>

    
        <div>
          <div className="h-[1px] w-full bg-white"></div>
          <div className="py-6 items-center justify-center flex">
            <div className="flex-col items-center w-56">
              <p className="text-sm text-white mb-2 font-light">
                Facing Problems?
              </p>
              <button className="text-lg rounded-lg hover:outline-1 w-full px-4 py-2 outline-white cursor-pointer text-white bg-[#0e6651]">
                Get help
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
