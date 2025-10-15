import React from "react";
import { Testimonials } from "@/data";
import { FaRegCalendarAlt } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="w-full justify-center items-center bg-white py-10 flex flex-col gap-10 my-10">
      <div className="w-10/12 grid md:grid-cols-2 h-full flex-col gap-5 md:gap-10">
        {Testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-[rgba(4,142,108,.05)] shadow-md rounded-md p-5 w-full"
          >
          <div className="flex items-center gap-2" >
            <div className="w-14 h-14 rounded-xl bg-red-200" ></div>
            <div>
            <h3 className="font-bold text-xl text-gray-700">{item.name}</h3>
            <p className="text-lg bg-white px-5 py-2 flex items-center gap-2  text-green-600"> <FaRegCalendarAlt/>{item.batch}</p>
            </div>
          </div>
            <p className="mt-2 text-lg">  {item.feedback}</p>
          </div>
        ))}
      </div>
      <button className="bg-[#ff7a4f] cursor-pointer text-white text-sm md:text-xl w-36 sm:w-44 md:w-96 md:h-18 py-3 rounded-md font-semibold  ">
              View More
            </button>

    </div>
  );
};

export default Testimonial;
