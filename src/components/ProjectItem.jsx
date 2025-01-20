import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = ({ image, title, description }) => {
  return (
    <div className="office flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="h-64 w-full overflow-hidden rounded-xl"
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex gap-5 items-center justify-center mt-4"
      >
        <h2
          className=" font-bold font-raleway"
        >
          {title}
        </h2>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-[#184E25]"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-2 text-center font-raleway text-sm"
      >
        {description}
      </motion.p>
    </div>
  );
};

export default ProjectItem;
