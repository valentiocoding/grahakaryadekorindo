import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = ({ image, title, description }) => {
  return (
    <div className="office flex flex-col items-center justify-center">
      <div className="h-64 w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex gap-5 items-center justify-center mt-4">
        <h2 className=" font-bold font-raleway">{title}</h2>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-[#184E25]"
        />
      </div>
      <p className="mt-2 text-center font-raleway text-sm">{description}</p>
    </div>
  );
};

export default ProjectItem;
