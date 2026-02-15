import React from 'react';
import { Link } from 'react-router';

const OceanFreightHeader = () => {
  return (
    <div className="relative h-[450px] w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-[#011421]/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex items-start gap-6">
          {/* Decorative Orange Bar */}
          <div className="w-1.5 h-24 bg-[#FF5A1F] mt-2" />
          
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
            Ocean Freight
            </h1>
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              <Link to="/" className="text-[#FF5A1F] hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white">→</span>
              <span className="text-white">Services</span>
              <span className="text-white">→</span>
              <span className="text-white">Ocean Freight</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional bottom border or shadow if needed */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF5A1F]/20" />
    </div>
  );
};

export default OceanFreightHeader;