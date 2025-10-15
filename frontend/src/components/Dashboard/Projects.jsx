import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";

import {Project} from '@/data'

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -bottom-18 left-1/2 transform  translate-x-12 cursor-pointer z-10"
    onClick={onClick}
  >
    <button className="border border-2-[#035642] text-[#035642] p-5 rounded-full">
      <FaArrowRightLong/>
    </button>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -bottom-18 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <button className="border border-2-[#035642] text-[#035642] p-5 rounded-full">
      <FaArrowLeftLong/>
    </button>
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow:3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Projects = () => {
  return (
   <div className="w-10/12 mx-auto bg-white py-20 text-gray-800 flex flex-col">
      <div className="space-y-1.5 mx-auto">
        <h1 className="text-2xl text-center font-bold  md:text-4xl">
          Portfolio of Our Learners
        </h1>
        <p className="text-lg text-center font-bold">
          Our mentees work on industry relevant portfolio projects that gets them hired
        </p>
      </div>
      <Slider {...settings} className="w-10/12 mx-auto my-8">
        {Project.map((prj, i) => (
          <ProjectCard key={i} project={prj} />
        ))}
      </Slider>
    </div>
  )
}

export default Projects


const ProjectCard = ({ project }) => {
  return (
    <main className="flex flex-col items-center text-center p-4 h-auto">
      <a href={project.link} target="_blank">
        <img
        src={project.img}
        alt={project.img}
        className="object-cover h-62 w-auto"
      />
      </a>

      
    </main>
  );
};
