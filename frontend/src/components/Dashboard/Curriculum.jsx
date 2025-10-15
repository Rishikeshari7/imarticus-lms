import React, { useState } from "react";
import { Courses } from "@/data";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
const Curriculum = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <main className="w-full justify-center items-center bg-[#fafafa] py-10 flex">
      <div className="w-10/12 flex flex-col gap-5 md:gap-10 justify-center items-center">
        <section className="text-center space-y-1">
            <h1 className="text-2xl md:text-4xl text-gray-600 font-bold">Program Curriculum</h1>
        <p className="text-gray-600 font-semibold">
          Our curriculum is designed to make you a finest marketer
        </p>
        </section>
        <section className="w-full flex flex-col">
          {Courses.map((course, index) => (
            <div key={index} className="border bg-white border-gray-200">
              <button
                type="button"
                aria-expanded={open === index}
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggle(index)}
              >
                <h3 className="text-gray-600 text-lg font-black">
                  {course.title}
                </h3>
                <div className="text-xl">
                  {open === index ? <FiChevronUp />:<FiChevronDown />}
                </div>
              </button>
              {open === index && (
                <div className="bg-gray-50 p-4 flex flex-col gap-2">
                  {course.subtitles.map((subtitle, i) => (
                    <p key={i} className="flex items-center text-gray-600 font-semibold gap-2">
                      <MdOutlineVideoCameraBack  /> {subtitle}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
          <button className="bg-[#ff7a4f] flex justify-center items-center gap-2 cursor-pointer text-white text-sm md:text-xl w-36 sm:w-44 md:w-96 md:h-18 py-3 rounded-md font-semibold  ">
             <FiDownload/> Download Curriculum
            </button>
      </div>
    </main>
  );
};

export default Curriculum;
