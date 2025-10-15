import React from "react";
import { HeroData } from "@/data";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";
const Hero = () => {
  return (
    <main className="w-full py-10 bg-gray-100">
      <div className="w-[70%] space-y-5 flex flex-col justify-center items-center my-4 pb-10 mx-auto">
        <img
          src="https://webcdn.imarticus.org/mycaptain/mycaptain-logo_1111.webp"
          alt="logo"
          className="w-52"
        />
        <h1 className="text-4xl md:text-5xl font-black text-center text-[#3c4852] leading-14">
          Become a Digital Marketer in <br className="hidden md:block" /> 18
          Weeks
        </h1>
        <p className="text-xl font-black text-[#3c4852]">
          MyCaptain Digital Marketing Program with Job Assurance
        </p>

        <section className="w-full bg-white py-4 space-y-6 text-[#3c4852]  rounded-md">
          <div className="flex justify-around gap-4 md:gap-2 flex-wrap">
            {HeroData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col pr-10 justify-center items-center text-center px-4 border-none 
                ${
                  index !== HeroData.length - 1
                    ? "md:border-r md:border-gray-300"
                    : ""
                }`}
              >
                <h2 className="text-md font-semibold text-[#3c4852]">
                  {item.key}
                </h2>
                <p className="text-xl font-black text-gray-700">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto w-fit flex justify-center items-center font-semibold gap-4 md:gap-10 px-4 py-2 rounded-md bg-[rgba(4,142,108,0.05)]">
            <p className="flex items-center gap-1 text-gray-800">
              <IoStar className="text-yellow-500" />
              4.51
            </p>
            <p className="flex items-center gap-1 text-gray-800">
              <HiMiniUserGroup className="text-gray-600" />
              1.2 Lacs+ Learners
            </p>
          </div>
        </section>

        <section className="space-x-5 flex mt-5">
            <button className="bg-[#ff7a4f] cursor-pointer text-white text-sm md:text-xl w-36 sm:w-44 md:w-96 md:h-18 py-3 rounded-md font-semibold  ">
             <a href="/payment"> Apply Now</a>
            </button>
            <button className="bg-gray-900/90 cursor-pointer text-white text-sm md:text-xl w-36 sm:w-44 md:w-96 md:h-18 py-3 rounded-md font-semibold  ">
              Download Brochure
            </button>
        </section>
      </div>
    </main>
  );
};

export default Hero;
