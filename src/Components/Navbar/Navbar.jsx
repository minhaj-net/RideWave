import React from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  ChevronDown,
  MoveRight,
  X,
} from "lucide-react";
import { Link, NavLink as RouterNavLink } from "react-router";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavSidebar from "./NavSidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      // Small delay to ensure the element is rendered and transition has started
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  }, [isSearchOpen]);
  
  const navLinks = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Services",
      to: "/service",
      hasDropdown: true,
      dropdownItems: [
        { label: "Ocean Freight", to: "/oceanFreight" },
        { label: "Air Freight", to: "/airFreight" },
        { label: "Rail Freight", to: "/railFreight" },
        { label: "Warehousing", to: "/warehousing" },
        { label: "Ecommerce Logistics", to: "/logistics" },
      ],
    },
    {
      label: "Pages",
      to: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "About Us", to: "/aboutUs" },
        { label: "Request Qoute", to: "/requestQuote" },
        { label: "Tracking", to: "tracking" },
        { label: "Team", to: "team" },
        { label: "Shop", to: "#" },
        { label: "Pricing", to: "pricing" },
        { label: "FAQ", to: "faq" },
      ],
    },
    {
      label: "Projects",
      to: "project",
    },
    {
      label: "Blog",
      to: "blog",
    },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="bg-white rounded-full flex items-center justify-between px-2 py-2 shadow-lg">
        {/* Logo Section with slanted edge */}
        <div className="relative flex items-center h-16 pl-8 pr-12 bg-white rounded-l-full overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-8 bg-[#010d14] skew-x-[-20deg] translate-x-4"></div>
          <Link to="/" className="flex items-center gap-2 relative z-10">
            <div className="w-10 h-10 bg-[#FF5A1F] rounded-tr-xl rounded-bl-xl rotate-45 flex items-center justify-center -rotate-0 shadow-md">
              <MoveRight className="text-white -rotate-45" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-[#011421] leading-none tracking-tight">
                Ride<span className="text-[#FF5A1F]">Wave</span>
              </h1>
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-[0.2em]">
                One Track Express
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 px-4">
          {navLinks.map((link, index) => (
            <NavLinkItem key={index} {...link} />
          ))}
          <Link
            to="/contact"
            className="text-sm font-bold text-[#011421] hover:text-[#FF5A1F] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-3 pr-2">
          <div className="relative p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
            <ShoppingCart size={20} className="text-[#011421]" />
            <span className="absolute -top-1 -right-1 bg-[#FF5A1F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
          <div 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <Search size={20} className="text-[#011421]" />
          </div>
          <div 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <Menu size={20} className="text-[#011421]" />
          </div>

          <button className="bg-[#FF5A1F] text-white pr-6 py-1.5 rounded-full flex items-center gap-3 font-bold text-sm shadow-lg shadow-orange-200 hover:bg-[#e04d1a] transition-all group h-[52px]">
            <div className="bg-[#011421] h-full px-4 flex items-center rounded-full ml-1.5">
              Free
            </div>
            <span className="flex items-center gap-1.5">
              Quote
              <MoveRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </button>
        </div>


        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-0 bg-white rounded-full z-50 flex items-center justify-between px-8 shadow-xl"
            >
              <div className="flex-1 flex items-center gap-4">
                <Search size={24} className="text-[#011421]" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Type keyword and hit enter"
                  className="w-full bg-transparent outline-none text-lg font-medium text-[#011421] placeholder-gray-400"
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 bg-[#FF5A1F] rounded-full text-white hover:bg-[#e04e1a] transition-colors transform hover:rotate-90 duration-300"
              >
                <X size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Sidebar */}
      <NavSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </nav>
  );
};

const NavLinkItem = ({ label, to, hasDropdown, dropdownItems }) => (
  <div className="relative flex items-center gap-1 cursor-pointer group h-16">
    <RouterNavLink
      to={to}
      end={to === "/" || to === "#"}
      className={({ isActive }) => {
        const isCurrentlyActive = isActive && to !== "#";
        return `text-sm font-bold transition-colors flex items-center gap-1 ${
          isCurrentlyActive ? "text-[#FF5A1F]" : "text-[#011421] group-hover:text-[#FF5A1F]"
        }`;
      }}
    >
      {label}
      {hasDropdown && (
        <ChevronDown
          size={14}
          className="text-gray-400 group-hover:text-[#FF5A1F] transition-colors"
        />
      )}
    </RouterNavLink>

    {hasDropdown && (
      <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-gray-100 z-[100]">
        <div className="flex flex-col">
          {dropdownItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="px-6 py-2 text-sm font-bold text-[#011421] hover:text-[#FF5A1F] hover:bg-gray-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default Navbar;
