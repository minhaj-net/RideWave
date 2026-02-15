import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { MoveRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const Hero = () => {
  const images = [
    "https://i.ibb.co.com/1YjJxYHY/slide-m1.jpg",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    "https://i.ibb.co.com/JF89SB5h/slide-m2.jpg",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#011421]">
      {/* Left Side Content */}
      <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-32 z-20">
        {/* Background Wireframe Decor (Simplified) */}
        <div className="absolute bottom-2 text-white left-10 opacity-10 pointer-events-none hidden lg:block">
        <img src="https://i.ibb.co.com/wFLVzBMC/tranck-v.png" alt="" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <span className="text-[#FF5A1F] font-bold tracking-widest text-sm uppercase mb-6 block">
            Logistic Transportation
          </span>
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
            The Bridge to Your <br />
            <span className="text-white">Logistics Success</span>
          </h1>

          <div className="flex items-start gap-4 mb-10 max-w-lg">
            <div className="w-16 h-[1px] bg-gray-600 mt-3"></div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Optimizing processes and leveraging technology, businesses can
              gain a competitive.
            </p>
          </div>

          <button className="bg-[#FF5A1F] text-white px-10 py-5 rounded-full flex items-center gap-3 font-bold text-lg shadow-xl shadow-orange-900/20 hover:bg-[#e04d1a] transition-all group overflow-hidden relative">
            <span className="relative z-10 flex items-center gap-3">
              Let's Get Started
              <MoveRight
                size={22}
                className="transition-transform group-hover:translate-x-2"
              />
            </span>
          </button>
        </motion.div>

        {/* Rotating Badge */}
        <div className="absolute top-1/2 -right-16 -translate-y-1/2 z-30 hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative w-32 h-32 flex items-center justify-center"
          >
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="textCircle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[10px] fill-white font-bold uppercase tracking-[0.1em]">
                <textPath xlinkHref="#textCircle">
                  * Best Logistic Services * Best Logistic Services
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 m-auto w-16 h-16 bg-[#FF5A1F] rounded-full flex items-center justify-center shadow-lg border-4 border-[#011421]">
              <Star className="text-white fill-white" size={24} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side Slider */}
      <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-screen">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          loop={true}
          className="h-full w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats Card */}
        <div className="absolute bottom-12 right-12 z-40 bg-white p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 max-w-xs animate-bounce-slow">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200"
              >
                <img
                  src={`https://i.pravatar.cc/150?u=${i}`}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[#FF5A1F] font-extrabold text-xl">
                2.8 M
              </span>
            </div>
            <p className="text-[#011421] font-bold text-sm">Orders Complete</p>
          </div>
        </div>
      </div>

      {/* Custom Navigation Arrows positioned between sections */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button className="hero-prev cursor-pointer font-bold w-14 h-14 bg-[#FF5A1F] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out transform hover:bg-[#011421] hover:scale-110">
          <MoveRight size={24} className="rotate-180" />
        </button>

        <button className="hero-next cursor-pointer font-bold w-14 h-14 bg-[#FF5A1F] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ease-in-out transform hover:bg-[#011421] hover:scale-110">
          <MoveRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
