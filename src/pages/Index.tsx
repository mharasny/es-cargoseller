import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesContainer from '@/components/FeatureSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FunctionalitiesSection from '@/components/FunctionalitiesSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="bg-[rgba(244,244,244,1)] flex flex-col overflow-hidden items-center py-[26px]">
      <Header />
      
      <main className="w-full flex flex-col items-center">
        <HeroSection />
        <StatsSection />
        <FeaturesContainer />
        <TestimonialsSection />
        <FunctionalitiesSection />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
