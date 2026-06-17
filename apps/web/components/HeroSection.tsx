"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';

const ArrowUpRight = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const PlayIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <polygon points="6,4 20,12 6,20" />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="home" className="h-screen w-full relative flex flex-col justify-between items-center text-center overflow-hidden bg-black select-none">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Navbar (fixed top-4, px-8 / lg:px-16, z-50) */}
      <nav className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50 flex items-center justify-between pointer-events-none">
        {/* Left */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center liquid-glass font-heading italic text-white text-2xl font-bold pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300">
          a
        </div>

        {/* Center (desktop only) */}
        <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full p-1.5 pointer-events-auto">
          {['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors font-body"
            >
              {link}
            </a>
          ))}
          <button className="bg-white text-black px-4 py-2 text-sm font-medium rounded-full flex items-center gap-1.5 hover:bg-white/90 transition-all duration-300 whitespace-nowrap ml-2 shadow-sm">
            Claim a Spot
            <ArrowUpRight className="w-4 h-4 stroke-black" />
          </button>
        </div>

        {/* Right */}
        <div className="w-12 h-12 invisible"></div>
      </nav>

      {/* Main Content (z-10 layer) */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pt-28 px-4 max-w-5xl mx-auto">
        
        {/* Badge (delay 0.4s) */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-2 p-1 liquid-glass rounded-full bg-white/[0.02]"
        >
          <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full select-none">
            New
          </span>
          <span className="text-sm text-white/90 pr-3 font-body font-light">
            Maiden Crewed Voyage to Mars Arrives 2026
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl justify-center tracking-[-4px] text-center mt-6">
          <BlurText text="Venture Past Our Sky Across the Universe" />
        </h1>

        {/* Subheading (delay 0.8s) */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-6 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-tight text-center"
        >
          Discover the universe in ways once unimaginable. Our pioneering vessels and breakthrough engineering bring deep-space exploration within reach—secure and extraordinary.
        </motion.p>

        {/* CTAs (delay 1.1s) */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="flex items-center gap-6 mt-8"
        >
          {/* Primary CTA (liquid-glass-strong) */}
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-1.5 hover:scale-105 hover:bg-white/5 active:scale-95 transition-all duration-300">
            Start Your Voyage
            <ArrowUpRight className="w-5 h-5" />
          </button>
          
          {/* Secondary CTA (bare text link) */}
          <a
            href="#voyages"
            className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
          >
            View Liftoff
            <span className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass bg-white/5">
              <PlayIcon className="w-3.5 h-3.5" />
            </span>
          </a>
        </motion.div>

        {/* Stats row (delay 1.3s) */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          className="flex flex-row items-stretch justify-center gap-4 mt-10 w-full"
        >
          {/* Card 1 */}
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col items-start text-left hover:scale-[1.02] hover:bg-white/[0.02] transition-transform duration-300">
            <div className="flex items-center justify-center w-[28px] h-[28px] text-white">
              {/* Clock outline SVG */}
              <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="mt-6">
              <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">
                34.5 Min
              </div>
              <div className="text-xs text-white/60 font-body font-light mt-2">
                Average Videos Watch Time
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] flex flex-col items-start text-left hover:scale-[1.02] hover:bg-white/[0.02] transition-transform duration-300">
            <div className="flex items-center justify-center w-[28px] h-[28px] text-white">
              {/* Globe outline SVG */}
              <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
              </svg>
            </div>
            <div className="mt-6">
              <div className="text-4xl font-heading italic text-white tracking-[-1px] leading-none">
                2.8B+
              </div>
              <div className="text-xs text-white/60 font-body font-light mt-2">
                Users Across the Globe
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Partners (bottom of hero, delay 1.4s) */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-4 pb-8 w-full px-4"
      >
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white/80 font-body bg-white/5">
          Collaborating with top aerospace pioneers globally
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-2xl md:text-3xl font-heading italic text-white tracking-tight">
          <span>Aeon</span>
          <span>·</span>
          <span>Vela</span>
          <span>·</span>
          <span>Apex</span>
          <span>·</span>
          <span>Orbit</span>
          <span>·</span>
          <span>Zeno</span>
        </div>
      </motion.div>
    </section>
  );
}
