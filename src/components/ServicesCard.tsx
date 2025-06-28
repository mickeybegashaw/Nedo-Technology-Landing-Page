"use client"
import React from "react";
import { Meteors } from "./ui/meteors";

export function ServicesCard({ service }: { service: { title: string; description: string , icon: string} }) {
  return (
    <div className="relative max-w-xl mx-auto">
      {/* Glow Background */}
      <div className="absolute inset-0 scale-[0.80] rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-8 shadow-xl">
        {/* Icon */}
        <div className="text-gray-500 text-xl mb-5">
       {service.icon && service.icon}

        </div>

        {/* Title */}
        <h1 className="mb-3 text-xl font-bold text-white">
          {service.title}
        </h1>

        {/* Description */}
        <p className="mb-2 text-base text-slate-400">
          {service.description}
        </p>

        {/* Meteors */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
