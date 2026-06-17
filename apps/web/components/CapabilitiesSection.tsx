"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';

interface CardData {
  title: string;
  body: string;
  iconPath: string;
  tags: string[];
}

export default function CapabilitiesSection() {
  const cardData: CardData[] = [
    {
      title: "AI Scenery",
      body: "AI analyzes your product to create indistinguishable natural environments — from Icelandic cliffs to misty forests.",
      iconPath: "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z",
      tags: ["Natural Context", "Photo Realism", "Infinite Settings", "Eco-Vibe"]
    },
    {
      title: "Batch Production",
      body: "Style your entire product line in minutes. Create a unified visual identity for catalogues and social media without weeks of retouching.",
      iconPath: "M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z",
      tags: ["Scale Fast", "Visual Consistency", "Time Saver", "Ready to Post"]
    },
    {
      title: "Smart Lighting",
      body: "Automatic lighting and material adjustment. Achieve flawless integration with realistic shadows and sunlight.",
      iconPath: "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z",
      tags: ["Ray Tracing", "Physical Shadows", "Studio Quality", "Sunlight Sync"]
    }
  ];

  return (
    <section id="voyages" className="min-h-screen w-full relative flex flex-col justify-between overflow-hidden bg-black select-none">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Layer (relative z-10) */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-32 pb-16 flex flex-col min-h-screen w-full max-w-7xl mx-auto">
        
        {/* Header (mb-auto) */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-auto"
        >
          <div className="text-sm font-body text-white/80 mb-6 tracking-wider font-medium">
            {"// Capabilities"}
          </div>
          <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Production
            <br />
            evolved
          </h2>
        </motion.div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col cursor-pointer transition-all duration-300"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                {/* Left: 44x44 square with white SVG */}
                <div className="w-11 h-11 rounded-[0.75rem] flex items-center justify-center liquid-glass bg-white/5 shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={card.iconPath} />
                  </svg>
                </div>

                {/* Right: Pill Tags */}
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {card.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="liquid-glass rounded-full px-2.5 py-1 text-[11px] text-white/90 font-body whitespace-nowrap bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Middle Spacer */}
              <div className="flex-1" />

              {/* Bottom Row */}
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
