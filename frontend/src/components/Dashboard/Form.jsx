import React, { useState } from "react";
import { countryCodes, Locations, Experience } from "@/data";

const data = [
  { value: "1600+", label: "Students Placed" },
  { value: "12LPA", label: "Highest CTC" },
  { value: "10", label: "Assured Interviews" },
  { value: "1000+", label: "Hiring Partners" },
];
const logos = [
  { src: "https://webcdn.imarticus.org/mycaptain/image.webp", alt: "Zomato" },
  { src: "https://webcdn.imarticus.org/mycaptain/logo5.webp", alt: "Rapido" },
  { src: "https://webcdn.imarticus.org/mycaptain/logo6.webp", alt: "mfine" },
  {
    src: "https://webcdn.imarticus.org/mycaptain/deloitte2.webp",
    alt: "Deloitte",
  },
];

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <main className="bg-[#035642]  flex items-center justify-center px-4 py-8 md:py-16">
      <div className=" w-full md:w-11/12 flex justify-between lg:justify-center items-center flex-col lg:flex-row gap-10">
        <section className="w-11/12 mx-auto md:w-full items-center justify-center md:justify-end text-white">
          <div className="flex flex-col items-center space-y-8  text-center  ">
            <h2 className="text-2xl md:text-4xl font-bold">Key Highlights</h2>
            <div className="w-full max-w-xl grid grid-cols-2 gap-4 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FF8058] rounded-lg p-4 md:py-7 md:px-10 "
                >
                  <p className="text-2xl md:text-4xl font-bold">{item.value}</p>
                  <p className="text-xl font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-md font-bold">
              The Program has been created in collaboration with Managers from
            </p>
            <div className="flex gap-6 flex-wrap -mt-2 justify-center">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14"
                />
              ))}{" "}
            </div>
          </div>
        </section>

        <section className="w-11/12 mx-auto md:w-fit lg:w-3xl  flex items-center justify-center md:justify-end ">
          <div className="bg-white w-full md:max-w-lg rounded-xl p-8 px-10 shadow-lg">
            <h3 className="sm:text-lg md:text-2xl font-bold mb-4">
              Apply For The{" "}
              <span className="text-[#FF8058]">
                MyCaptain Digital Marketing Job Assurance Program
              </span>
            </h3>
            <form className="space-y-3 overflow-x-hidden">
              <label htmlFor="name" className="text-sm font-semibold">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full border border-gray-400 rounded-md p-3 mb-3 focus:outline-none  "
              />
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full border  border-gray-400 rounded-md p-3 mb-3 focus:outline-none   "
              />
              <label htmlFor="mobileNumber" className="text-sm font-semibold">
                Mobile Number
              </label>
              <div className="flex">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="h-12 border-r-0 rounded-r-none text-sm max-w-[150px] md:max-w-[130px] border border-gray-400 rounded-md  focus:outline-none"
                >
                  {countryCodes.map((c, ind) => (
                    <option key={ind} value={c.code}>
                      {c.name} : {c.code}
                    </option>
                  ))}
                </select>
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  type="tel"
                  className="h-12 flex-1 border border-l-0  border-gray-400 rounded-md rounded-l-none p-3 mb-3 focus:outline-none"
                />
              </div>
              <label htmlFor="location" className="text-sm font-semibold">
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-400 rounded-lg px-3 py-4 focus:outline-none"
              >
                {Locations.map((loc, ind) => (
                  <option key={ind} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <label htmlFor="experience" className="text-sm font-semibold">
                Professional Experience
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full border border-gray-400 rounded-md p-3 mb-3 focus:outline-none "
              >
                {Experience.map((e, ind) => (
                  <option key={ind} value={e}>
                    {e}
                  </option>
                ))}
              </select>

              <button
                // onClick={submitHandler}
                type="submit"
                className="w-full bg-[#FF8058] cursor-pointer text-white py-4 mb-4 rounded-lg font-medium hover:bg-[#e46f4e] transition"
              >
                Next
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Form;
