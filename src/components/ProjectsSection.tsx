"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";


const projects = [
  {
    id: 1,
    imageSrc: "/nedogebeta.png",
    altText: "nedogebeta",
    link: "https://nedo-gebeta.vercel.app",
  },
  {
    id: 2,
    imageSrc: "/yadashopping.png",
    altText: "yadashopping",
    link: "https://yadashopping.com",
  },
  {
    id: 3,
    imageSrc: "/sebehomes.png",
    altText: "sebehomes",
    link: "https://sebehomes.vercel.app",
  },
  {
    id: 4,
    imageSrc: "/framecheck.jpg",
    altText: "framecheck",
    link: "https://frame-check.vercel.app",
  },
  {
    id: 5,
    imageSrc: "/tixmanage.png",
    altText: "tixmanage",
    link: "https://ticketing-system-gamma.vercel.app/",
  },
];
export function ProjectsSection() {
  return (
    <section id="projects" className="lg:px-24 pt-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Our Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          Explore our diverse portfolio showcasing innovative solutions and
          cutting-edge technology. Each project reflects our commitment to
          excellence and creativity, designed to meet the unique needs of our
          clients.
        </p>
      </div>

      {projects.map((project) => (
        <ContainerScroll key={project.id}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={project.imageSrc}
              alt={project.altText}
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top mb-10"
              draggable={false}
            />
          </a>
        </ContainerScroll>
      ))}
    </section>
  );
}
