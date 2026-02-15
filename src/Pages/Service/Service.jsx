import React from 'react';

import ServiceHeader from './ServiceHeader';
import ServiceCardsSection from './serviceCard';
import RequestQuoteForm from './RequestQuoteForm';
import ServiceFAQ from './serviceFAQ';

const Service = () => {
  return (
    <div className="bg-[#f4f7f9]">
      <ServiceHeader />
      <ServiceCardsSection />
      <RequestQuoteForm />
      <ServiceFAQ />
    </div>
  );
};

export default Service;