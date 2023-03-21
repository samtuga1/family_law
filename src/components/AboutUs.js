import React from "react";
import lawyersImage from "../assets/lawyers2.jpg";
import { BsArrowRight } from "react-icons/bs";

function AboutUs() {
  return (
    <div className="p-2 md:py-10 flex md:space-x-7 flex-col md:flex-row md:justify-center items-start md:items-start">
      <img
        alt="lawyers"
        src={lawyersImage}
        className="md:max-w-sm max-w-full h-96 object-cover rounded shadow-xl hover:scale-105 transition-all duration-300"
      />
      <div className="flex flex-col md:items-start pt-5 space-y-3 md:w-96 items-center">
        <h2 className="">
          Who are <span className=" text-[#E5912E]">we?</span>
        </h2>
        <p className="font-bold text-2xl md:text-4xl text-center transition-all duration-300">
          ABOUT <span className=" text-[#E5912E]">US</span>
        </p>
        <p className=" font-bold">
          We have a proven record Track of Records of
          <span className="text-[#E5912E]"> successful </span> Outcoumes For our
          clients
        </p>
        <p>
          We focus on family law to answer basic legal questions and provide
          users with accurate answers to common legal questions, helping to
          reduce the need for expensive legal services, utilizing NLP(Natural
          Language Processing) tools to understand user queries and provide
          appropriate responses.
        </p>
        <div className="bg-[#E5912E] px-3 py-2 rounded-sm group cursor-pointer flex items-center justify-center space-x-3 hover:scale-105 transition-all duration-300">
          <h2 className="text-white text-sm text-center">Read more</h2>
          <BsArrowRight className="text-white group-hover:animate-ping" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
