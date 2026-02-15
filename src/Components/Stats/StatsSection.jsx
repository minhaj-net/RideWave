import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plane, Users, Monitor, ShieldCheck, Cog } from 'lucide-react';

const CountUp = ({ to, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(to);
            if (start === end) return;

            let totalMiliseconds = 2000;
            let incrementTime = (totalMiliseconds / end);
            
            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, to]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const StatItem = ({ icon: Icon, value, suffix, label, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 px-4 py-8 lg:py-12 relative group"
    >
        {/* Icon */}
        <div className="flex-shrink-0">
            <div className="relative">
                <Icon size={48} className="text-[#FF5A1F] transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-[#FF5A1F] blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"></div>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
            <h3 className="text-white text-4xl lg:text-5xl font-bold tracking-tight leading-none mb-2">
                <CountUp to={value} suffix={suffix} />
            </h3>
            <p className="text-gray-400 text-sm lg:text-base font-medium leading-tight w-full">
                {label}
            </p>
        </div>

        {/* Vertical Separator for Desktop */}
        {index < 3 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 hidden lg:block"></div>
        )}
    </motion.div>
);

const StatsSection = () => {
    const stats = [
        { icon: Plane, value: "120", suffix: "K", label: "Successful Transportation" },
        { icon: Users, value: "50", suffix: "+", label: "Expert Team Member" },
        { icon: Monitor, value: "50", suffix: "+", label: "Years of Experience" },
        { icon: Cog, value: "50", suffix: "K", label: "Satisfied Customers" }
    ];

    return (
        <section className="bg-[#011421] relative overflow-hidden py-10">
            {/* Background Pattern - Modern Curves/Grid */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Subtle Abstract Curve Decorations */}
            <div className="absolute inset-0 z-0 opacity-20">
                <svg className="w-full h-full text-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="currentColor" fillOpacity="0.05" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
