"use client";

import React from "react";
import { FAKTEN_DATA } from "@/data/imagineContent";

export const Fakten: React.FC = () => {
  return (
    <section
      className="relative border-y border-black/[0.08] bg-white py-12 lg:py-16 text-[#0e0d12]"
      aria-label="Key Metrics & Achievements"
    >
      <div className="home-container">
        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#6b54ee] font-semibold mb-8 text-center">
          Key Metrics &amp; Achievements
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {FAKTEN_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`flex min-w-0 flex-col items-center px-3 sm:px-6 text-center ${idx % 2 === 1 ? "border-l border-black/10" : ""} ${idx === 2 ? "lg:border-l lg:border-black/10" : ""}`}
            >
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0e0d12] mb-2 tabular-nums">
                {item.num}
              </div>
              <div className="max-w-[13rem] text-xs sm:text-sm leading-relaxed text-[#0e0d12]/75">
                {item.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
