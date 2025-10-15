import React, { useState } from "react";
import { HiringPartners } from "@/data";
const Partners = () => {
  const [showAll, setShowAll] = useState(false);
  const allImages = showAll
    ? HiringPartners
    : HiringPartners.slice(0, Math.ceil(HiringPartners.length / 2));
  return (
    <div className="w-full justify-center items-center bg-gray-100 py-10 flex">
      <div className="w-10/12 flex flex-col gap-5 md:gap-10 justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-700 md:text-5xl">
          1000+ Hiring Parners
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {allImages.map((link, i) => (
            <div
              key={i}
              className="flex justify-center items-center bg-white  rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img src={link} className="h-16 md:h-20 w-auto object-contain" />
            </div>
          ))}
        </div>
         <button
          className="text-gray-600 font-black"
          onClick={() => setShowAll(!showAll)}
        >
          {!showAll && "and More"}
        </button>
      </div>
    </div>
  );
};

export default Partners;
