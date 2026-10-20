"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/data/imagineContent";

interface LogosProps {
  titleEn?: string;
  items?: { name: string; src: string }[];
  reverse?: boolean;
}

export const Logos: React.FC<LogosProps> = ({
  titleEn = "Esteemed Clients & Organizations We Have Produced For",
  items = CLIENT_LOGOS,
  reverse = false,
}) => {
  // Two identical groups keep the halfway animation reset seamless.

  return (
    <section className="py-8 sm:py-10 border-b border-white/[0.08] overflow-hidden bg-[#0a090e]/80 relative">
      <div className="site-container mb-6 sm:mb-8 text-center">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] font-medium">
          {titleEn}
        </h2>
      </div>

      {/* Marquee Wrapper with Edge Fade Gradients */}
      <div className="site-container">
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a090e] via-[#0a090e]/80 to-transparent z-10" />

        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a090e] via-[#0a090e]/80 to-transparent z-10" />

        {/* Continuous Horizontal Moving Track */}
        <div
          className={`${reverse ? "animate-marquee-reverse" : "animate-marquee"} py-2 motion-reduce:animate-none`}
          style={{ animationDuration: `${Math.max(35, items.length * 4)}s` }}
        >
          {[0, 1].map((copy) => (
          <div key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex shrink-0 gap-4 sm:gap-6 pr-4 sm:pr-6">
          {items.map((logo) => (
            <div
              key={logo.src}
              title={logo.name}
              className="shrink-0 w-48 sm:w-56 h-24 sm:h-28 flex items-center justify-center p-4 sm:p-5 rounded-2xl bg-white shadow-md border border-white/20 select-none group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
          </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
