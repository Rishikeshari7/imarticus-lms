import React from "react";

const Certification = () => {
  return (
    <div className="w-full justify-center items-center bg-[rgba(3,86,66,.1)] py-10 flex">
      <div className=" w-11/12 md:w-[70%] flex flex-col gap-5 md:gap-10 justify-center items-center">
        <div className="space-y-2 mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-700 md:text-4xl">
            Get Industry Recognised Certification
          </h1>
          <p className="text-xl font-bold text-gray-700">
            Showcase your expertise with our prestigious Certification
          </p>
        </div>
        <div className="flex w-full justify-center items-center">
          <img
            src="https://cdn.pegasus.imarticus.org/Mycaptain/certification/image-52.webp"
            alt="cet"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
