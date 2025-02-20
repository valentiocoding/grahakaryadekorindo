import React, { memo } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectItem = memo(({ image, title, description, link }) => {
  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center"
    >
      <div className="h-64 w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        className="flex gap-5 items-center justify-center mt-4"
      >
        <h2 className="font-bold font-raleway">{title}</h2>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-[#184E25]"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        className="mt-2 text-center font-raleway text-sm flex-1"
      >
        {description}
      </motion.p>
    </motion.a>
  );
});

export default ProjectItem;
