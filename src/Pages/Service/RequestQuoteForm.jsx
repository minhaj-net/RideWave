import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown, MoveRight, Truck } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const RequestQuoteForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Request Quote Data:", data);
    toast.success("Quote Request Submitted Successfully!");
    reset();
  };

  const stats = [
    { label: 'Shipping', percentage: 90 },
    { label: 'Successful Delivery', percentage: 95 },
    { label: 'Managment', percentage: 91 },
  ];

  return (
    <section className="relative py-24 w-full overflow-hidden min-h-[800px] flex items-center">
      {/* Background with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-[#011421]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Stats and Content */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 text-[#FF5A1F] font-bold text-sm uppercase tracking-wider">
              <Truck size={18} />
              <span>Why We Special</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              We Want to Make a <br />
              <span className="text-white">Good Impact on Your Business</span>
            </h2>
            
            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
              At Ridewave, we are committed to revolutionizing the transportation industry through innovative solutions and unparalleled service.
            </p>

            {/* Progress Bars */}
            <div className="flex flex-col gap-6 mt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-white font-bold text-sm">
                    <span>{stat.label}</span>
                  </div>
                  <div className="relative h-2 w-full bg-white rounded-full overflow-visible">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.percentage}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="absolute top-0 left-0 h-full bg-[#FF5A1F] rounded-full"
                    />
                    {/* Percentage Badge */}
                    <motion.span 
                       initial={{ opacity: 0, scale: 0.5 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: 1, duration: 0.5 }}
                       viewport={{ once: true }}
                       className="absolute -top-6 bg-[#FF5A1F] text-white text-[10px] font-bold px-2 py-0.5 rounded-md"
                       style={{ left: `${stat.percentage - 2}%` }}
                    >
                      {stat.percentage}%
                    </motion.span>
                  </div>
                </div>
              ))}
            </div>

            {/* Call Info Box */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#FF5A1F] shadow-lg shadow-orange-500/20">
                <Phone size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Call Us Any Time:</span>
                <span className="text-white text-xl font-extrabold">+148 359 505 285</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-white mb-8">
              Request Quote Form
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-bold">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  {...register("fullName", { required: "Name is required" })}
                  className={`bg-transparent border rounded-full px-6 py-3 text-white text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors placeholder:text-gray-600 ${errors.fullName ? "border-red-500" : "border-white/20"}`}
                />
                {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName.message}</span>}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-bold">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`bg-transparent border rounded-full px-6 py-3 text-white text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors placeholder:text-gray-600 ${errors.email ? "border-red-500" : "border-white/20"}`}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-bold">Phone</label>
                <input 
                  type="tel" 
                  placeholder="+554 6487 244" 
                  {...register("phone", { required: "Phone is required" })}
                  className={`bg-transparent border rounded-full px-6 py-3 text-white text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors placeholder:text-gray-600 ${errors.phone ? "border-red-500" : "border-white/20"}`}
                />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
              </div>

              {/* Delivery City */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-bold">Delivery City</label>
                <div className="relative">
                  <select 
                    {...register("deliveryCity", { required: "City is required" })}
                    className={`appearance-none bg-transparent border rounded-full px-6 py-3 text-white text-sm w-full focus:outline-none focus:border-[#FF5A1F] transition-colors cursor-pointer pr-10 ${errors.deliveryCity ? "border-red-500" : "border-white/20"}`}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#011421]">Select City</option>
                    <option value="denver" className="bg-[#011421]">Denver</option>
                    <option value="new-york" className="bg-[#011421]">New York</option>
                    <option value="london" className="bg-[#011421]">London</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                {errors.deliveryCity && <span className="text-red-500 text-xs">{errors.deliveryCity.message}</span>}
              </div>

              {/* Freight */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-bold">Freight</label>
                <div className="relative">
                  <select 
                    {...register("freight", { required: "Freight type is required" })}
                    className={`appearance-none bg-transparent border rounded-full px-6 py-3 text-white text-sm w-full focus:outline-none focus:border-[#FF5A1F] transition-colors cursor-pointer pr-10 ${errors.freight ? "border-red-500" : "border-white/20"}`}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#011421]">Select Freight</option>
                    <option value="air" className="bg-[#011421]">Air Freight</option>
                    <option value="ocean" className="bg-[#011421]">Ocean Freight</option>
                    <option value="road" className="bg-[#011421]">Road Freight</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                {errors.freight && <span className="text-red-500 text-xs">{errors.freight.message}</span>}
              </div>

              {/* Weight */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-bold">Weight</label>
                <div className="relative">
                  <select 
                    {...register("weight", { required: "Weight is required" })}
                    className={`appearance-none bg-transparent border rounded-full px-6 py-3 text-white text-sm w-full focus:outline-none focus:border-[#FF5A1F] transition-colors cursor-pointer pr-10 ${errors.weight ? "border-red-500" : "border-white/20"}`}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#011421]">Select Weight</option>
                    <option value="10-50" className="bg-[#011421]">10kg - 50kg</option>
                    <option value="50-100" className="bg-[#011421]">50kg - 100kg</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                {errors.weight && <span className="text-red-500 text-xs">{errors.weight.message}</span>}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="bg-[#FF5A1F] text-white px-10 py-4 rounded-full flex items-center gap-2 font-extrabold text-sm shadow-lg shadow-orange-500/30 hover:bg-[#e04d1a] transition-all group">
                  Submit Request
                  <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequestQuoteForm;