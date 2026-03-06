import React from 'react';
import HeroSection from './components/HeroSection';
import OfferSection from './components/OfferSection';
import CapabilitySection from './components/CapabilitySection';
import CaseSection from './components/CaseSection';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-100 min-vh-100 overflow-x-hidden">
      <HeroSection />
      <OfferSection />
      <CaseSection />
      <CapabilitySection />
      <TrustSection />
      <Footer />
    </div>
  );
}

export default App;
