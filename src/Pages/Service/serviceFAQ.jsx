import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Package, 
  ChevronDown, 
  Plus, 
  Minus, 
  ArrowRight 
} from 'lucide-react';

const faqs = [
  {
    question: "How can I track my shipment?",
    answer: "You can easily track your shipment by entering your Tracking ID into our online tracking tool. Once submitted, you'll receive real-time updates on your shipment's location, delivery."
  },
  {
    question: "How do I get in touch with customer support?",
    answer: "Our support team is available 24/7 via live chat, email, or phone. You can reach us at the contact details provided in our help center."
  },
  {
    question: "What if my shipment is delayed or lost?",
    answer: "In the rare event of a delay or loss, our dedicated recovery team will investigate and provide regular updates. We also offer insurance for added peace of mind."
  },
  {
    question: "Can I schedule recurring shipments?",
    answer: "Yes, we offer flexible scheduling for regular deliveries. You can set up daily, weekly, or monthly recurring shipments through your client dashboard."
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing is transparent and based on weight, distance, and service speed. Request a quick quote to get an exact estimate for your specific needs."
  }
];

const serviceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#FF5A1F]" />
            <span className="text-[#FF5A1F] text-xs font-bold uppercase tracking-widest">Our Expert Team Members</span>
            <div className="w-8 h-0.5 bg-[#FF5A1F]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#011421] leading-tight max-w-2xl">
            What Details Are Required for a Quote?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-3 bg-gray-50/50 p-6 md:p-8 rounded-[40px] border border-gray-100">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl border transition-all duration-300 ${
                    openIndex === index ? 'bg-white border-gray-100 shadow-xl' : 'bg-white border-transparent'
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <span className={`text-base font-bold transition-colors ${
                      openIndex === index ? 'text-[#011421]' : 'text-gray-600'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`transition-colors ${openIndex === index ? 'text-[#FF5A1F]' : 'text-gray-400'}`}>
                      {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-50 mt-2 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-[40px] shadow-2xl shadow-gray-200 border border-gray-100 h-full">
            <h3 className="text-2xl font-extrabold text-[#011421] mb-8">
              Make An Appointment
            </h3>
            
            <form className="flex flex-col gap-5">
              {/* Name */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 py-4 text-sm text-[#011421] focus:outline-none focus:border-[#FF5A1F] focus:bg-white transition-all placeholder:text-gray-400 pr-12"
                />
                <User size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Email */}
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 py-4 text-sm text-[#011421] focus:outline-none focus:border-[#FF5A1F] focus:bg-white transition-all placeholder:text-gray-400 pr-12"
                />
                <Mail size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Phone */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 py-4 text-sm text-[#011421] focus:outline-none focus:border-[#FF5A1F] focus:bg-white transition-all placeholder:text-gray-400 pr-12"
                />
                <Phone size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Frieght Sky (Select) */}
              <div className="relative">
                <select className="appearance-none w-full bg-gray-50 border border-gray-100 rounded-full px-6 py-4 text-sm text-[#011421] focus:outline-none focus:border-[#FF5A1F] focus:bg-white transition-all cursor-pointer pr-12">
                  <option value="" disabled selected>Frieght Sky</option>
                  <option value="air">Air Freight</option>
                  <option value="ocean">Ocean Freight</option>
                  <option value="road">Road Freight</option>
                </select>
                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              {/* Total Unit */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Total Unit" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 py-4 text-sm text-[#011421] focus:outline-none focus:border-[#FF5A1F] focus:bg-white transition-all placeholder:text-gray-400 pr-12"
                />
                <Package size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Submit Button */}
              <button className="bg-[#FF5A1F] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 font-extrabold text-sm shadow-lg shadow-orange-500/20 hover:bg-[#e04d1a] transition-all group mt-2">
                Book An Appointment
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default serviceFAQ;