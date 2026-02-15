import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';
import PricingCard from './PricingCard';

const PricingContent = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic Plan",
      description: "Perfect for startups needing features to get started smoothly.",
      monthlyPrice: 15,
      yearlyPrice: 150,
      features: [
        "Branding and design Identity",
        "Web site Marketing Solutions",
        "Limited keyword analysis",
        "24/7 system Monitoring",
        "Dedicated IP Address"
      ]
    },
    {
      name: "Standard Plan",
      description: "Perfect for startups needing features to get started smoothly.",
      monthlyPrice: 25,
      yearlyPrice: 250,
      features: [
        "Branding and design Identity",
        "Web site Marketing Solutions",
        "Limited keyword analysis",
        "24/7 system Monitoring",
        "Dedicated IP Address"
      ]
    },
    {
      name: "Premium Plan",
      description: "Perfect for startups needing features to get started smoothly.",
      monthlyPrice: 45,
      yearlyPrice: 450,
      features: [
        "Branding and design Identity",
        "Web site Marketing Solutions",
        "Limited keyword analysis",
        "24/7 system Monitoring",
        "Dedicated IP Address"
      ]
    }
  ];

  return (
    <div className="bg-[#f4f7f9] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-xs mb-4">
            <Truck size={16} />
            <span>Pricing Plan</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#011421] tracking-tight mb-12">
            Choose The Right Plan For Growth
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6">
             <span className={`text-sm font-black uppercase tracking-widest transition-colors ${!isYearly ? 'text-[#011421]' : 'text-gray-400'}`}>Monthly</span>
             <button 
               onClick={() => setIsYearly(!isYearly)}
               className="w-16 h-8 bg-[#011421] rounded-full relative p-1 cursor-pointer transition-all"
             >
                <motion.div 
                  initial={false}
                  animate={{ x: isYearly ? 32 : 0 }}
                  className="w-6 h-6 bg-white rounded-full shadow-md"
                />
             </button>
             <div className="flex items-center gap-2">
                <span className={`text-sm font-black uppercase tracking-widest transition-colors ${isYearly ? 'text-[#011421]' : 'text-gray-400'}`}>Yearly</span>
                <span className="bg-[#FF4D4D]/10 text-[#FF4D4D] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">Save 25%</span>
             </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} isYearly={isYearly} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default PricingContent;
