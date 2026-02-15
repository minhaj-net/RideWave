import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <div className="absolute bottom-10 left-0 z-10">
          <div className="bg-[#FF5A1F] text-white text-[10px] font-bold px-3 py-1 uppercase">
            {project.category}
          </div>
        </div>

        {/* Title Overlay Box */}
        <div className="absolute bottom-0 left-0 w-[95%] bg-white py-4 px-5 shadow-xl border-l-4 border-[#FF5A1F] transition-all duration-300">
          <h3 className="text-[#011421] font-bold text-lg leading-tight group-hover:text-[#FF5A1F]">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default ProjectCard;
