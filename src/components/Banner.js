import React from "react";
import bannerImage from "../assets/banner.jpg";

function Banner() {
  return (
    <div className="relative">
      <div className="">
        <img
          className="w-full h-80 md:h-96 object-cover object-center brightness-75"
          alt="banner"
          src={bannerImage}
        />
        <div className="absolute cursor-not-allowed top-2 left-2 md:top-5 md:left-5 bg-transparent border border-solid hover:scale-110 transition-all duration-300 hover:opacity-30 border-white">
          <h1 className=" text-sm md:text-xl text-white font-semibold md:px-5 md:py-2 px-2 py-1">
            FAMILY LAW
          </h1>
        </div>
        <div className="absolute top-20 md:top-28 left-1/2 transform -translate-x-1/2">
          <h2 className="text-center font-medium text-white">
            We Always <span className=" text-[#E5912E]">care</span> about our
            client <span className=" text-[#E5912E]">satisfaction</span>
          </h2>
          <br />
          <p className="font-bold text-xl md:text-4xl text-center text-white transition-all duration-300">
            <span className=" text-[#E5912E]">JUSTICE</span> FOR ALL
          </p>
          <br />
          <div className="flex space-x-2 justify-center">
            <div className="bg-[#E5912E] px-3 py-1 rounded-sm cursor-pointer hover:scale-105 transition-all duration-300">
              <h2 className="text-white text-sm text-center">Know More</h2>
            </div>
            <div className="bg-transparent border border-solid px-4 py-1 rounded-sm cursor-pointer hover:scale-105 transition-all duration-300">
              <h2 className="text-white text-sm text-center">About us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
