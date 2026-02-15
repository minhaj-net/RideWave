import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Truck, ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router';

// const portfolioItemas = [
//     {
//         title: "RideWave Company",
//         category: "Wirehouse",
//         labelColor: "bg-[#FF5A1F]",
//         image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
//     },
//     {
//         title: "Air Freight Solution",
//         category: "Wirehouse",
//         labelColor: "bg-[#FF5A1F]",
//         image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop"
//     },
//     {
//         title: "Security For Cargo",
//         category: "Transport",
//         labelColor: "bg-[#FF5A1F]",
//         image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
//     },
//     {
//         title: "Warehouse Inventory",
//         category: "Wirehouse",
//         labelColor: "bg-[#FF5A1F]",
//         image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
//     },
//     {
//         title: "Maritime Logistics",
//         category: "Transport",
//         labelColor: "bg-[#FF5A1F]",
//         image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=2070&auto=format&fit=crop"
//     }
// ];

const FreightPortfolio = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
      const [portfolioItems, setData] = useState([]); // JSON data store korb
  useEffect(() => {
    // JSON file load
    fetch("/projects.json") // public folder er JSON file
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // empty dependency, only run once on mount







    return (
        <section className="relative py-24 bg-white overflow-hidden min-h-[600px] flex items-center">
            
            {/* Split Background */}
            <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-[#FF5A1F] hidden lg:block z-0"></div>

            <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4 text-[#FF5A1F]"
                        >
                            <Truck size={20} />
                            <span className="font-bold tracking-widest text-sm uppercase">What to expect</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-5xl font-black text-[#011421]"
                        >
                            Reliable Freight Projects
                        </motion.h2>
                    </div>

                    {/* Custom Navigation buttons */}
                    <div className="flex gap-4 mt-8 lg:mt-0">
                        <button 
                            ref={prevRef}
                            className="w-12 h-12 rounded-lg  font-bold duration-700 bg-white shadow-xl flex items-center justify-center text-[#011421] hover:bg-[#FF5A1F] hover:text-white transition-all  z-20"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button 
                            ref={nextRef}
                            className="w-12 h-12 rounded-lg font-bold duration-700 bg-white shadow-xl flex items-center justify-center text-[#011421] hover:bg-[#FF5A1F] hover:text-white transition-all z-20"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Slider Component */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 }
                        }}
                        className="!pb-12"
                    >
                        {portfolioItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-orange-200/50">
                                    {/* Image Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Category Label */}
                                    <div className="absolute bottom-26 left-6 z-20">
                                        <span className={`px-4 py-1.5 bg-[#FF5A1F] text-white font-bold text-xs rounded-lg uppercase tracking-wider`}>
                                            {item.category}
                                        </span>
                                    </div>

                                    {/* Title Box */}
                                    <div className="absolute bottom-4 left-4 right-4 z-20 bg-white p-4 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                                        <h3 className="text-[#011421] font-black text-xl lg:text-2xl truncate">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Hover Action Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                                        <Link
                                            to={`project/${item.id}`} 
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-[#FF5A1F] text-white p-4 rounded-full shadow-2xl"
                                        >
                                            <ArrowRight size={24} />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>

            {/* Background Texture Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF5A1F]/10"></div>
        </section>
    );
};

export default FreightPortfolio;
