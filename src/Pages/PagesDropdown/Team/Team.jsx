import React, { useState, useEffect } from 'react';
import TeamHeader from './TeamHeader';
import TeamCard from './TeamCard';
import { Truck } from 'lucide-react';

const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/team.json')
      .then(res => res.json())
      .then(data => {
        setTeam(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch team data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#F4F7F9]">
      <TeamHeader />
      
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-sm mb-6">
               <span className="w-12 h-0.5 bg-[#FF5A1F]" />
               <div className="flex items-center gap-2">
                  <Truck size={18} />
                  <span>Our Member</span>
               </div>
               <span className="w-12 h-0.5 bg-[#FF5A1F]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#011421] tracking-tight">
               Meet our Special Support Team Members!
            </h2>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-64">
               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF5A1F]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Team;