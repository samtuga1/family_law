import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { BsFillHeartbreakFill, BsHousesFill } from "react-icons/bs";
import { MdChildCare } from "react-icons/md";
import Area from "./reusable_components/Area";

function Areas() {
  const areas = [
    {
      title: "Family",
      subtitle: "We provide family issues answers of any kind",
      icon: <FaUserFriends className="h-10 w-10 object-fill" />,
    },
    {
      title: "Divorce",
      subtitle:
        "Provision of advice on what to do when there is a tear in family",
      icon: <BsFillHeartbreakFill className="h-10 w-10 object-fill" />,
    },
    {
      title: "Child Support",
      subtitle: "Explanation of what to do during breakups",
      icon: <MdChildCare className="h-10 w-10 object-fill" />,
    },
    {
      title: "Property shares",
      subtitle: "Acquire knowledge on how properties are shared in a family",
      icon: <BsHousesFill className="h-10 w-10 object-fill" />,
    },
  ];
  return (
    <div className="flex flex-col items-center space-y-3 pb-10 pt-7 overflow-x-scroll">
      <p className="font-bold text-2xl md:text-4xl text-center transition-all duration-300">
        OUR AREAS OF <span className=" text-[#E5912E]">EXPERTISE</span>
      </p>
      <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-10 md:pt-7 px-10 space-y-10">
        {areas.map((val, i) => (
          <Area
            key={i}
            title={val.title}
            subtitle={val.subtitle}
            icon={val.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Areas;
