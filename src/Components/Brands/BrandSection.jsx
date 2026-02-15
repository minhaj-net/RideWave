import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ship } from 'lucide-react';

const BrandLogo = ({ index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-2 group cursor-pointer"
    >
        <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center">
            {/* Logo Icon Style - Mimicking the image */}
            <div className="absolute inset-0 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors"></div>
            <div className="relative z-10 text-white group-hover:text-[#FF5A1F] transition-colors">
                <Ship size={32} className={index % 2 === 0 ? "text-[#FF5A1F]" : "text-white"} />
            </div>
            {/* Stylized ship shape using SVG */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <path d="M20,70 L80,70 L90,50 L10,50 Z" fill="currentColor" className="opacity-20 translate-y-2" />
            </svg>
        </div>
        <div className="text-center">
            <h4 className="text-white font-black text-sm lg:text-base tracking-tighter uppercase leading-none">Cargo Ship</h4>
            <p className="text-[8px] lg:text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Your Slogan Here</p>
        </div>
    </motion.div>
);

const BrandSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={sectionRef} className="relative h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <motion.div 
                style={{ y }}
                className="absolute inset-0 z-0 w-full h-[120%]"
            >
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')`,
                    }}
                ></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#011421]/80 mix-blend-multiply"></div>
            </motion.div>

            {/* Logo Grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 lg:gap-16 items-center justify-items-center">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <BrandLogo key={i} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandSection;
