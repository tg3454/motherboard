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

const BookOpenIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section id="home" className="h-screen w-full relative flex flex-col justify-between items-center overflow-hidden bg-black select-none font-body py-8">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 opacity-45"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Navbar (fixed top-4, px-8 / lg:px-16, z-50) */}
      <nav className="fixed top-4 left-0 right-0 px-8 lg:px-16 z-50 flex items-center justify-between pointer-events-none">
        {/* Left: Logo & Naming */}
        <div className="flex items-center gap-3 pointer-events-auto hover:scale-[1.02] transition-transform duration-300">
          <img 
            src="https://gobitsnbytes.org/logo" 
            alt="bits&bytes™ logo" 
            className="h-9 w-auto select-none"
          />
          <span className="font-heading font-black text-xl tracking-wider text-white select-none">
            motherboard
          </span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-1 liquid-glass rounded-full p-1.5 pointer-events-auto border border-burgundy/25">
          {['Identity', 'Provisioning', 'Scheduler'].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/95 hover:text-orange transition-colors font-heading"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-2 bg-burgundy text-white px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full ml-2 select-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Operational
          </div>
        </div>

        {/* Right Space */}
        <div className="w-12 h-12 invisible"></div>
      </nav>

      {/* Bento Grid Content Wrapper (z-10 layer) */}
      <div className="relative z-10 w-full flex-1 flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center pt-28 px-6 lg:px-12 max-w-7xl mx-auto">
        
        {/* Left Column: Heading & CTAs */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:w-5/12 shrink-0">
          {/* Badge */}
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 p-1 liquid-glass rounded-full border border-burgundy/20"
          >
            <span className="bg-burgundy text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full select-none">
              Internal
            </span>
            <span className="text-xs text-white/90 pr-3 font-heading tracking-wide uppercase font-medium">
              bits&bytes™ Operations Core
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-extrabold text-white leading-[0.95] tracking-tight mt-6 max-w-xl">
            <BlurText text="Central Ops Engine" />
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-6 text-sm text-white/70 max-w-md font-body leading-relaxed"
          >
            Unified dashboard managing network assets, chapter entitlements, and automation integrations across all local nodes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mt-8"
          >
            <button className="liquid-glass rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white flex items-center gap-1.5 border border-burgundy/45 hover:scale-105 hover:bg-burgundy/20 active:scale-95 transition-all duration-300">
              Operations API
              <ArrowUpRight className="w-4 h-4" />
            </button>
            
            <a
              href="https://github.com/gobitsnbytes/motherboard"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90 hover:text-white transition-colors duration-200"
            >
              Repository
              <span className="w-8 h-8 rounded-full flex items-center justify-center liquid-glass bg-white/5 border border-white/10">
                <BookOpenIcon className="w-3.5 h-3.5" />
              </span>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="flex flex-row items-stretch gap-4 mt-10 w-full justify-center lg:justify-start"
          >
            {/* Stat 1 */}
            <div className="liquid-glass p-4 w-[160px] rounded-[1rem] flex flex-col items-start border border-burgundy/10 hover:border-burgundy/30 transition-all duration-300">
              <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.5V9m-4.783 7.263A9.003 9.003 0 014 9.071m.082-3.24l.054-.09A13.917 13.917 0 017 2.9M9 2.513a9.085 9.085 0 011.5.398m0 0A9.086 9.086 0 0112 2.513m0 0a9.086 9.086 0 011.5.398m0 0A9.085 9.085 0 0115 2.513M9 3v4m0 0h6V3m-6 4a3 3 0 116 0m-6 0v4m0 0H3m12 0h7M12 11.5v8m-3-1l3 3 3-3" />
              </svg>
              <div className="mt-4">
                <div className="text-2xl font-heading font-black text-white leading-none">
                  Core
                </div>
                <div className="text-[10px] text-white/50 font-heading tracking-wider uppercase font-semibold mt-1.5">
                  IAM Security
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="liquid-glass p-4 w-[160px] rounded-[1rem] flex flex-col items-start border border-burgundy/10 hover:border-burgundy/30 transition-all duration-300">
              <svg className="w-5 h-5 text-orange" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <div className="mt-4">
                <div className="text-2xl font-heading font-black text-white leading-none">
                  Gemini
                </div>
                <div className="text-[10px] text-white/50 font-heading tracking-wider uppercase font-semibold mt-1.5">
                  AI VC Processor
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Platform Capabilities Cards */}
        <div className="flex flex-col gap-6 lg:w-7/12 w-full justify-center">
          
          {/* Card 1: Identity */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(151, 25, 44, 0.05)" }}
            className="liquid-glass rounded-[1.25rem] p-6 border border-burgundy/10 cursor-pointer transition-all duration-300"
            id="identity"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-[0.5rem] flex items-center justify-center bg-burgundy/20 text-orange shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.5V9m-4.783 7.263A9.003 9.003 0 014 9.071m.082-3.24l.054-.09A13.917 13.917 0 017 2.9M9 2.513a9.085 9.085 0 011.5.398m0 0A9.086 9.086 0 0112 2.513m0 0a9.086 9.086 0 011.5.398m0 0A9.085 9.085 0 0115 2.513M9 3v4m0 0h6V3m-6 4a3 3 0 116 0m-6 0v4m0 0H3m12 0h7M12 11.5v8m-3-1l3 3 3-3" />
                </svg>
              </div>
              <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-white/95">
                Identity & Access Core (IAM)
              </h3>
            </div>
            
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Upstream identity provider integration via Discord OAuth. Imports guild roles dynamically, resolves async security principals, and maps global privileges to dashboard endpoints.
            </p>
          </motion.div>

          {/* Card 2: Provisioning */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(151, 25, 44, 0.05)" }}
            className="liquid-glass rounded-[1.25rem] p-6 border border-burgundy/10 cursor-pointer transition-all duration-300"
            id="provisioning"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-[0.5rem] flex items-center justify-center bg-burgundy/20 text-orange shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-white/95">
                Chapter Provisioning & Sync
              </h3>
            </div>
            
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Synchronizes chapter configurations, entitlements, and onboarding checklists with Upstream. Periodically checks pulse records to archive stale nodes and manage digital credentials.
            </p>
          </motion.div>

          {/* Card 3: Scheduler */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(151, 25, 44, 0.05)" }}
            className="liquid-glass rounded-[1.25rem] p-6 border border-burgundy/10 cursor-pointer transition-all duration-300"
            id="scheduler"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-[0.5rem] flex items-center justify-center bg-burgundy/20 text-orange shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold uppercase tracking-wider text-sm text-white/95">
                Automated Meet & Transcriber
              </h3>
            </div>
            
            <p className="text-xs text-white/70 font-body leading-relaxed">
              Dynamically provisions temporary voice channels before scheduled VC syncs. Automated audio recording runs consent alerts, compiles action summaries via Gemini AI, and syncs tasks.
            </p>
          </motion.div>

        </div>

      </div>

      {/* Footer Info */}
      <footer className="relative z-10 text-center text-[10px] text-white/40 font-heading tracking-widest uppercase mt-8 border-t border-burgundy/10 pt-4 w-full px-4 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>bits&bytes™ network Operations · Internal Dashboard</div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Next.js 15 + React 19 Engine</span>
        </div>
      </footer>
    </section>
  );
}
