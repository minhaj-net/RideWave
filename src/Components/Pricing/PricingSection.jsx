import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Phone, ChevronsRight, Truck } from 'lucide-react';

const PricingCard = ({ type, price, features, isFeatured = false }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 overflow-hidden group ${
                isFeatured 
                ? 'bg-[#011421] text-white shadow-2xl scale-105 z-10' 
                : 'bg-white text-[#011421] border border-gray-100 shadow-xl hover:shadow-2xl z-0'
            }`}
        >
            {/* Featured Background Pattern */}
            {isFeatured && (
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
            )}

            <div className="relative z-10 flex justify-center gap-30 h-full">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2 block">{type}</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-4xl lg:text-5xl font-black">${price}</span>
                            <span className="text-sm font-bold opacity-60">/Month</span>
                        </div>
                    </div>
                </div>

              <div>
                  <ul className="space-y-5 mb-10 flex-1">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                feature.included 
                                ? 'bg-[#FF5A1F]/10 text-[#FF5A1F]' 
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                                {feature.included ? <Check size={12} strokeWidth={4} /> : <X size={12} strokeWidth={4} />}
                            </div>
                            <span className={`font-bold text-sm ${isFeatured ? 'text-gray-300' : 'text-gray-500'}`}>
                                {feature.text}
                            </span>
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                    isFeatured 
                    ? 'bg-white text-[#011421] hover:bg-[#FF5A1F] hover:text-white' 
                    : 'bg-gray-100 text-[#011421] hover:bg-[#FF5A1F] hover:text-white'
                }`}>
                    Get Started <ArrowRight size={16} />
                </button>
              </div>
            </div>
        </motion.div>
    );
};

const PricingSection = () => {
    const plans = [
        {
            type: "Starter",
            price: "249",
            features: [
                { text: "Domestic ground shipping", included: true },
                { text: "Up to 100 shipments/month", included: true },
                { text: "Basic analytics dashboard", included: true },
            ]
        },
        {
            type: "Standard",
            price: "249",
            isFeatured: true,
            features: [
                { text: "Domestic ground shipping", included: true },
                { text: "Up to 100 shipments/month", included: true },
                { text: "Basic analytics dashboard", included: true },
            ]
        },
        {
            type: "Premium",
            price: "249",
            features: [
                { text: "Domestic ground shipping", included: true },
                { text: "Up to 100 shipments/month", included: true },
                { text: "Basic analytics dashboard", included: true },
            ]
        }
    ];

    return (
        <section className="relative py-24 bg-[#F1F5F9] overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 ">
                    
                    {/* Left: Content Area */}
                    <div className="lg:col-span-5">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-2 text-[#FF5A1F]">
                                <Truck size={18} />
                                <span className="font-bold tracking-widest text-xs uppercase">Pricing Plan</span>
                            </div>
                            
                            <h2 className="text-4xl lg:text-4xl font-bold text-[#011421] leading-tight">
                                Leading global logistic and transport agency
                            </h2>
                            
                            <p className="text-gray-500 font-medium leading-relaxed">
                                With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.
                            </p>

                            <div className="space-y-4 py-6">
                                <div className="flex items-center gap-3 group">
                                    <div className="text-[#FF5A1F] transition-transform group-hover:translate-x-1">
                                        <ChevronsRight size={20} />
                                    </div>
                                    <span className="font-black text-[#011421] text-sm">We will never compromise the safety of our people</span>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <div className="text-[#FF5A1F] transition-transform group-hover:translate-x-1">
                                        <ChevronsRight size={20} />
                                    </div>
                                    <span className="font-black text-[#011421] text-sm">With over four decades of experience providing solution</span>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" alt="Expert" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-gray-400 font-bold text-xs uppercase">Call Us for any Inquiry</p>
                                    <a href='tel:1 359 505 285' className="text-[#FF5A1F] font-black text-xl hover:scale-105 transition-transform cursor-pointer">+1 359 505 285</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Pricing Cards */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col gap-6">
                            {plans.map((plan, index) => (
                                <PricingCard key={index} {...plan} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bouncing Drone - Bottom Left */}
            <motion.div 
                animate={{ y: [0, -40, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 z-20 pointer-events-none hidden lg:block"
            >
                <div className="relative group">
                    {/* Drone Image */}
                    <img 
                        src="https://i.ibb.co.com/93NPSg0M/pricing-sh1.png" 
                        alt="Drone" 
                        className="w-48 h-48 drop-shadow-2xl"
                    />
                   
                </div>
            </motion.div>

        </section>
    );
};

export default PricingSection;
