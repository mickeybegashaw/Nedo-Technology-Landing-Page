"use client";

import { ServicesCard } from "./ServicesCard";
import { motion } from "motion/react";
import { LuPenTool } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { MdDesignServices, MdPhoneIphone } from "react-icons/md";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Custom websites, web apps, and e-commerce solutions built with modern frameworks.",
  },
  {
    icon: <LuPenTool />,
    title: "Custom Software",
    description:
      "Tailored software solutions to meet unique business needs, from concept to deployment.",
  },
  {
    icon: <MdDesignServices />,
    title: "UI & UX Design",
    description:
      "Intuitive and engaging user interfaces designed to enhance user experience across all platforms.",
  },
  
  {
    icon: <MdPhoneIphone />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications that deliver seamless performance and engagement.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Our Development Services
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
          From concept to deployment, we handle every aspect of your digital transformation journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <ServicesCard service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
