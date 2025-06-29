"use client";
import { motion } from "motion/react";
import { AuroraBackground } from "./ui/aurora-background";
import { FaArrowRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-5 md:px-20"
      >
        <div className="text-4xl  md:text-7xl w-full  lg:w-[65%]  font-bold text-center text-white mt-20 leading-tight">
          Smart Solutions for a{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Digital World
          </span>
          .
        </div>
        <div className="text-base md:text-xl w-[90%] lg:w-[65%] text-center  text-neutral-200 py-4">
          Powering the Next Digital Evolution with cutting-edge technology and
          innovative solutions.
        </div>
        <div className="flex flex-col md:flex-row gap-5">
        <button className="bg-blue-600 flex gap-2  items-center hover:bg-blue-700 text-white px-4 md:px-8 py-2 text-md md:text-lg rounded-lg">
         <span>Start your project</span>  <FaArrowRight/>
        </button>
        <button className="border-gray-600 border rounded-lg text-white hover:bg-gray-800 px-8 py-2 text-lg bg-transparent">
          View our work
        </button>

        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default HeroSection;
