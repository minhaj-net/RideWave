import React from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router';

const TeamCard = ({ member }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div 
        className="relative rounded-[3rem] overflow-hidden mb-6" 
        style={{ clipPath: 'polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%)' }}
      >
        <Link to={`/team/details/${member.id}`}>
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </Link>
        {/* Social / Link Overlay Icon */}
        <div className="absolute bottom-6 right-6">
          <Link 
            to={`/team/details/${member.id}`}
            className="w-10 h-10 bg-[#FF5A1F] text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-500/30 transform hover:scale-110 transition-transform"
          >
            <LinkIcon size={18} />
          </Link>
        </div>
      </div>
      <div className="text-center">
        <Link to={`/team/details/${member.id}`}>
           <h4 className="text-xl font-black text-[#011421] mb-1 hover:text-[#FF5A1F] transition-colors">{member.name}</h4>
        </Link>
        <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">{member.role}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
