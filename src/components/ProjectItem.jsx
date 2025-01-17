import React from "react";
import { motion } from "framer-motion";

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
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-4 font-bold font-raleway"
      >
        {title}
      </motion.h2>
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
