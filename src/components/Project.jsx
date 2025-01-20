import { motion } from "framer-motion";
import React from "react";
import ProjectItem from "./ProjectItem";

const Project = () => {
  const projects = [
    {
      image: "img/office.jpg",
      title: "Office & Fit-Out",
      description:
        "Equipped to elevate our clients' needs by delivering precise, high-quality results that ensure long-term benefits.",
      link: "/office",
    },
    {
      image: "img/residential.jpg",
      title: "Residential",
      description:
        "Home is where our heart is, which is why we are fully dedicated to making your living space comfortable, offering extra insights and advice every step of the way.",
      link: "/residential",
    },
    {
      image: "img/booth.jpg",
      title: "Outlet & Booth",
      description:
        "Trusted by various industries in the retail sector, we are dedicated to delivering client satisfaction by meeting deadlines.",
      link: "/booth",
    },
    {
      image: "img/furniture.png",
      title: "Furniture",
      description:
        "Blends local craftsmanship with modern fabrication techniques, ensuring each piece is precisely crafted to match the design with great attention to detail.",
      link: "/furniture",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center m-5" id="project">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-raleway font-bold text-xl mb-5"
      >
        Our Project
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
          whileHover={{ scale: 1.1 }}
          key={index}>
            <a href={project.link}>
              <ProjectItem {...project} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
