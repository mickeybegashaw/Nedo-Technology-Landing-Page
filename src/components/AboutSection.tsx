"use client"
import {motion} from "motion/react"
import { DotBackground } from "./ui/dot-background";
const AboutSection = () => {
  return (
    <DotBackground>
    <section
      id="about"
      className="px-5 lg:px-32 flex flex-col py-36"
    >
      <div className="flex flex-col md:flex-row gap-9 justify-center">
        <motion.h1
           initial={{ opacity: 0.0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{duration: 0.5, delay: 0.5}}

        className="text-4xl md:text-5xl font-bold text-white leading-tight">
          We&apos;re Not Just company,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            We&apos;re Digital Architects
          </span>
        </motion.h1>
        <  motion.p
           initial={{ opacity: 0.0, x: 40 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{duration: 0.5, delay: 0.5}} className="text-lg flex items-center text-gray-300 leading-relaxed w-[100%]">
          Founded in 2024, NEDO Technology has grown from a small team of passionate
          developers into a full-service digital agency that transforms ideas
          into powerful, scalable solutions.
        </motion.p>
      </div>
    </section>
            </DotBackground>
  );
};

export default AboutSection;
