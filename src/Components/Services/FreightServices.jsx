import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Ship,
  Globe,
  Package,
  MoveRight,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const FreightServices = () => {
  const services = [
    {
      title: "Ocean Freight",
      icon: <Ship size={32} className="text-[#FF5A1F]" />,
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop",
      description:
        "For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering",
      to: "oceanFreight",
    },
    {
      title: "Air Freight",
      icon: <Globe size={32} className="text-[#FF5A1F]" />,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      description:
        "For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering",
      to: "airFreight",
    },
    {
      title: "Rail Freight",
      icon: <Package size={32} className="text-[#FF5A1F]" />,
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2070&auto=format&fit=crop",
      description:
        "For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering",
      to: "railFreight",
    },
    {
      title: "Warehousing ",
      icon: <Truck size={32} className="text-[#FF5A1F]" />,
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
      description:
        "For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering",
      to: "warehousing",
    },
    {
      title: "Logistics ",
      icon: <Globe size={32} className="text-[#FF5A1F]" />,
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop",
      description:
        "For over two decades, been the backbone of seamless global logistics delivering goods across continents with unwavering",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4 text-[#FF5A1F]">
              <Truck size={18} />
              <span className="font-bold tracking-widest text-sm uppercase">
                What to Expect
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#011421]">
              Reliable Freight Services
            </h2>
          </motion.div>

          <div className="flex gap-4">
            <button className="services-prev cursor-pointer font-bold w-14 h-14 bg-[#FF5A1F] text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-[#011421] transition-all duration-700 hover:scale-105 active:scale-95">
              <ArrowRight size={24} className="rotate-180" />
            </button>
            <button className="services-next cursor-pointer font-bold w-14 h-14 bg-[#FF5A1F] text-white rounded-xl flex items-center justify-center shadow-lg hover:bg-[#011421] transition-all duration-700 hover:scale-105 active:scale-95">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative group">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".services-next",
              prevEl: ".services-prev",
            }}
            pagination={{
              el: ".services-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="pb-20"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full border border-transparent hover:border-orange-100"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-[#FF5A1F] transition-colors duration-500">
                      {React.cloneElement(service.icon, {
                        className:
                          "text-[#FF5A1F] group-hover:text-white transition-colors duration-500",
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-[#011421] leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Image with Unique Infinity/Cloud Mask */}
                  <div className="relative mb-8 h-48 w-full overflow-hidden mask-infinity group-hover:scale-105 transition-transform duration-700 ease-in-out">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="w-full h-[1px] bg-gray-100 mb-8"></div>

                  <Link to={service.to} className="flex items-center gap-3 text-[#011421] font-bold text-sm hover:text-[#FF5A1F] transition-colors group/btn">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover/btn:bg-[#FF5A1F] group-hover/btn:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                    View Details
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination and Bottom Text */}
          <div className="flex flex-col lg:flex-row items-center justify-between mt-12 gap-8">
            <p className="text-gray-400 text-sm italic font-medium">
              Our list of services does not end here. We'll adapt to your
              particular needs.
            </p>
            <div className="services-pagination flex gap-2"></div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
                .mask-infinity {
                    mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><circle cx="100" cy="100" r="100"/><circle cx="300" cy="100" r="100"/><rect x="100" y="0" width="200" height="200"/></svg>');
                    mask-size: cover;
                    mask-repeat: no-repeat;
                    -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><circle cx="100" cy="100" r="100"/><circle cx="300" cy="100" r="100"/><rect x="100" y="0" width="200" height="200"/></svg>');
                    -webkit-mask-size: cover;
                }
                .services-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #e2e8f0;
                    opacity: 1;
                    transition: all 0.3s;
                }
                .services-pagination .swiper-pagination-bullet-active {
                    background: #FF5A1F;
                    width: 32px;
                    border-radius: 6px;
                }
            `,
        }}
      />
    </section>
  );
};

export default FreightServices;
