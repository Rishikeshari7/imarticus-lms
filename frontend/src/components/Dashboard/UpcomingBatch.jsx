import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
const UpcomingBatch = () => {
  const batches = [
    {
      type: "ONLINE BATCH",
      price: "₹1,75,000",
      allInclusivePrice: "₹1,60,000 (All Inclusive)",
      upcomingBatch: "October",
    },
    {
      type: "OFFLINE CLASSROOM BATCH",
      price: "₹1,75,000",
      allInclusivePrice: "₹1,60,000 (All Inclusive)",
      upcomingBatch: "October",
    },
  ];

  return (
    <div className="w-full justify-center items-center bg-gray-100 py-10 flex">
      <div className="w-9/12 flex flex-col gap-2 justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-600 md:text-4xl lg:text-5xl">
          Upcoming Batches
        </h1>
        <p className="text-lg font-bold text-gray-600">
          We offer both offline and online classes, you can find the details
          about the upcoming batches here.
        </p>
        <div className="flex w-full flex-col md:flex-row justify-between gap-10 mt-5 md:mt-10">
          {batches.map((batch, index) => (
            <div
              key={index}
              className="flex  w-full flex-col gap-1 text-lg md:text-2xl font-semibold bg-white p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl md:text-3xl font-black text-[#048e6c]">
                {batch.type}
              </h2>
              <div>
                <p className="text-gray-300 line-through ">{batch.price}</p>
                <p className="text-gray-900">{batch.allInclusivePrice}</p>
              </div>
              <p className="font-bold text-[#048e6c]">Upcoming Batch</p>
              <p className="text-gray-600 flex items-center gap-2">
                <FaCalendarDays /> {batch.upcomingBatch}
              </p>
              <button className="bg-[#ff7a4f] cursor-pointer text-white text-sm md:text-xl w-full md:h-18 py-3 rounded-md font-semibold mt-2 ">
              Apply Now
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingBatch;
