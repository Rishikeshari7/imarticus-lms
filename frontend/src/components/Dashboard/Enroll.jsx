import React from "react";
const details = [
  {
    title: "Schedule",
    value: "18 weeks Program",
  },
  {
    title: "Cohort Intake",
    value: "30 Seats",
  },
  {
    title: "Upcoming Cohort",
    value: "October Batch",
  },
];

const Enroll = () => {
  return (
    <div className="w-full justify-center items-center">
      <div className="w-11/12 bg-green-400 mx-auto text-xl my-8  flex flex-col md:flex-row gap-10 justify-between md:items-center p-8 px-12 md:px-24 rounded-md text-white "
      style={{
        background:  "radial-gradient(331.11% 212.13% at 136.67% -33.36%, #04687d  0%, #067b74  40%, #099b78 70%, #067b5f 85%, #035642 100%)",
     
        
      }}
      >
        <section className="space-y-2">
          <h1 className="font-bold text-2xl md:text-3xl">
            MyCaptain Digital Marketing <br /> Job Assurance Program
          </h1>
          <p className="font-bold text-2xl md:text-3xl mt-2">
            {" "}
            <span className="text-gray-200 line-through"> @1,75,000/-</span> Rs.
            1,60,000/-
          </p>
          <p className="font-bold">
            Get this program for as low as 8000/- on No Cost EMI
          </p>
          <div className="space-x-5 flex mt-5">
            <button className="bg-[#ff7a4f] cursor-pointer text-white text-sm md:text-xl w-36 sm:w-44 md:w-80 md:h-18 py-3 rounded-md font-semibold  ">
              Apply Now
            </button>
            <button className="bg-gray-900/90 cursor-pointer text-white text-sm md:text-xl w-36 sm:w-44 md:w-80 md:h-18 py-3 rounded-md font-semibold  ">
              Download Brochure
            </button>
          </div>
        </section>

        <section className="text-2xl font-bold space-y-4 ">
          {details.map((item, i) => (
            <div key={i} className="flex flex-col">
              <h2>{item.title}</h2>
              <p className="text-3xl" >{item.value}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Enroll;
