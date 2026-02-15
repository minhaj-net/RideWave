import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, Box, ArrowUpRight, Plus, Minus
} from 'lucide-react';

const FAQContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How can I track my shipment?",
      answer: "You can easily track your shipment by entering your Tracking ID into our online tracking tool. Once submitted, you'll receive real-time updates on your shipment's location, delivery status, and estimated arrival time."
    },
    {
      question: "How do I get in touch with customer support?",
      answer: "You can reach our customer support team via the contact form on our website, by email at support@Ridewave.com, or by calling our 24/7 helpline. We are here to assist you with any inquiries."
    },
    {
      question: "What if my shipment is delayed or lost?",
      answer: "In the rare event of a delay or loss, please contact our support team immediately with your tracking ID. We will initiate an investigation and keep you updated on the status of your shipment."
    },
    {
      question: "Can I schedule recurring shipments?",
      answer: "Yes, we offer flexible scheduling options for recurring shipments. Please contact our sales team to discuss your specific requirements and set up a customized shipping schedule."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing is based on shipment weight, dimensions, destination, and service level. You can request a quote online or contact us for a detailed pricing breakdown tailored to your needs."
    }
  ];

  return (
    <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-sm mb-4">
             <span className="w-8 h-0.5 bg-[#FF5A1F]" />
             <span>Our Expert Team Members</span>
             <span className="w-8 h-0.5 bg-[#FF5A1F]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#011421] tracking-tight">
             What Details Are Required<br />for a Quote?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  activeIndex === idx 
                    ? 'bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100' 
                    : 'bg-[#F4F7F9] hover:bg-gray-100'
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-black tracking-tight ${activeIndex === idx ? 'text-[#011421]' : 'text-[#011421]/80'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${activeIndex === idx ? 'text-[#FF5A1F]' : 'text-[#FF5A1F]'}`}>
                    {activeIndex === idx ? <Minus size={20} className="stroke-[3px]" /> : <Plus size={20} className="stroke-[3px]" />}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm font-bold text-gray-400 leading-relaxed border-t border-gray-100/50 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column: Appointment Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="text-2xl font-black text-[#011421] mb-8">Make An Appointment</h3>
            <form className="space-y-6">
              <div className="relative">
                 <input 
                   type="text" 
                   placeholder="Your name" 
                   className="w-full bg-[#F4F7F9] rounded-2xl py-4 px-6 text-[#011421] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 transition-all placeholder:text-gray-400"
                 />
                 <User className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
              
              <div className="relative">
                 <input 
                   type="email" 
                   placeholder="Your email" 
                   className="w-full bg-[#F4F7F9] rounded-2xl py-4 px-6 text-[#011421] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 transition-all placeholder:text-gray-400"
                 />
                 <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>

              <div className="relative">
                 <input 
                   type="tel" 
                   placeholder="Phone Number" 
                   className="w-full bg-[#F4F7F9] rounded-2xl py-4 px-6 text-[#011421] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 transition-all placeholder:text-gray-400"
                 />
                 <Phone className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>

              <div className="relative">
                 <select 
                   className="w-full bg-[#F4F7F9] rounded-2xl py-4 px-6 text-gray-400 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 transition-all appearance-none cursor-pointer"
                 >
                    <option>Freight Sky</option>
                    <option>Ocean Cargo</option>
                    <option>Rail Transport</option>
                 </select>
                 <ArrowUpRight className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 rotate-90" size={18} />
              </div>

              <div className="relative">
                 <input 
                   type="text" 
                   placeholder="Total Unit" 
                   className="w-full bg-[#F4F7F9] rounded-2xl py-4 px-6 text-[#011421] font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F]/20 transition-all placeholder:text-gray-400"
                 />
                 <Box className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>

              <button className="w-full bg-[#FF5A1F] text-white py-5 rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-[#e04e1a] transition-all shadow-lg shadow-[#FF5A1F]/20 mt-4 group">
                 Book An Appointment
                 <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQContent;
