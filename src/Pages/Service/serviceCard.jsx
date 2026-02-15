import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Truck, 
  Plane, 
  Train, 
  Box, 
  ShoppingCart, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router';

const iconMap = {
  Globe: <Globe className="text-white" size={32} />,
  Truck: <Truck className="text-white" size={32} />,
  Plane: <Plane className="text-white" size={32} />,
  Train: <Train className="text-white" size={32} />,
  Box: <Box className="text-white" size={32} />,
  ShoppingCart: <ShoppingCart className="text-white" size={32} />,
};

const ServiceCard = ({ service }) => {
  const icon = iconMap[service.iconName] || <Box className="text-white" size={32} />;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-[30px] p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-300 flex flex-col h-full group"
    >
      {/* Card Header with image and icon */}
      <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-8">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Dark Navy Background for Icon with clipped corner */}
        <div className="absolute top-0 left-0 h-full w-1/2 bg-[#011421] z-10 flex items-center justify-center" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}>
          <div className="relative -ml-6 transition-transform duration-300 group-hover:translate-x-2">
            {icon}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-[#011421] mb-4 group-hover:text-[#FF5A1F] transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
          {service.description}
        </p>

        {/* Action Button */}
        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
          <Link 
            to={`/service/${service.id}`} 
            className="flex items-center gap-3 group/btn"
          >
            <div className="w-10 h-10 bg-[#011421] rounded-lg flex items-center justify-center text-white transition-colors group-hover:bg-[#FF5A1F]">
              <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
            </div>
            <span className="text-sm font-bold text-[#011421] group-hover:text-[#FF5A1F] transition-colors">
              View Details
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCardsSection = () => {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.error("Failed to fetch services data:", err));
  }, []);

  return (
    <section className="py-20 bg-[#f4f7f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id || index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;