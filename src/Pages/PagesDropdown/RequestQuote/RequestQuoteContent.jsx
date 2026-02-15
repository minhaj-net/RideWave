import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Truck, 
  Ship, 
  MapPin, 
  Headphones, 
  DollarSign, 
  User, 
  Mail, 
  Phone, 
  Box, 
  Calendar, 
  Clock,
  ArrowRight
} from 'lucide-react';

const RequestQuoteContent = () => {
  const features = [
    {
      title: "Transparent Pricing",
      icon: <div className="flex flex-col gap-1 items-center justify-center">
        <Plane size={16} className="text-[#FF5A1F]" />
        <div className="flex gap-1">
           <Ship size={14} className="text-[#FF5A1F]" />
           <Truck size={14} className="text-[#FF5A1F]" />
        </div>
      </div>,
      theme: "navy"
    },
    {
      title: "Real Time Tracking",
      icon: <MapPin size={24} className="text-white" />,
      theme: "orange"
    },
    {
      title: "24/7 Online Support",
      icon: <Headphones size={24} className="text-[#FF5A1F]" />,
      theme: "navy"
    }
  ];

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Feature Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-10 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center relative pt-16 group hover:-translate-y-2 transition-transform h-48"
            >
              <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
                feature.theme === 'orange' ? 'bg-[#FF5A1F]' : 'bg-[#011421]'
              }`}>
                {feature.icon}
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] ${
                   feature.theme === 'orange' ? 'border-t-[#FF5A1F]' : 'border-t-[#011421]'
                }`} />
              </div>
              <h3 className="text-xl font-extrabold text-[#011421] tracking-tight">{feature.title}</h3>
              <div className={`mt-4 w-12 h-1 ${feature.theme === 'orange' ? 'bg-[#FF5A1F]' : 'bg-[#011421]/10'}`} />
            </motion.div>
          ))}
        </div>

        {/* --- Main Quote Form Section --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3.5rem] shadow-[0_25px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-stretch"
        >
          {/* Left Side: Image */}
          <div className="lg:w-[40%] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
             <img 
               src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop" 
               alt="Cargo Truck" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#011421]/60 to-transparent" />
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-[60%] flex flex-col justify-center">
            <form className="space-y-12">
              
              {/* Personal Info */}
              <div className="space-y-6">
                <h4 className="text-lg font-extrabold text-[#011421] tracking-tight">Personal Info</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white border border-gray-100 rounded-full py-4 px-12 text-sm font-bold text-[#011421] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm" 
                    />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF5A1F]" size={18} />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-white border border-gray-100 rounded-full py-4 px-12 text-sm font-bold text-[#011421] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm" 
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF5A1F]" size={18} />
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder="Your Phone" 
                      className="w-full bg-white border border-gray-100 rounded-full py-4 px-12 text-sm font-bold text-[#011421] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm" 
                    />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF5A1F]" size={18} />
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-100 w-full" />

              {/* Shipment Info */}
              <div className="space-y-6">
                <h4 className="text-lg font-extrabold text-[#011421] tracking-tight">Shipment Info</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-100 rounded-full py-4 px-8 text-sm font-bold text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm cursor-pointer">
                      <option value="">Fright Type</option>
                      <option value="air">Air Freight</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="road">Road Freight</option>
                    </select>
                    <Box className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={16} />
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 w-px h-8 bg-gray-100" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="City Departure" 
                    className="w-full bg-white border border-gray-100 rounded-full py-4 px-8 text-sm font-bold text-[#011421] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm" 
                  />
                  <input 
                    type="text" 
                    placeholder="Delivery City" 
                    className="w-full bg-white border border-gray-100 rounded-full py-4 px-8 text-sm font-bold text-[#011421] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm" 
                  />
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-100 rounded-full py-4 px-8 text-sm font-bold text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm cursor-pointer">
                      <option value="">Incoterms</option>
                      <option value="fob">FOB</option>
                      <option value="cif">CIF</option>
                      <option value="exw">EXW</option>
                    </select>
                    <Box className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={16} />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Date" 
                      onFocus={(e) => (e.target.type = 'date')}
                      className="w-full bg-white border border-gray-100 rounded-full py-4 px-8 text-sm font-bold text-[#011421] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm" 
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={16} />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Time" 
                      onFocus={(e) => (e.target.type = 'time')}
                      className="w-full bg-white border border-gray-100 rounded-full py-4 px-8 text-sm font-bold text-[#011421] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 focus:border-[#FF5A1F] transition-all shadow-sm" 
                    />
                    <Clock className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" size={16} />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button className="bg-[#FF5A1F] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-[#e04e1a] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#FF5A1F]/20 group">
                   Request A Quote
                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default RequestQuoteContent;
