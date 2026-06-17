import React from 'react';
import HeroSection from '../components/HeroSection';
import CapabilitiesSection from '../components/CapabilitiesSection';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen w-full">
      <HeroSection />
      <CapabilitiesSection />
    </main>
  );
}
