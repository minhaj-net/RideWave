import React from 'react';
import { Link, useLocation } from 'react-router';
import { 
  ChevronRight, 
  MapPin, 
  PhoneCall, 
  Mail, 
  FileText, 
  Download,
  CheckCircle2
} from 'lucide-react';

const RailFreightContent = () => {
  const location = useLocation();

  const services = [
    { label: "Ocean Freight", to: "/oceanFreight" },
    { label: "Air Freight", to: "/airFreight" },
    { label: "Rail Freight", to: "/railFreight" },
    { label: "Warehousing", to: "/service" },
    { label: "Ecommerce Logistics", to: "/ecommerce-Logistics" },
  ];

  const features = [
    "Ocean freight offers predictable schedules.",
    "Sky freight offers predictable transit times.",
    "It remains one of the most economical ways.",
    "Differnt corner one of the economical ways.",
    "Despite its scale, modern shipping companies are increasingly.",
    "We are doing scale, modern shipping."
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  gap-12">
      
          {/* Main Content - Right (8/12) */}
          <div className=" flex flex-col gap-8 order-1 lg:order-2">
            
            {/* Hero Image */}
            <div className="w-full h-[450px] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co.com/HLmbqL4M/rail.jpg" 
                alt="Rail Freight" 
                className="w-full h-full object-cover"
              />
            </div>
          {/* Title and Intro */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#011421]">
                Railway Transport Services
              </h2>
              <div className="space-y-6">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our Rail Freight Services offer comprehensive solutions for all your shipping needs, ensuring your cargo is transported efficiently and safely across the continents, giving you peace of mind and the best results for your business.With our Rail Freight Services, we handle all aspects of your land shipping needs, documentation to delivery.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  With our Rail Freight Services, we handle all aspects of your land shipping needs, from documentation to delivery, ensuring your goods arrive on time and in excellent condition, allowing you to focus on your core business operations helping you navigate the complexities of international trade and land logistics.
                </p>
              </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-6 py-6 border-y border-gray-100">
              <h3 className="text-2xl font-extrabold text-[#011421]">
                Why Choose Our Services
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our Rail Freight Services offer comprehensive solutions for all your shipping needs, ensuring your cargo is transported efficiently and safely across the land, giving you peace of mind and the best results for your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="mt-1">
                      <CheckCircle2 size={16} className="text-[#FF5A1F]" />
                    </div>
                    <span className="text-sm text-gray-500 font-medium leading-relaxed group-hover:text-[#011421] transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64 rounded-[30px] overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
                  alt="Logistics Worker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-[30px] overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Cargo Boxes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Content */}
            <p className="text-gray-500 text-sm leading-relaxed">
              Our Rail Freight Services offer comprehensive solutions for all your shipping needs, ensuring your cargo is transported efficiently and safely across the rail network, giving you peace of mind and the best results for your business.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RailFreightContent;