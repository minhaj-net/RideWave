import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const TrackingContent = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7F9]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl flex items-center justify-center p-4"
        >
            {/* Background Ship Image */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop")' }}
            >
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Glassmorphism Contact Box */}
            <div className="relative z-10 w-full max-w-4xl bg-black/30 backdrop-blur-xl rounded-[3rem] p-10 md:p-16 border border-white/10 shadow-2xl">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 tracking-tight">
                    Package Tracking
                </h2>

                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-white font-extrabold text-sm ml-4 tracking-wide">Tracking ID</label>
                            <input 
                                type="text" 
                                placeholder="Tracking ID" 
                                className="w-full bg-white rounded-full py-5 px-8 text-[#011421] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] transition-all"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-white font-extrabold text-sm ml-4 tracking-wide">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="info@example.com" 
                                className="w-full bg-white rounded-full py-5 px-8 text-[#011421] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] transition-all"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-[#FF5A1F] text-white py-6 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#e04e1a] transition-all shadow-xl shadow-[#FF5A1F]/30 group mt-4">
                        Track & Trace
                        <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrackingContent;
