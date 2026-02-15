import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AdvantagesSection from '../../Components/About/AdvantagesSection';
import FreightServices from '../../Components/Services/FreightServices';
import BrandSection from '../../Components/Brands/BrandSection';
import WorkingProcess from '../../Components/Process/WorkingProcess';
import WhyChooseUs from '../../Components/About/WhyChooseUs';
import Testimonials from '../../Components/About/Testimonials';
import StatsSection from '../../Components/Stats/StatsSection';
import FreightPortfolio from '../../Components/Services/FreightPortfolio';
import TrackingAndQuote from '../../Components/Tracking/TrackingAndQuote';
import PricingSection from '../../Components/Pricing/PricingSection';
import NewsSection from '../../Components/News/NewsSection';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <AdvantagesSection />
            <FreightServices />
            <BrandSection />
            <WorkingProcess />
            <WhyChooseUs />
            <StatsSection />
            <FreightPortfolio />
            <TrackingAndQuote />
            <Testimonials />
            <PricingSection />
            <NewsSection />
           
        </div>
    );
};

export default Home;
