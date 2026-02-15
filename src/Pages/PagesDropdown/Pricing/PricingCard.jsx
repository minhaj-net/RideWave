import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PricingCard = ({ plan, isYearly }) => {
  const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const cycleLabel = isYearly ? '/per year' : '/per month';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Top Section with Wave Background */}
      <div className="relative p-10 pb-12 overflow-hidden">
        {/* Subtle Wave SVG Background */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-45">
            <path d="M0,160 C120,20 280,300 400,160" fill="transparent" stroke="currentColor" strokeWidth="2" />
            <path d="M0,180 C120,40 280,320 400,180" fill="transparent" stroke="currentColor" strokeWidth="2" />
            <path d="M0,200 C120,60 280,340 400,200" fill="transparent" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10">
          <h4 className="text-xl font-black text-[#011421] mb-4">{plan.name}</h4>
          <p className="text-xs font-bold text-gray-400 uppercase leading-relaxed mb-8 max-w-[200px]">
            {plan.description}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black text-[#011421] tracking-tight">${currentPrice}</span>
            <span className="text-sm font-bold text-gray-400">{cycleLabel}</span>
          </div>
        </div>
      </div>

      {/* Middle Section: Features List */}
      <div className="bg-[#f8fafd] p-10 pt-12">
        <ul className="space-y-4 mb-10">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="text-sm font-bold text-[#011421] opacity-70 flex items-center justify-center">
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="w-full bg-[#011421] text-white py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#FF5A1F] transition-all group overflow-hidden relative">
          <span className="relative z-10">Get Started</span>
          <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          <div className="absolute inset-0 bg-[#FF5A1F] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
