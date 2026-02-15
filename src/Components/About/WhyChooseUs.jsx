import React from "react";
import { motion } from "framer-motion";
import { Truck, Phone } from "lucide-react";

const CircularProgress = ({ percentage, label }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex items-center gap-4">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="#f3f4f6"
            strokeWidth="6"
          />
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="#FF5A1F"
            strokeWidth="6"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-[#011421] text-sm">
          {percentage}%
        </div>
      </div>
      <div>
        <p className="font-bold text-[#011421] leading-tight">{label}</p>
      </div>
    </div>
  );
};

const ProgressBar = ({ label, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-[#011421] font-bold">{label}</span>
      <span className="bg-[#FF5A1F] text-white text-[10px] font-bold px-2 py-0.5 rounded relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#FF5A1F]">
        {percentage}%
      </span>
    </div>
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-[#FF5A1F]"
      />
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Overlapping Image Composition & Drone */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center p-8"
            >
              {/* Main Background Image (Slanted) */}
              <div className="relative w-[85%] rounded-[3rem] overflow-hidden shadow-2xl skew-x-[-2deg] transform">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
                  alt="Logistics background"
                  className="w-full h-full object-cover aspect-[4/5] scale-110"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Overlaid Foreground Image (V-Shape Slant) */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-[65%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-white skew-x-[2deg]">
                <img
                  src="https://i.ibb.co.com/sp90fHH0/65132ed4630426897d17d718b4b4901b.jpg"
                  alt="Logistics specialist"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6 text-[#FF5A1F]">
              <Truck size={20} />
              <span className="font-bold tracking-widest text-sm uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-[#011421] mb-8 leading-tight">
              Why we are considered the best in transcriptions
            </h2>

            <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-xl">
              Trunshub features minimal and stylish design. The theme is well
              crafted for all the modern architect and interior design website.
              With Arki, it makes your logistic website look even more
              attractive and impressive to all.
            </p>

            {/* Progress Bars */}
            <div className="mb-12 max-w-lg">
              <ProgressBar label="Wirehousing" percentage={65} />
              <ProgressBar label="Logistics" percentage={87} />
            </div>

            {/* Circular Stats */}
            <div className="flex flex-col sm:flex-row gap-12 mb-12">
              <CircularProgress percentage={95} label="On-Time Delivery Rate" />
              <CircularProgress
                percentage={90}
                label="Shipping Managment Rate"
              />
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <p className="text-[#011421] font-bold text-lg">
                  Do you have any project on your mind?{" "}
                  <a href="tel:123 456789" className="text-[#FF5A1F] ml-2">
                    Call Us: 123 456789
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Bouncing Drone - Bottom Left */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 z-20 pointer-events-none hidden lg:block"
      >
        <div className="relative group">
          {/* Drone Image */}
          <img
            src="https://i.ibb.co.com/93NPSg0M/pricing-sh1.png"
            alt="Drone"
            className="w-48 h-48 drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
