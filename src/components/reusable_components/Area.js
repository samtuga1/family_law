import React from "react";
import { BsArrowRight } from "react-icons/bs";
function Area({ title, icon, subtitle }) {
  return (
    <div className="max-w-xl py-14 md:py-5 md:w-44 bg-[#F4F4F4] object-center rounded-lg border border-solid flex flex-col justify-center p-3 items-center">
      <div className=" border bg-[#DEDCEE] border-solid object-center p-2 w-14 rounded">
        {icon}
      </div>
      <div className="flex flex-col items-center space-y-2">
        <h1 className="font-medium text-xl font-serif">{title}</h1>
        <h1 className=" text-center text-sm">{subtitle}</h1>
        <div className="group cursor-pointer flex items-center justify-center space-x-3">
          <h2 className="text-sm text-center text-[#E5912E] ">Read more</h2>
          <BsArrowRight className="group-hover:animate-ping text-[#E5912E]" />
        </div>
      </div>
    </div>
  );
}

export default Area;
