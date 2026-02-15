import React from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, ChevronRight, Phone, Package, Award } from 'lucide-react';
import { Link } from 'react-router';

const AdvantagesSection = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: Overlapping Image Composition */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Main Image (Top-down truck) */}
                    <div className="relative w-[85%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                        <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                            alt="Logistics top down" 
                            className="w-full h-full object-cover aspect-[4/5]"
                        />
                    </div>

                    {/* Secondary Image (Night truck) */}
                    <div className="absolute -bottom-10 -right-4 w-[65%] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-8 border-white">
                        <img 
                            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
                            alt="Logistics night view" 
                            className="w-full h-full object-cover aspect-video"
                        />
                    </div>

                    {/* Orange Stats Card */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                        className="absolute top-10 -right-10 z-30 bg-[#FF5A1F] p-8 rounded-[2rem] text-white shadow-xl max-w-[200px]"
                    >
                        <h3 className="text-4xl font-extrabold mb-1">2.1 <span className="text-2xl">M</span></h3>
                        <p className="text-sm font-bold leading-tight opacity-90">Deliver Goods Every Weeks</p>
                    </motion.div>

                    {/* Dark Stats Card */}
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        viewport={{ once: true }}
                        className="absolute bottom-9 -left-0 z-30 bg-[#011421] p-8 rounded-[2rem] text-white shadow-xl max-w-[180px]"
                    >
                        <h3 className="text-4xl font-extrabold mb-1">5<span className="text-2xl">M</span></h3>
                        <p className="text-sm font-bold leading-tight opacity-90 text-center">Happy Customer</p>
                    </motion.div>
                </motion.div>

                {/* Right Side: Content Area */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col"
                >
                    <div className="flex items-center gap-2 mb-6 text-[#FF5A1F]">
                        <Truck size={20} />
                        <span className="font-bold tracking-widest text-sm uppercase">Who We Are</span>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-bold text-[#011421] mb-8 leading-tight">
                        The Advantages of Our <span className="text-[#011421]">logistic Transport</span>
                    </h2>

                    <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                        In a free hour when our power of choice is untram fm melled and when nothing prevents our being able to do what we to be welcomed fkjngn ff and every pain avoidedThe Advantages of Our logistic Transport.
                    </p>

                    {/* Feature Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-orange-100">
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#FF5A1F] transition-colors">
                                <Package className="text-[#FF5A1F] group-hover:text-white transition-colors" size={32} />
                            </div>
                            <h4 className="font-bold text-lg text-[#011421]">Packaging and <br />crating</h4>
                        </div>
                        <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl group hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-orange-100">
                            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#FF5A1F] transition-colors">
                                <Award className="text-[#FF5A1F] group-hover:text-white transition-colors" size={32} />
                            </div>
                            <h4 className="font-bold text-lg text-[#011421]">Certified & <br />Awards winner</h4>
                        </div>
                    </div>

                    <hr className="border-gray-100 mb-10" />

                    {/* Bullet Points */}
                    <div className="space-y-4 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="flex text-[#FF5A1F]">
                                <ChevronRight size={18} className="-mr-2" />
                                <ChevronRight size={18} />
                            </div>
                            <span className="font-bold text-[#011421]">We will never compromise the safety of our people</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex text-[#FF5A1F]">
                                <ChevronRight size={18} className="-mr-2" />
                                <ChevronRight size={18} />
                            </div>
                            <span className="font-bold text-[#011421]">With over four decades of experience providing solutions</span>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <Link to={"/aboutUs"}  className="bg-[#FF5A1F] text-white px-10 py-5 rounded-full flex items-center gap-3 font-bold text-lg shadow-xl shadow-orange-900/10 hover:bg-[#e04d1a] transition-all group w-full sm:w-auto justify-center">
                            About More
                            <ChevronRight size={22} className="transition-transform group-hover:translate-x-1" />
                        </Link>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-14 h-14 bg-[#011421] rounded-full flex items-center justify-center text-white ring-8 ring-gray-50 group-hover:bg-[#FF5A1F] transition-all">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Call Us Any Time:</p>
                                <a href='tel:01870567842' className="text-[#FF5A1F] font-extrabold text-xl">148 359 505 285</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
