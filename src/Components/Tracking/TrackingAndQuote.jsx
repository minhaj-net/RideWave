import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, ArrowRight, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router";

const TrackingAndQuote = () => {
  const [activeTab, setActiveTab] = useState("quote");
  const handleTrackNow=()=>{
    toast.success("tracking Successfully!");
  }

  // Quote Form
  const {
    register: registerQuote,
    handleSubmit: handleSubmitQuote,
    watch,
    reset: resetQuote,
    formState: { errors: errorsQuote },
  } = useForm({
    defaultValues: {
      service: "Air Freight",
      typeOfGoods: "Heavy Goods",
    },
  });

  const selectedService = watch("service");

  const onSubmitQuote = (data) => {
    console.log("Quote Form Data:", data);
    toast.success("Quote Request Submitted Successfully!");
    resetQuote();
  };

  // Tracking Form
  const {
    register: registerTracking,
    handleSubmit: handleSubmitTracking,
    reset: resetTracking,
    formState: { errors: errorsTracking },
  } = useForm();

  const onSubmitTracking = (data) => {
    console.log("Tracking Form Data:", data);
    toast.success("Tracking Request Submitted Successfully!");
    resetTracking();
  };

  return (
    <section className="relative bg-white pb-24">
      {/* Top Tracking Area (Dark Layer) */}
      <div className="bg-[#011421] relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-6 text-[#FF5A1F]"
          >
            <Truck size={20} />
            <span className="font-bold tracking-widest text-sm uppercase">
              Tracking
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-black text-white mb-8"
          >
            Track the Status of Your Shipment Instantly
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            Enter your tracking number to get real-time updates on your
            shipment's location and delivery status.
          </motion.p>

          {/* Tracking Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-5 mx-auto relative flex items-center bg-white rounded-full p-2 lg:p-3 shadow-2xl overflow-hidden"
          >
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="flex-1 bg-transparent px-6 py-2 lg:py-3 outline-none text-[#011421] font-medium placeholder:text-gray-400"
            />
            <button onClick={handleTrackNow} className="bg-[#FF5A1F] hover:bg-[#e04e1a] text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full font-black text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-300 transform active:scale-95 group">
              Track Now{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Form Area (White Card Layer) */}
      <div className="max-w-6xl mx-auto px-6 relative z-20 -mt-20 lg:-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] p-8 lg:p-16"
        >
          {/* Tabs / Buttons */}
          <div className="flex gap-4 mb-16 border-b border-gray-100 pb-8">
            <button
              onClick={() => setActiveTab("quote")}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "quote"
                  ? "bg-[#FF5A1F] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Request Quote
            </button>
            <button
              onClick={() => setActiveTab("tracking")}
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === "tracking"
                  ? "bg-[#011421] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              Tracking Shipment
            </button>
          </div>

          {activeTab === "quote" ? (
            <form onSubmit={handleSubmitQuote(onSubmitQuote)} className="space-y-12">
              {/* Service Type Selection */}
              <div>
                <h3 className="text-2xl font-black text-[#011421] mb-8">
                  Select Your Services Type*
                </h3>
                <div className="flex flex-wrap gap-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center p-1 transition-colors ${selectedService === "Air Freight" ? "border-[#FF5A1F]" : "border-gray-200 group-hover:border-[#FF5A1F]"}`}
                    >
                      <div
                        className={`w-full h-full bg-[#FF5A1F] rounded-full transition-transform duration-300 ${selectedService === "Air Freight" ? "scale-100" : "scale-0"}`}
                      ></div>
                    </div>
                    <span
                      className={`font-bold transition-colors ${selectedService === "Air Freight" ? "text-[#011421]" : "text-gray-400 group-hover:text-[#011421]"}`}
                    >
                      Air Freight
                    </span>
                    <input
                      type="radio"
                      value="Air Freight"
                      {...registerQuote("service")}
                      className="hidden"
                    />
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center p-1 transition-colors ${selectedService === "Ocean Freight" ? "border-[#FF5A1F]" : "border-gray-200 group-hover:border-[#FF5A1F]"}`}
                    >
                      <div
                        className={`w-full h-full bg-[#FF5A1F] rounded-full transition-transform duration-300 ${selectedService === "Ocean Freight" ? "scale-100" : "scale-0"}`}
                      ></div>
                    </div>
                    <span
                      className={`font-bold transition-colors ${selectedService === "Ocean Freight" ? "text-[#011421]" : "text-gray-400 group-hover:text-[#011421]"}`}
                    >
                      Ocean Freight
                    </span>
                    <input
                      type="radio"
                      value="Ocean Freight"
                      {...registerQuote("service")}
                      className="hidden"
                    />
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center p-1 transition-colors ${selectedService === "Land Freight" ? "border-[#FF5A1F]" : "border-gray-200 group-hover:border-[#FF5A1F]"}`}
                    >
                      <div
                        className={`w-full h-full bg-[#FF5A1F] rounded-full transition-transform duration-300 ${selectedService === "Land Freight" ? "scale-100" : "scale-0"}`}
                      ></div>
                    </div>
                    <span
                      className={`font-bold transition-colors ${selectedService === "Land Freight" ? "text-[#011421]" : "text-gray-400 group-hover:text-[#011421]"}`}
                    >
                      Land Freight
                    </span>
                    <input
                      type="radio"
                      value="Land Freight"
                      {...registerQuote("service")}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="font-black text-[#011421] text-sm uppercase tracking-wider">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...registerQuote("fullName", { required: "Name is required" })}
                    className={`w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border-2 transition-all duration-300 font-medium text-gray-700 ${errorsQuote.fullName ? "border-red-500" : "border-transparent focus:border-[#FF5A1F] focus:bg-white"}`}
                  />
                  {errorsQuote.fullName && (
                    <p className="text-red-500 text-xs font-bold">
                      {errorsQuote.fullName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <label className="font-black text-[#011421] text-sm uppercase tracking-wider">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="info@Ridewave.com"
                    {...registerQuote("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border-2 transition-all duration-300 font-medium text-gray-700 ${errorsQuote.email ? "border-red-500" : "border-transparent focus:border-[#FF5A1F] focus:bg-white"}`}
                  />
                  {errorsQuote.email && (
                    <p className="text-red-500 text-xs font-bold">
                      {errorsQuote.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <label className="font-black text-[#011421] text-sm uppercase tracking-wider">
                    Phone No*
                  </label>
                  <input
                    type="tel"
                    placeholder="+986- 4459 **** ****"
                    {...registerQuote("phone", { required: "Phone is required" })}
                    className={`w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border-2 transition-all duration-300 font-medium text-gray-700 ${errorsQuote.phone ? "border-red-500" : "border-transparent focus:border-[#FF5A1F] focus:bg-white"}`}
                  />
                  {errorsQuote.phone && (
                    <p className="text-red-500 text-xs font-bold">
                      {errorsQuote.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <label className="font-black text-[#011421] text-sm uppercase tracking-wider">
                    Type Of Goods
                  </label>
                  <div className="relative">
                    <select
                      {...registerQuote("typeOfGoods")}
                      className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border-2 border-transparent focus:border-[#FF5A1F] focus:bg-white transition-all duration-300 font-medium text-gray-700 appearance-none"
                    >
                      <option value="Heavy Goods">Heavy Goods</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Electronics">Electronics</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <Search size={20} />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="font-black text-[#011421] text-sm uppercase tracking-wider">
                    Dimensions
                  </label>
                  <input
                    type="text"
                    placeholder="Length x Width x Height x Unit"
                    {...registerQuote("dimensions")}
                    className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border-2 border-transparent focus:border-[#FF5A1F] focus:bg-white transition-all duration-300 font-medium text-gray-700"
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-black text-[#011421] text-sm uppercase tracking-wider">
                    Date of Shipment
                  </label>
                  <input
                    type="text"
                    placeholder="Date"
                    {...registerQuote("date")}
                    className="w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border-2 border-transparent focus:border-[#FF5A1F] focus:bg-white transition-all duration-300 font-medium text-gray-700"
                  />
                </div>
              </div>

              {/* Form Footer */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-8 border-t border-gray-100">
                <button
                  type="submit"
                  className="bg-[#FF5A1F] hover:bg-[#e04e1a] text-white px-10 py-5 rounded-2xl font-black text-base uppercase tracking-wider transition-all duration-300 shadow-xl shadow-orange-100 flex items-center gap-3 w-fit group"
                >
                  Request A Quote{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <div className="text-gray-500 font-medium leading-relaxed">
                  Note: Face any trouble? We wil contact with You as <br />
                  soon as possible ||{" "}
                  <Link to={"team"} className="text-[#FF5A1F] hover:underline cursor-pointer">
                    Contact Our Expert
                  </Link>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmitTracking(onSubmitTracking)} className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-black text-[#011421]">
                  Track Your Shipment
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="font-black text-[#011421] text-sm uppercase tracking-wider">
                      Tracking Number*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Tracking Number"
                      {...registerTracking("trackingNumber", { 
                        required: "Tracking Number is required" 
                      })}
                      className={`w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border-2 transition-all duration-300 font-medium text-gray-700 ${errorsTracking.trackingNumber ? "border-red-500" : "border-transparent focus:border-[#FF5A1F] focus:bg-white"}`}
                    />
                    {errorsTracking.trackingNumber && (
                      <p className="text-red-500 text-xs font-bold">
                        {errorsTracking.trackingNumber.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <label className="font-black text-[#011421] text-sm uppercase tracking-wider">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      {...registerTracking("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full bg-gray-50 rounded-2xl px-6 py-5 outline-none border-2 transition-all duration-300 font-medium text-gray-700 ${errorsTracking.email ? "border-red-500" : "border-transparent focus:border-[#FF5A1F] focus:bg-white"}`}
                    />
                    {errorsTracking.email && (
                      <p className="text-red-500 text-xs font-bold">
                        {errorsTracking.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Footer */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-8 border-t border-gray-100">
                <button
                  type="submit"
                  className="bg-[#011421] hover:bg-[#022a42] text-white px-10 py-5 rounded-2xl font-black text-base uppercase tracking-wider transition-all duration-300 shadow-xl shadow-blue-900/20 flex items-center gap-3 w-fit group"
                >
                  Track Shipment{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <div className="text-gray-500 font-medium leading-relaxed">
                  Note: Face any trouble? We wil contact with You as <br />
                  soon as possible ||{" "}
                  <span className="text-[#FF5A1F] hover:underline cursor-pointer">
                    Contact Our Expert
                  </span>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      {/* Background Texture Decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-50 rounded-full -mr-32 -mb-32 z-0 opacity-50"></div>
    </section>
  );
};

export default TrackingAndQuote;
