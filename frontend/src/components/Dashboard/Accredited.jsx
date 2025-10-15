import React from "react";
const imgs = [
  "https://cdn.pegasus.imarticus.org/Mycaptain/Accredited/Background+Shadow.webp",
  "https://cdn.pegasus.imarticus.org/Mycaptain/Accredited/Background+Shadow-1.webp",
  "https://webcdn.imarticus.org/mycaptain/SkillIndiaLogo.webp",
  "https://cdn.pegasus.imarticus.org/Mycaptain/Accredited/Background+Shadow-3.webp",
];

const Accredited = () => {
  return (
    <div className="w-full justify-center items-center bg-gray-100 py-20 flex">
      <div className=" w-11/12 md:w-[70%] flex flex-col gap-5 md:gap-10 justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-700 md:text-4xl">
          We are Accredited by
        </h1>
        <div className="flex mx-auto w-full items-center justify-center md:justify-between flex-wrap">
          {imgs.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={i}
              className="w-52 h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accredited;
