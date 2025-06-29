"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

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
      <ContainerScroll >
        <img
          src={`/project2.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <ContainerScroll >
        <img
          src={`/project3.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <ContainerScroll >
        <img
          src={`/project1.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <ContainerScroll >
        <img
          src={`/project4.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

    </section>
  );
}