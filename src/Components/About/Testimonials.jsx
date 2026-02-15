import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Quote, Truck } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const planeX = useTransform(scrollYProgress, [0, 1], [-100, 200]);
    const planeY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const deliveryX = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const testimonials = [
        {
            text: "RideWave has transformed our supply chain with their reliable and efficient logistics solutions. Their team is responsive and always goes the extra mile to ensure timely deliveries. Highly recommended!",
            author: "Sarah Johnson",
            role: "Logistics Manager",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            text: "The tracking system is top-notch, and the customer support is always available whenever we need assistance. Their freight services have helped us scale our international operations significantly.",
            author: "Michael Chen",
            role: "CEO, Global Trade Inc.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            text: "Exceptional service! They handled our heavy equipment with extreme care and delivered it ahead of schedule. Truly the most professional logistics partner we've worked with.",
            author: "Emma Williams",
            role: "Operations Director",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section ref={containerRef} className="relative py-24 bg-white overflow-hidden">
            
            {/* Floating Airplane - Left */}
            <motion.div 
                style={{ x: planeX, y: planeY }}
                className="absolute left-10 top-1/4 opacity-10 pointer-events-none hidden lg:block z-0"
            >
                <img 
                    src="https://img.icons8.com/ios-filled/100/011421/airplane-mode-on.png" 
                    alt="Airplane" 
                    className="w-24 h-24 rotate-45"
                />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left: Image Group */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Orange Offset Frame */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#FF5A1F] rounded-b-[10rem] rounded-t-[2rem] z-0"></div>
                        
                        {/* Main Image */}
                        <div className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-b-[10rem] rounded-t-[2rem] shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
                                alt="Success Story" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decor Dots */}
                        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#FF5A1F]/5 rounded-full blur-2xl"></div>
                    </motion.div>

                    {/* Right: Content & Slider */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-6 text-[#FF5A1F]"
                        >
                            <Truck size={18} />
                            <span className="font-bold tracking-widest text-sm uppercase">Testimonial</span>
                        </motion.div>

                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-bold text-[#011421] leading-tight mb-12"
                        >
                            Our Customers Share Their  Success Stories
                        </motion.h2>

                        {/* Slider Area */}
                        <div className="relative group">
                            <Quote className="absolute -top-6 -right-2 text-[#FF5A1F]/10 w-24 h-24 z-0 rotate-12" />
                            
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 5000 }}
                                onSwiper={(swiper) => setSwiperInstance(swiper)}
                                className="z-10"
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="space-y-8">
                                            <p className="text-gray-500 text-lg font-medium italic leading-loose border-l-4 border-[#FF5A1F]/20 pl-6">
                                                "{item.text}"
                                            </p>
                                            
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF5A1F]/20">
                                                    <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-black text-[#011421]">{item.author}</h4>
                                                    <p className="text-[#FF5A1F] font-bold text-sm uppercase tracking-wider">{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Custom Navigation */}
                            <div className="flex items-center gap-4 mt-12 relative z-20">
                                <button 
                                    onClick={() => swiperInstance?.slidePrev()}
                                    className="w-14 h-14 font-blod duration-700 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-[#011421] hover:bg-[#FF5A1F] hover:border-[#FF5A1F] hover:text-white transition-all  shadow-lg group"
                                >
                                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <button 
                                    onClick={() => swiperInstance?.slideNext()}
                                    className="w-14 h-14 font-blod duration-700 rounded-full bg-[#FF5A1F] border-2 border-[#FF5A1F] flex items-center justify-center text-white hover:bg-[#011421] hover:border-[#011421] transition-all shadow-lg shadow-orange-100 group"
                                >
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                
                                {/* Line Decoration */}
                                <div className="hidden sm:block ml-4 flex-1 h-[2px] bg-gradient-to-r from-gray-100 via-[#FF5A1F]/20 to-transparent"></div>
                                
                                {/* Avatar Stack (Visual only) */}
                                <div className="hidden sm:flex -space-x-4 items-center pl-8">
                                    {testimonials.map((t, idx) => (
                                        <div key={idx} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm hover:translate-y-[-4px] transition-transform">
                                            <img src={t.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delivery Man Animation - Bottom Right */}
            <motion.div 
                style={{ x: deliveryX }}
                className="absolute -bottom-10 right-0 opacity-20 pointer-events-none hidden lg:block z-0"
            >
                <div className="relative">
                    <img 
                        src="https://img.icons8.com/external-flat-icons-inmotus-design/100/external-delivery-logistics-flat-icons-inmotus-design.png" 
                        alt="Delivery Man" 
                        className="w-48 h-48"
                    />
                    {/* Bouncing Box */}
                    <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-0 right-10"
                    >
                        <div className="w-8 h-8 bg-[#FF5A1F] rounded-sm transform rotate-12 shadow-md"></div>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
};

export default Testimonials;
