import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router';
import { 
  Mail, 
  Phone, 
  ArrowLeft, 
  CheckCircle2, 
  Briefcase, 
  Award,
  Globe,
  Share2
} from 'lucide-react';
import TeamHeader from './TeamHeader';

const TeamDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/team.json')
      .then(res => res.json())
      .then(data => {
        const selected = data.find(m => m.id === parseInt(id));
        setMember(selected);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch team details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!member) return <div className="min-h-screen flex items-center justify-center uppercase font-black text-[#011421]">Member not found</div>;

  return (
    <div className="bg-white">
      <TeamHeader />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/team" 
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#FF5A1F] mb-12 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Team
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left: Image Card */}
            <div className="lg:w-1/3 w-full">
              <div 
                className="relative rounded-[4rem] overflow-hidden shadow-2xl" 
                style={{ clipPath: 'polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%)' }}
              >
                <img src={member.image} alt={member.name} className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011421]/60 to-transparent" />
                <div className="absolute bottom-10 left-10">
                   <h2 className="text-3xl font-black text-white mb-2">{member.name}</h2>
                   <p className="text-[#FF5A1F] font-bold uppercase tracking-widest text-sm">{member.role}</p>
                </div>
              </div>
            </div>

            {/* Right: Content Info */}
            <div className="lg:w-2/3 w-full space-y-12">
               <div>
                  <h3 className="text-4xl font-black text-[#011421] mb-6">About {member.name.split(' ')[0]}</h3>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed max-w-2xl">{member.bio}</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100/50 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all">
                     <div className="w-14 h-14 bg-[#FF5A1F] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                     </div>
                     <div>
                        <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email Address</span>
                        <span className="block text-[#011421] font-bold text-sm">{member.email}</span>
                     </div>
                  </div>

                  <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100/50 flex items-center gap-6 group hover:bg-white hover:shadow-xl transition-all">
                     <div className="w-14 h-14 bg-[#011421] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                        <Phone size={24} />
                     </div>
                     <div>
                        <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Phone Number</span>
                        <span className="block text-[#FF5A1F] font-bold text-sm">{member.phone}</span>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <h4 className="text-xl font-black text-[#011421] flex items-center gap-3">
                        <Award className="text-[#FF5A1F]" size={24} />
                        Professional Skills
                     </h4>
                     <div className="space-y-4">
                        {member.skills.map((skill, i) => (
                          <div key={i} className="flex items-center gap-3">
                             <CheckCircle2 size={18} className="text-[#FF5A1F]" />
                             <span className="text-sm font-bold text-gray-500">{skill}</span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-6">
                     <h4 className="text-xl font-black text-[#011421] flex items-center gap-3">
                        <Briefcase className="text-[#FF5A1F]" size={24} />
                        Experience & Focus
                     </h4>
                     <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                        <div className="flex justify-between items-center mb-4">
                           <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Total Experience</span>
                           <span className="text-[#FF5A1F] font-black text-lg">{member.experience}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '85%' }}
                              className="h-full bg-[#FF5A1F]" 
                           />
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;
