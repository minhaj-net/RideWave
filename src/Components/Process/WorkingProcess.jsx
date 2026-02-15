import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Plane, ChevronRight } from 'lucide-react';

const WorkingProcess = () => {
    const steps = [
        {
            id: "01",
            title: "Select Services",
            description: "Lorain Air freight service deliver knowledge opportunity",
            image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
            border: "border-blue-200"
        },
        {
            id: "02",
            title: "Parcel Information",
            description: "Lorain Air freight service deliver knowledge opportunity",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
            border: "border-orange-200"
        },
        {
            id: "03",
            title: "Transportation",
            description: "Lorain Air freight service deliver knowledge opportunity",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
            border: "border-blue-200"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            
            {/* Crane Graphic - Top Right */}
            <div className="absolute top-0 right-10 z-20 pointer-events-none hidden lg:block">
                <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <img src="https://i.ibb.co.com/TBcmbW8M/slide-sh1.png" alt="" />
                    {/* Crane Line */}
                    {/* <div className="w-[2px] h-32 bg-gray-300 mx-auto"></div> */}
                    {/* Containers */}
                    {/* <div className="flex flex-col gap-1 -mt-2">
                        <div className="w-32 h-12 bg-[#FF5A1F] rounded-sm flex items-center justify-center text-white font-black text-xs shadow-lg transform rotate-2">
                            EXPORT
                        </div>
                        <div className="w-36 h-14 bg-[#08aae0] rounded-sm flex items-center justify-center text-white font-black text-sm shadow-xl ml-4 -mt-1">
                            IMPORT
                        </div>
                    </div> */}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header Area */}
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4 text-[#FF5A1F]"
                    >
                        <Truck size={18} />
                        <span className="font-bold tracking-widest text-sm uppercase text-orange-500">Working Process</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-5xl font-bold text-[#011421] leading-tight"
                    >
                        Logistics Solutions to Help Businesses
                    </motion.h2>
                </div>

                {/* Timeline and Steps */}
                <div className="relative">
                    
                    {/* Main Connecting Dotted Line */}
                    <div className="absolute top-[48px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gray-200 hidden lg:block z-0">
                        {/* Animated Airplane */}
                        <motion.div 
                            initial={{ left: "0%" }}
                            whileInView={{ left: "100%" }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-[14px] z-10"
                        >
                            <div className="bg-[#FF5A1F] p-2 rounded-full shadow-lg">
                                <Plane size={16} className="text-white transform rotate-45" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 items-start">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center group relative h-full"
                            >
                                {/* Step Number */}
                                <div className="relative z-10 w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-orange-500 transition-all duration-500 mb-8 shadow-inner">
                                    <span className="text-[#011421] font-black text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                                        {step.id}
                                    </span>
                                    
                                    {/* Small orange airplane icon between numbers on line for small/mid screens */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 lg:hidden">
                                            <Plane size={20} className="text-[#FF5A1F] rotate-45" />
                                        </div>
                                    )}
                                    
                                    {/* Middle plane connector for desktop (between numbers) */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute -right-32 top-11 hidden lg:block">
                                            <Plane size={20} className="text-[#FF5A1F] opacity-30 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    )}
                                </div>

                                {/* Step Image Container */}
                                <div className={`relative w-48 h-48 lg:w-56 lg:h-56 rounded-full p-2 border-2 ${step.border} group-hover:scale-105 transition-transform duration-500 mb-8`}>
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                                        <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    
                                    {/* Directional Chevron Arrows */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-1/2 -right-16 lg:-right-24 -translate-y-1/2 hidden lg:flex flex-col gap-1 opacity-10 group-hover:opacity-30 transition-opacity">
                                            <ChevronRight size={40} className="-mb-6" />
                                            <ChevronRight size={40} className="-mb-6" />
                                            <ChevronRight size={40} />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="text-center px-4">
                                    <h3 className="text-2xl font-black text-[#011421] mb-4 group-hover:text-[#FF5A1F] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-[200px]">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute -inset-4 bg-orange-50 -z-10 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity blur-2xl"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Texture Decorations */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>
    );
};

export default WorkingProcess;
