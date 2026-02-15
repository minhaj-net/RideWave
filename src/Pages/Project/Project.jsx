import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectHeader from './ProjectHeader';
import ProjectCard from './ProjectCard';

const categories = ['All', 'Ocean Freight', 'Air Freight', 'WareHouse', 'Road Freight'];

const Project = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjectsData(data))
      .catch(err => console.error("Failed to fetch projects data:", err));
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => {
        // Simple mapping to handle category differences if needed
        if (selectedCategory === 'Ocean Freight') return p.category === 'Ocean';
        if (selectedCategory === 'Air Freight') return p.category === 'Air';
        if (selectedCategory === 'Road Freight') return p.category === 'Transport';
        return p.category === selectedCategory;
      });

  return (
    <div className="bg-[#F8F9FA] pb-20">
      <ProjectHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header & Categories */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest">CASE STUDY</span>
              <div className="w-10 h-[2px] bg-[#FF5A1F]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#011421]">
              Explore Our Portfolio
            </h2>
          </div>

          {/* Categories Button Group */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-[#FF5A1F] border-[#FF5A1F] text-white shadow-lg'
                    : 'bg-white border-gray-200 text-[#011421] hover:border-[#FF5A1F] hover:text-[#FF5A1F]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;