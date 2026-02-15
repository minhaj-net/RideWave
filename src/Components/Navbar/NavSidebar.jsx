import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  MoveRight, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Twitter,
  Search
} from 'lucide-react';
import { Link } from 'react-router';

const NavSidebar = ({ isOpen, onClose }) => {
  const services = [
    { label: "Air Freight", to: "/airFreight" },
    { label: "Warehousing", to: "/warehousing" },
    { label: "Sea Freight", to: "/oceanFreight" },
    { label: "Road Freight", to: "/service" },
    { label: "Customs Brokerage", to: "/service" },
  ];

  const socialIcons = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" }, 
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Search size={18} className="rotate-90" />, href: "#" }, // Placeholder for Pinterest or search
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" },
  ];

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[100]"
          />

          {/* Sidebar Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 h-screen w-full sm:max-w-[450px] bg-white z-[101] shadow-2xl overflow-y-auto px-10 py-16 flex flex-col gap-12"
          >
            {/* Header: Logo and Close Button */}
            <div className="flex items-start justify-between">
              <Link to="/" onClick={onClose} className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex items-center justify-center">
                   {/* Simplified Arrow/Bird Logo matching image */}
                   <svg viewBox="0 0 100 100" className="w-full h-full fill-[#FF5A1F]">
                      <path d="M10 50 L90 20 L70 50 L90 80 Z" />
                   </svg>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-3xl font-extrabold text-[#011421] leading-none tracking-tight">
                    Trans<span className="text-[#FF5A1F]">Hub</span>
                  </h2>
                  <span className="text-[11px] uppercase font-bold text-gray-400 tracking-[0.25em] mt-1">
                    One Track Express
                  </span>
                </div>
              </Link>
              <button 
                onClick={onClose}
                className="mt-2 p-2 hover:bg-gray-100 rounded-full transition-colors group"
              >
                <X size={32} className="text-gray-400 group-hover:text-[#011421] transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Description */}
            <p className="text-[#6B7280] leading-relaxed text-[15px] font-medium">
              We are a reliable transport agency providing safe and timely logistics solutions. Our services cover local and long-distance transportation needs.
            </p>

            {/* Our Services Section */}
            <div className="flex flex-col gap-8">
              <h3 className="text-xl font-bold text-[#011421] relative inline-block w-fit">
                Our Services
                <div className="absolute -bottom-1 left-0 w-8 h-[3px] bg-[#FF5A1F] rounded-full" />
              </h3>
              <div className="flex flex-col gap-5">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    to={service.to} 
                    onClick={onClose}
                    className="text-[17px] font-bold text-[#011421] hover:text-[#FF5A1F] transition-colors w-fit"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  className="text-[#011421] hover:text-[#FF5A1F] transition-all transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <Link 
                to="/service" 
                onClick={onClose}
                className="w-full bg-[#FF5A1F] text-white py-5 px-8 rounded-full flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-orange-100 hover:bg-[#e04d1a] transition-all group"
              >
                Get A Quote
                <MoveRight className="transition-transform group-hover:translate-x-1" size={24} />
              </Link>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default NavSidebar;
