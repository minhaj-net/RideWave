import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="bg-[#f4f7f9] min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-[#FF5A1F] font-extrabold uppercase tracking-widest text-sm mb-4"
            >
              <FileText size={18} />
              <span>Legal</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-[#011421] tracking-tight"
            >
              Terms & Conditions
            </motion.h1>
          </div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-600 leading-relaxed"
          >
            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">1. Introduction</h3>
              <p>
                Welcome to Ridewave. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">2. Services</h3>
              <p>
                Ridewave provides logistics and transportation solutions. We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">3. User Obligations</h3>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable federal, state, local, or international law or regulation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">4. Intellectual Property</h3>
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive property of Ridewave and its licensors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">5. Limitation of Liability</h3>
              <p>
                In no event shall Ridewave, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>
            
            <div className="pt-8 border-t border-gray-100 text-sm text-gray-400">
              Last updated: February 2026
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
