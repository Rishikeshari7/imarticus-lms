import React from "react";
import { Trainers } from "@/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -bottom-18 left-1/2 transform  translate-x-12 cursor-pointer z-10"
    onClick={onClick}
  >
    <button className="border border-2-white text-white p-5 rounded-full">
      <FaArrowRightLong/>
    </button>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <button className="border border-2-white text-white p-5 rounded-full">
      <FaArrowLeftLong/>
    </button>
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const Trainer = () => {
  return (
    <div className="w-full bg-[#035642] py-20 text-white flex flex-col">
      <div className="space-y-1 mx-auto">
        <h1 className="text-2xl text-center font-bold  md:text-4xl">
          Meet Your Trainers
        </h1>
        <p className="text-lg text-center font-bold">
          You will be mentored by practitioners who are masters of their trade
        </p>
      </div>
      <Slider {...settings} className="w-10/12 mx-auto my-8 h-full">
        {Trainers.map((trainer, i) => (
          <TrainerCard key={i} trainer={trainer} />
        ))}
      </Slider>
    </div>
  );
};

export default Trainer;

const TrainerCard = ({ trainer }) => {
  return (
    <main className="flex flex-col items-center text-center p-4 h-auto">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="object-cover w-72 h-auto"
      />

      <section className="bg-[#048e6c] w-full space-y-5 rounded-b-xl pb-5  md:h-36 lg:32">
        <img
          src={trainer.companyLogo}
          alt={trainer.name}
          className=" mx-auto object-contain -mt-5 w-32 h-auto"
        />
        <div className="space-y-2">
          <h3 className="text-sm font-semibold mb-0">{trainer.name}</h3>
          <p className="text-lg">{trainer.designation}</p>
        </div>
      </section>
    </main>
  );
};


