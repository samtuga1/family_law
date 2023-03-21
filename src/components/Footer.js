import React from "react";
import { TbAwardFilled } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import { TfiAnchor } from "react-icons/tfi";

function Footer() {
  const achievements = [
    {
      label: "Awards winning",
      icon: (
        <TbAwardFilled className="h-20 w-20 opacity-30 relative text-white" />
      ),
      number: "300+",
    },
    {
      label: "Cases solved",
      icon: <GoLaw className="h-20 w-20 opacity-30 relative text-white" />,
      number: "400+",
    },
    {
      label: "Client Satisfaction",
      icon: <TfiAnchor className="h-20 w-20 opacity-30 relative text-white" />,
      number: "97%",
    },
  ];
  return (
    <div className="py-32 bg-[#1F4966]">
      <div className="flex justify-around">
        {achievements.map((val, i) => (
          <div className="flex flex-col justify-center items-start">
            {val.icon}
            <div className="flex flex-col items-start absolute">
              <h1 className="font-semibold text-4xl text-slate-200">
                {val.number}
              </h1>
              <h1 className="font-normal text-[#E5912E]">{val.label}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
