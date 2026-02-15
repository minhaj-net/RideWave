import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <ShieldCheck size={18} />
              <span>Legal</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-[#011421] tracking-tight"
            >
              Privacy Policy
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
              <h3 className="text-xl font-bold text-[#011421] mb-4">1. Information Collection</h3>
              <p>
                At Ridewave, we collect information that you provide directly to us, including when you request a quote, track a shipment, or contact our support team. This may include your name, email address, phone number, and shipment details.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">2. Use of Information</h3>
              <p>
                We use the information we collect to provide, maintain, and improve our services, including to process transactions, send you related information, and respond to your comments and questions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">3. Data Security</h3>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">4. Cookies</h3>
              <p>
                We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#011421] mb-4">5. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <span className="text-[#FF5A1F] font-bold">Ridewaveinfo@gmail.com</span>.
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

export default PrivacyPolicy;
