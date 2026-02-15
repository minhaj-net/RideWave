import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router';
import { 
  User, 
  MapPin, 
  Calendar, 
  Tag, 
  DollarSign, 
  Phone, 
  Mail, 
  FileDown, 
  Play
} from 'lucide-react';
import ProjectHeader from './ProjectHeader';

const Projectdetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => {
        const selectedProject = data.find(p => p.id === parseInt(id));
        setProject(selectedProject);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch project details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

  const sidebarInfo = [
    { icon: <User size={20} />, label: 'Client:', value: project.client },
    { icon: <MapPin size={20} />, label: 'Location:', value: project.location },
    { icon: <Calendar size={20} />, label: 'Project Date:', value: project.date },
    { icon: <Tag size={20} />, label: 'Category:', value: project.category },
    { icon: <DollarSign size={20} />, label: 'Cost:', value: project.cost },
  ];

  return (
    <div className="bg-white min-h-screen">
      <ProjectHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            {/* Main Featured Image */}
            <div className="mb-10 group overflow-hidden rounded-[2.5rem] shadow-xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#011421] mb-6">
              {project.title}
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
              <p>{project.description}</p>
              <p>{project.subDescription}</p>
            </div>

            <h3 className="text-2xl font-bold text-[#011421] mt-12 mb-6">
              Project details
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed font-medium">
              {project.details}
            </p>

            {/* Video / Feature Section */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-white">
              <div className="relative w-full md:w-1/2 group">
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <img 
                    src={project.processImage} 
                    alt="Process" 
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-[#FF5A1F] rounded-full flex items-center justify-center cursor-pointer shadow-xl text-white"
                  >
                    <Play fill="white" size={24} className="ml-1" />
                  </motion.div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h4 className="text-xl font-bold text-[#011421] mb-2">Transigo Around the World</h4>
                <p className="text-sm text-gray-500 mb-6 font-medium">Three core values define the spirit of our culture</p>
                <ul className="space-y-3">
                  {project.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1.5 min-w-[10px] h-[10px] rounded-full bg-[#FF5A1F] shadow-sm shadow-[#FF5A1F]/50" />
                      <span className="text-gray-600 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 space-y-6 text-gray-600 leading-relaxed font-medium">
              <p>
                Freight forwarders often offer consolidated cargo services, which combine smaller shipments from 
                multiple companies into full containers for specific destinations. This offers cost advantages similar to 
                FCL but without needing a full container yourself.
              </p>
              <p>
                This is a cost-effective option for smaller shipments. Your goods are consolidated with other shippers' 
                cargo to fill a container. This can take longer as it involves additional handling.
              </p>
            </div>
          </motion.div>

          {/* Sidebar Section */}
          <div 
            className="lg:w-1/3 flex flex-col gap-8"
          >
            {/* Project Information */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#EBF4F6] p-8 rounded-[2rem] shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#011421] mb-8">Project Information</h3>
              <div className="space-y-4">
                {sidebarInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm hover:translate-x-1 transition-transform duration-300">
                    <div className="w-10 h-10 bg-[#011421] rounded-full flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-extrabold text-[#011421]/30 tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-sm font-bold text-[#011421]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#EBF4F6] p-8 rounded-[2rem] shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#011421] mb-6">Contact Info</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 text-gray-600">
                  <div className="p-2 bg-white rounded-full text-[#FF5A1F] shadow-sm">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm font-bold mt-1 text-[#011421]/70">1234 King Street, Australia</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="p-2 bg-white rounded-full text-[#FF5A1F] shadow-sm">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm font-bold text-[#011421]/70">1-800-915-6270</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="p-2 bg-white rounded-full text-[#FF5A1F] shadow-sm">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm font-bold text-[#011421]/70">consulpro@mail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Brochures */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#EBF4F6] p-8 rounded-[2rem] shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#011421] mb-6">Brochures</h3>
              <div className="flex flex-col gap-4">
                <button className="flex items-center justify-center gap-3 bg-[#FF5A1F] text-white py-4 px-6 rounded-2xl font-bold hover:bg-[#e04e1a] hover:shadow-lg hover:shadow-[#FF5A1F]/30 transition-all duration-300 group">
                  Download Doc
                  <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-3 bg-white text-[#011421] py-4 px-6 rounded-2xl font-bold border border-gray-100 hover:bg-gray-50 hover:shadow-md transition-all duration-300 group shadow-sm">
                  Company Profile
                  <FileDown size={20} className="group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectdetails;
