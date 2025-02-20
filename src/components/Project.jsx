import { motion } from "framer-motion";
import React, { useMemo } from "react";
import ProjectItem from "./ProjectItem";

import office from "../assets/img/office.webp";
import residential from "../assets/img/residential.webp";
import booth from "../assets/img/booth.webp";
import furniture from "../assets/img/furniture.webp";

const Project = () => {
  // Gunakan useMemo untuk menghindari re-render tidak perlu
  const projects = useMemo(
    () => [
      {
        image: office,
        title: "Office & Fit-Out",
        description:
          "Equipped to elevate our clients' needs by delivering precise, high-quality results that ensure long-term benefits.",
        link: "/office",
      },
      {
        image: residential,
        title: "Residential",
        description:
          "Home is where our heart is, which is why we are fully dedicated to making your living space comfortable, offering extra insights and advice every step of the way.",
        link: "/residential",
      },
      {
        image: booth,
        title: "Outlet & Booth",
        description:
          "Trusted by various industries in the retail sector, we are dedicated to delivering client satisfaction by meeting deadlines.",
        link: "/booth",
      },
      {
        image: furniture,
        title: "Furniture",
        description:
          "Blends local craftsmanship with modern fabrication techniques, ensuring each piece is precisely crafted to match the design with great attention to detail.",
        link: "/furniture",
      },
    ],
    []
  );

  return (
    <div className="flex flex-col justify-center items-center m-5" id="project">
      <h1 className="font-raleway font-bold text-xl mb-10">Our Project</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
