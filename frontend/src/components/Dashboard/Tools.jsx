import React from 'react'
import { ToolsImg } from '@/data'

const Tools = () => {
  return (
    <div className="w-full justify-center items-center bg-[#035642] py-10 flex">
      <div className="w-10/12 flex flex-col gap-8 md:gap-10 justify-center items-center">
        <h1 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl">
          Master Industry-Relevant Tools
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {ToolsImg.map((link, i) => (
            <div
              key={i}
              className="flex justify-center items-center rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img src={link} className="h-14  w-auto object-contain" />
            </div>
          ))}
        </div>
         
      </div>
    </div>
  )
}

export default Tools
