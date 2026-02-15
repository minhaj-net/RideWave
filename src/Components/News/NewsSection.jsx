import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, ArrowRight, Truck } from 'lucide-react';
import { Link } from 'react-router';

const NewsCard = ({ image, author, date, title, delay,id }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay }}
            viewport={{ once: true }}
            className="group cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 mb-6 aspect-[4/3]">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-6 mb-4 text-gray-500 font-bold text-sm">
                <div className="flex items-center gap-2">
                    <User size={16} className="text-[#FF5A1F]" />
                    <span>{author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#FF5A1F]" />
                    <span>{date}</span>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-black text-[#011421] leading-tight mb-6 transition-colors duration-300 group-hover:text-[#FF5A1F]">
                {title}
            </h3>

            {/* Learn More Link */}
            <div className="inline-flex items-center gap-2 text-[#011421] font-black text-sm uppercase tracking-wider relative group/link">
                <Link to={`blog/details/${id}`} className="border-b-2 border-transparent group-hover/link:border-[#FF5A1F] transition-all duration-300">Learn More</Link>
                <div className="w-8 h-8 rounded-full bg-[#011421] text-white flex items-center justify-center transition-all duration-300 group-hover/link:bg-[#FF5A1F] group-hover/link:translate-x-1">
                    <ArrowRight size={14} />
                </div>
            </div>
        </motion.div>
    );
};

const NewsSection = () => {
      const [news, setNews] = useState([]); // JSON data store korbe

  useEffect(() => {
    // JSON file load
    fetch("/blogs.json") // public folder er JSON file
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((jsonData) => {
        setNews(jsonData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // empty dependency, only run once on mount

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 text-[#FF5A1F]"
                    >
                        <Truck size={18} />
                        <span className="font-bold tracking-widest text-xs uppercase">Latest News</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold text-[#011421]"
                    >
                        Read Our Latest News &  Articles
                    </motion.h2>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {news.slice(0,3).map((item, index) => (
                        <NewsCard key={index} {...item} delay={index * 0.2} />
                    ))}
                </div>
            </div>
            
            {/* Background Texture Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full -mr-48 -mt-48 z-0 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF5A1F]/5 rounded-full -ml-48 -mb-48 z-0 opacity-50 blur-3xl"></div>
        </section>
    );
};

export default NewsSection;
