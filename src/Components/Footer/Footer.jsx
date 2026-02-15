import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { 
    Facebook, 
    Instagram, 
    Linkedin, 
    Send, 
    ArrowRight 
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative  overflow-hidden w-full">
            
            {/* 1. Relevant Background Image (Logistics/Freight) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
                <img 
                    src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?q=80&w=2070&auto=format&fit=crop" 
                    alt="Logistics Background" 
                    className="w-full h-full object-cover opacity-30 grayscale-[0.2]"
                />
                {/* Enhanced Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d13]/95 via-[#0a0d13]/70 to-[#0a0d13]"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 pt-24">
                
                {/* 2. Newsletter Section (Header + Form) */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-7xl font-black text-white leading-[1.1] lg:max-w-xl text-center lg:text-left tracking-tighter"
                    >
                        Subscribe Our <br /> Newsletter
                    </motion.h2>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full max-w-2xl bg-white/5 backdrop-blur-3xl border border-white/20 rounded-full p-2 flex items-center group focus-within:border-white/40 transition-all duration-300"
                    >
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="flex-1 bg-transparent px-8 py-4 outline-none text-white font-medium placeholder:text-gray-400"
                        />
                        <button className="bg-[#FF5A1F] hover:bg-[#e04e1a] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2 transition-all duration-300 shadow-xl shadow-orange-950/20 group">
                            Subscribe <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                {/* 3. Main Footer Card (Highly Rounded) */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-[#0f141b]/20 backdrop-blur-2xl rounded-[4rem] p-12 lg:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
                        
                        {/* Col 1: Brand & Desc */}
                        <div className="lg:col-span-4 space-y-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-10 bg-[#FF5A1F] relative flex items-center justify-center rounded-sm">
                                    {/* Triangle Arrow Logo */}
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent transform rotate-[-30deg]"></div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white tracking-tight">Ride<span className="text-[#FF5A1F]">Wave</span></span>
                                    <span className="text-[10px] font-bold text-gray-500 tracking-[0.25em] uppercase -mt-1">One Track Express</span>
                                </div>
                            </div>
                            <p className="text-gray-400 font-medium leading-[1.8] max-w-sm">
                                Our dedication lies in embracing challenges and pioneering innovation within the more attractive advertising sector.
                            </p>
                            <div className="flex items-center gap-4">
                                {[Facebook, TwitterIcon, Instagram, LinkedinIcon].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-12 h-12 rounded-full border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-[#FF5A1F] hover:border-[#FF5A1F] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                        {typeof Icon === 'string' ? <span className="font-black text-sm">{Icon}</span> : <Icon size={18} />}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Col 2: Quick Links */}
                        <div className="lg:col-span-2">
                            <h4 className="text-xl font-black text-white mb-2 relative inline-block group">
                                Quick Links
                                <div className="w-8 h-1 bg-[#FF5A1F] mt-2 rounded-full transition-all group-hover:w-full"></div>
                            </h4>
                            <ul className="space-y-5 mt-10">
                                {['About Us', 'Our Services', 'Project', 'FAQ\'s', 'Our Blog', 'Contact Us'].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 font-bold hover:text-[#FF5A1F] transition-colors">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Our Services */}
                        <div className="lg:col-span-3">
                            <h4 className="text-xl font-black text-white mb-2 relative inline-block group">
                                Our Services
                                <div className="w-8 h-1 bg-[#FF5A1F] mt-2 rounded-full transition-all group-hover:w-full"></div>
                            </h4>
                            <ul className="space-y-5 mt-10">
                                {['Ship Fright Shipping', 'Less Than Truckload', 'Container Freight', 'Adult Health', 'Rail Freight Shipping', 'Air Fright Trucking'].map((service) => (
                                    <li key={service}>
                                        <a href="#" className="text-gray-400 font-bold hover:text-[#FF5A1F] transition-colors">{service}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4: Opening Hours */}
                        <div className="lg:col-span-3 space-y-12">
                            <div>
                                <h4 className="text-xl font-black text-white mb-2 relative inline-block group">
                                    Opening Hours
                                    <div className="w-8 h-1 bg-[#FF5A1F] mt-2 rounded-full transition-all group-hover:w-full"></div>
                                </h4>
                                <ul className="space-y-5 mt-10">
                                    <li className="flex items-center justify-between text-gray-400 font-bold">
                                        <span>Week Days</span>
                                        <span className="text-white">09.00 - 7.00</span>
                                    </li>
                                    <li className="flex items-center justify-between text-gray-400 font-bold">
                                        <span>Saturday</span>
                                        <span className="text-white">08.00 - 2.00</span>
                                    </li>
                                    <li className="flex items-center justify-between text-gray-400 font-bold">
                                        <span>Sunday</span>
                                        <span className="text-white">Day Off</span>
                                    </li>
                                </ul>
                            </div>
                            <button className="w-full bg-white hover:bg-white/95 text-[#011421] px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group active:scale-95">
                                Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* 4. Bottom Copyright Bar */}
                <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 px-4">
                    <p className="text-gray-500 font-bold text-sm tracking-wide">
                        Copyright © 2026 <span className="text-[#FF5A1F]">Ridewave</span> All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-10 text-gray-500 font-bold text-sm">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <div className="w-px h-4 bg-gray-800 hidden md:block" />
                        <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Condition</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const TwitterIcon = () => <span className="font-black text-lg">X</span>;
const LinkedinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

export default Footer;
