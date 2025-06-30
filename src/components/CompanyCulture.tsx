"use client";

import { motion } from "motion/react";
import { FaUsers, FaLightbulb, FaHandsHelping, FaLaptopCode } from "react-icons/fa";

const values = [
  {
    icon: <FaUsers className="text-3xl text-blue-400" />,
    title: "Teamwork",
    description:
      "We believe collaboration is the heart of innovation. Everyone contributes, and every voice is heard.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-400" />,
    title: "Innovation",
    description:
      "We constantly experiment, learn, and grow. Our creative spirit fuels groundbreaking solutions.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-green-400" />,
    title: "Integrity",
    description:
      "We act with transparency and honesty in everything we do — with clients, partners, and each other.",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-purple-400" />,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, delivering top-quality work in every line of code.",
  },
];

const CompanyCultureSection = () => {
  return (
    <section className="py-28 px-4 text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Our Company Culture
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
          At the core of everything we do is a culture of trust, innovation, and excellence.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-white/5 p-6 rounded-2xl shadow-lg text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
          >
            <div className="flex justify-center">{value.icon}</div>
            <h3 className="text-xl font-semibold text-white">{value.title}</h3>
            <p className="text-gray-300 text-sm">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CompanyCultureSection;
