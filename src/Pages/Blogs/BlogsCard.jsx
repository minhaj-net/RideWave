import React from 'react';
import { User, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const BlogsCard = ({ blog }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2.5rem] p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full group"
    >
      {/* Image Container with Clip Path */}
      <div className="relative mb-8 overflow-hidden rounded-3xl">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' 
          }}
        />
      </div>

      {/* Metadata */}
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <User className="text-[#FF5A1F]" size={16} />
          <span className="text-sm font-bold text-[#011421]/60 tracking-tight">{blog.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="text-[#FF5A1F]" size={16} />
          <span className="text-sm font-bold text-[#011421]/60 tracking-tight">{blog.date}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold text-[#011421] mb-8 line-clamp-2 leading-[1.3] group-hover:text-[#FF5A1F] transition-colors">
        {blog.title}
      </h3>

      {/* Divider */}
      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
        <Link 
          to={`/blog/details/${blog.id}`}
          className="text-sm font-extrabold text-[#011421] border-b-2 border-transparent hover:border-[#FF5A1F] transition-all"
        >
          Learn More
        </Link>
        <div className="w-10 h-10 bg-[#011421] rounded-full flex items-center justify-center text-white transition-colors group-hover:bg-[#FF5A1F]">
          <ArrowRight size={18} />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogsCard;