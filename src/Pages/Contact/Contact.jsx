import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ChevronRight,
  User,
  Package,
  Weight,
  MessageSquare,
  Truck,
  Send,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('Hong Kong');

  const infoCards = [
    {
      icon: <Phone size={24} className="text-[#FF5A1F]" />,
      title: "Reach Us",
      details: [
        "Phone : +66 58 256 978",
        "Email : Ridewaveinfo@gmail.com"
      ],
      action: "SEND YOUR MAIL",
      bgLabel: "REACH US"
    },
    {
      icon: <Clock size={24} className="text-[#FF5A1F]" />,
      title: "Office Hours",
      details: [
        "Mon-Sat : 07:00 am to 10:00 pm",
        "Sunday : Closed"
      ],
      action: "MAKE AN APPOINTMENT",
      bgLabel: "OFFICE HOURS"
    },
    {
      icon: <MapPin size={24} className="text-[#FF5A1F]" />,
      title: "Location",
      details: [
        "Germany-",
        "75 15h Street, Office 47 Berlin,"
      ],
      action: "VIEW ON MAP",
      bgLabel: "LOCATION"
    }
  ];

  const locations = [
    { name: 'Hong Kong', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8794833292497!2d113.91848087529241!3d22.319303879678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e29f0367373f%3A0xc3f58e6784e4e3f!2sHong%20Kong%20International%20Airport!5e0!3m2!1sen!2sbd!4v1714567890123!5m2!1sen!2sbd' },
    { name: 'Singapur', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.192422530752!2d103.98930997529241!3d1.364420199678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17d121773ec1%3A0x6e263d906169094d!2sSingapore%20Changi%20Airport!5e0!3m2!1sen!2sbd!4v1714567890123!5m2!1sen!2sbd' },
    { name: 'Switzerland', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10800.0!2d8.55!3d47.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b2fca00!2sZurich%20Airport!5e0!3m2!1sen!2sbd!4v1714567890123!5m2!1sen!2sbd' },
    { name: 'New York City', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0!2d-73.77!3d40.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26650d5404947%3A0x63346cf05d691e81!2sJohn%20F.%20Kennedy%20International%20Airport!5e0!3m2!1sen!2sbd!4v1714567890123!5m2!1sen!2sbd' }
  ];

  return (
    <div className="bg-[#f4f7f9] overflow-hidden">
      
      {/* --- TOP SECTION (Image 1) --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-sm mb-4">
              <Truck size={18} />
              <span>Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#011421] tracking-tight">
              Start Your Journey with Us
            </h2>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {infoCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col relative group overflow-hidden h-full"
              >
                {/* Background Text Label */}
                <span className="absolute bottom-6 right-6 text-[40px] font-black text-gray-100/50 leading-none select-none pointer-events-none uppercase">
                  {card.bgLabel}
                </span>

                <div className="flex gap-6 items-start relative z-10 lg:flex-row flex-col">
                  {/* Icon Box */}
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-[#FF5A1F]/10 transition-colors">
                    {card.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-extrabold text-[#011421] mb-1">{card.title} :</h3>
                    <div className="space-y-1">
                      {card.details.map((line, i) => (
                        <p key={i} className="text-sm font-bold text-gray-500 tracking-tight leading-relaxed">{line}</p>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#011421] mt-6 hover:text-[#FF5A1F] transition-colors">
                      {card.action}
                      <span className="text-[#FF5A1F]">»»</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Connect */}
          <div className="flex flex-col items-center gap-8">
            <h4 className="text-xl font-extrabold text-[#011421]">Social Connect:</h4>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button key={i} className="w-12 h-12 bg-[#FF5A1F] rounded-full flex items-center justify-center text-white hover:scale-110 shadow-lg shadow-[#FF5A1F]/30 transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTTOM SECTION (Image 2) --- */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-sm mb-4">
              <Truck size={18} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#011421] tracking-tight">
              Reach out anytime for help!
            </h2>
          </div>

          <div className="h-px bg-gray-100 w-full mb-12" />

          {/* Location Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100 mb-12">
            {locations.map((loc) => (
              <button
                key={loc.name}
                onClick={() => setActiveTab(loc.name)}
                className={`flex items-center justify-between px-8 py-6 text-base font-bold transition-all border-r border-gray-100 last:border-0 ${
                  activeTab === loc.name 
                  ? 'text-[#FF5A1F] bg-white border-b-2 border-b-[#FF5A1F]' 
                  : 'text-gray-400 bg-white hover:bg-gray-50'
                }`}
              >
                {loc.name}
                <ChevronRight size={18} className={activeTab === loc.name ? 'text-[#FF5A1F]' : 'text-gray-300'} />
              </button>
            ))}
          </div>

          {/* Map and Form Container */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Map Frame */}
            <motion.div 
               key={activeTab}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="w-full lg:w-[40%] h-[500px] md:h-auto rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-gray-50"
            >
              <iframe 
                src={locations.find(l => l.name === activeTab).map}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-90 contrast-125"
              />
            </motion.div>

            {/* Overlaid Contact Form Section */}
            <div className="w-full lg:w-[60%] relative rounded-[2.5rem] overflow-hidden min-h-[600px] flex items-center justify-center">
              {/* Background with Truck Image */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop")' }}
              >
                 <div className="absolute inset-0 bg-[#011421]/60 backdrop-blur-[2px]" />
              </div>

              {/* Form Content */}
              <div className="relative z-10 w-full p-8 md:p-12">
                <form className="space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full bg-white rounded-full py-4 px-8 text-[#011421] placeholder-gray-400 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] transition-all"
                    />
                    <User className="absolute right-6 top-1/2 -translate-y-1/2 text-[#FF5A1F]" size={18} />
                  </div>

                  {/* Mail and Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="w-full bg-white rounded-full py-4 px-8 text-[#011421] placeholder-gray-400 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] transition-all"
                      />
                      <Mail className="absolute right-6 top-1/2 -translate-y-1/2 text-[#FF5A1F]" size={18} />
                    </div>
                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="Phone no" 
                        className="w-full bg-white rounded-full py-4 px-8 text-[#011421] placeholder-gray-400 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] transition-all"
                      />
                      <Phone className="absolute right-6 top-1/2 -translate-y-1/2 text-[#FF5A1F]" size={18} />
                    </div>
                  </div>

                  {/* Dropdowns Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <select className="w-full bg-white rounded-full py-4 px-8 text-gray-400 font-bold text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] transition-all cursor-pointer">
                        <option value="">Freight Type</option>
                        <option value="air">Air Freight</option>
                        <option value="ocean">Ocean Freight</option>
                        <option value="road">Road Freight</option>
                      </select>
                      <Package className="absolute right-6 top-1/2 -translate-y-1/2 text-[#FF5A1F] pointer-events-none" size={18} />
                    </div>
                    <div className="relative">
                      <select className="w-full bg-white rounded-full py-4 px-8 text-gray-400 font-bold text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] transition-all cursor-pointer">
                        <option value="">Load</option>
                        <option value="small">Small (0-500kg)</option>
                        <option value="medium">Medium (500-2000kg)</option>
                        <option value="large">Large (2000kg+)</option>
                      </select>
                      <Weight className="absolute right-6 top-1/2 -translate-y-1/2 text-[#FF5A1F] pointer-events-none" size={18} />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea 
                      rows="4" 
                      placeholder="Message" 
                      className="w-full bg-white rounded-[2rem] py-4 px-8 text-[#011421] placeholder-gray-400 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] transition-all resize-none"
                    ></textarea>
                    <MessageSquare className="absolute right-6 top-6 text-[#FF5A1F]" size={18} />
                  </div>

                  {/* Submit Button */}
                  <button className="w-full bg-[#FF5A1F] text-white rounded-full py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#e04e1a] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#FF5A1F]/30 group">
                    Submit Request
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;