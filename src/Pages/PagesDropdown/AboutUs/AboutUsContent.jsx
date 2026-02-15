import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MapPin,
  Clock,
  Target,
  Eye,
  History,
  CheckCircle2,
  Phone,
  ArrowRight,
  TrendingUp,
  Globe,
  Truck,
  Ship,
  Plane,
  Link as LinkIcon,
} from "lucide-react";
import WorkingProcess from "../../../Components/Process/WorkingProcess";

const AboutUsContent = () => {
  const [activeTab, setActiveTab] = useState("mission");

  // --- Sections Data ---
  const stats = [
    {
      label: "Years Of Experience",
      value: "25",
      desc: "With over four decades of experience providing",
      icon: <Clock size={24} className="text-[#FF5A1F]" />,
      bg: "bg-gray-50",
      text: "text-[#011421]",
    },
    {
      label: "Global Locations",
      value: "88",
      desc: "With over four decades of experience providing",
      icon: <MapPin size={24} className="text-white" />,
      bg: "bg-[#FF5A1F]",
      text: "text-white",
    },
    {
      label: "Total Employee",
      value: "15",
      desc: "With over four decades of experience providing",
      icon: <Users size={24} className="text-[#FF5A1F]" />,
      bg: "bg-[#011421]",
      text: "text-white",
    },
    {
      label: "Annual Revenue",
      value: "7.5 K",
      desc: "With over four decades of experience providing",
      icon: <TrendingUp size={24} className="text-[#FF5A1F]" />,
      bg: "bg-gray-50",
      text: "text-[#011421]",
    },
  ];

  const processSteps = [
    {
      id: "01",
      title: "Select Services",
      desc: "Lorain Air freight service deliver knowledge opportunity",
      img: "https://i.ibb.co.com/399c0jpF/47fcf0b46b9061a2227566f403bb5ecc.jpghttps://i.ibb.co.com/prKz9StR/st1.png",
    },
    {
      id: "02",
      title: "Parcel Information",
      desc: "Lorain Air freight service deliver knowledge opportunity",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "03",
      title: "Transportation",
      desc: "Lorain Air freight service deliver knowledge opportunity",
      img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const teamMembers = [
    {
      name: "Jenny Noah",
      role: "Head of operations",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Jenny Mache",
      role: "Head of operations",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Sofia Melisa",
      role: "Project Manager",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    {
      name: "Shane Darren",
      role: "Head of operations",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* --- Section 1: Digital & Trusted (Stats) --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div
              className="rounded-[4rem] overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                alt="Logistics"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="mt-12 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#011421] leading-tight">
                Digital & Trusted Transport Logistic Company
              </h2>
              <button className="bg-[#FF5A1F] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-[#e04e1a] transition-all group">
                Request A Quote!
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`${stat.bg} ${stat.text} p-10 rounded-[3rem] relative overflow-hidden group hover:-translate-y-2 transition-transform shadow-lg shadow-black/5 flex flex-col justify-between h-72`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-sm font-extrabold uppercase tracking-widest opacity-80">
                    {stat.label}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10">
                    {stat.icon}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-6xl font-black">{stat.value}</h3>
                  <p className="text-xs font-bold leading-relaxed opacity-60 uppercase tracking-tighter">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 2: Working Process --- */}
      <WorkingProcess></WorkingProcess>

      {/* --- Section 3: Mission & About --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative h-[600px] w-full">
            {/* Complex Image Cluster */}
            <div className="absolute top-0 right-0 w-[70%] h-[75%] rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=2066&auto=format&fit=crop"
                alt="Worker"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-[#FF5A1F] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-xl">
                25+ Years Experience
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-[3.5rem] border-[12px] border-white shadow-2xl overflow-hidden z-20">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                alt="Warehouse"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative circle */}
            <div className="absolute bottom-20 right-0 w-32 h-32 bg-[#FF5A1F]/10 rounded-full blur-2xl -z-10" />
          </div>

          <div className="lg:w-1/2 space-y-10">
            <div>
              <div className="flex items-center gap-2 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-sm mb-4">
                <Truck size={18} />
                <span>About Our Company</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#011421] leading-tight mb-6">
                Our services increase the productivity of your work.
              </h2>
              <p className="text-gray-500 font-bold text-sm leading-relaxed mb-10">
                Our global logistics expertise, advanced supply chain technology
                & customized logistics solutions will help you analyze, develop,
                and implement successful.
              </p>
            </div>

            {/* Tabs */}
            <div className="space-y-6">
              <div className="flex gap-4 border-b border-gray-100">
                {["mission", "vision", "history"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-6 text-sm font-black uppercase tracking-widest transition-all relative ${
                      activeTab === tab
                        ? "text-[#FF5A1F]"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    Our {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF5A1F]"
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="bg-gray-50/50 p-10 rounded-[2.5rem] flex gap-8 items-center border border-gray-100/50">
                <div className="shrink-0 w-32 h-24 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#011421] font-extrabold text-sm mb-2 uppercase">
                    Logistic & transport Group is a forward-thinking
                  </h4>
                  <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase">
                    estate consultancy and investment advisory firm with over 25
                    years of industry experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-8">
              <button className="bg-[#FF5A1F] text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-[#e04e1a] transition-all group shadow-xl shadow-[#FF5A1F]/20">
                About Us{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#011421] rounded-full flex items-center justify-center text-white shadow-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Call Us Any Time:
                  </span>
                  <a
                    href="tel:148 359 505 285
s"
                    className="block text-lg font-black text-[#FF5A1F]"
                  >
                    148 359 505 285
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Proven Success --- */}
      <section className="bg-[#011421] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Ship Image Decoration */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-sm mb-6">
              <span className="w-12 h-0.5 bg-[#FF5A1F]" />
              <span>Proven Success</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-16">
              We have helped clients optimize all logistics operations.
            </h2>

            <div className="space-y-6">
              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:bg-[#FF5A1F] transition-all cursor-pointer relative overflow-hidden">
                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h4 className="text-xl font-bold text-[#FF5A1F] group-hover:text-white mb-2 transition-colors">
                      Air Freight Solution
                    </h4>
                    <p className="text-sm font-bold text-gray-400 group-hover:text-white/80 transition-colors">
                      Our cargo service ensures reduced costs through efficient
                      logistics and streamlined operations.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#FF5A1F] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#FF5A1F] transition-all">
                    <ArrowRight size={24} className="-rotate-45" />
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:bg-[#FF5A1F] transition-all cursor-pointer flex justify-between items-center">
                <h4 className="text-xl font-bold text-gray-500 group-hover:text-white transition-colors">
                  Warehouse Inventory
                </h4>
                <div className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#FF5A1F] transition-all">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 group hover:bg-[#FF5A1F] transition-all cursor-pointer flex justify-between items-center">
                <h4 className="text-xl font-bold text-gray-500 group-hover:text-white transition-colors">
                  Special Logistics
                </h4>
                <div className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#FF5A1F] transition-all">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1577705993349-bc747e9716d6?q=80&w=2070&auto=format&fit=crop"
                alt="Port"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlaid Card */}
            <div className="absolute -bottom-10 -left-10 md:left-20 bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-[320px] z-20">
              <div className="text-[#FF5A1F] mb-6">
                <History size={48} />
              </div>
              <h4 className="text-xl font-black text-[#011421] mb-2 leading-tight">
                Parcel Information
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase leading-relaxed mb-6">
                Lorain Air freight service deliver knowledge opportunity
              </p>
              <button className="flex items-center gap-2 text-xs font-black uppercase text-[#011421] hover:text-[#FF5A1F] transition-colors">
                More Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: Team Members --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-sm mb-6">
              <span className="w-12 h-0.5 bg-[#FF5A1F]" />
              <span>Our Expert Team Members</span>
              <span className="w-12 h-0.5 bg-[#FF5A1F]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#011421]">
              Meet our Special Support Team Members!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div
                  className="relative rounded-[3rem] overflow-hidden mb-6"
                  style={{
                    clipPath:
                      "polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%)",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Social Overlay */}
                  <div className="absolute bottom-6 right-6">
                    <button className="w-10 h-10 bg-[#FF5A1F] text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-500/30 transform hover:scale-110 transition-transform">
                      <LinkIcon size={18} />
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-black text-[#011421] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsContent;
