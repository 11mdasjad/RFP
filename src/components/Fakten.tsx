"use client";

import React from "react";
import { FAKTEN_DATA } from "@/data/imagineContent";

export const Fakten: React.FC = () => {
  return (
    <section
      className="relative border-y border-black/[0.08] bg-white py-8 lg:py-10 text-[#0e0d12]"
      aria-label="Key Metrics & Achievements"
    >
      <div className="site-container">
        <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#6b54ee] font-bold mb-8 text-center lg:text-left">
          Key Metrics &amp; Achievements
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 items-stretch gap-y-8 lg:gap-x-10 xl:gap-x-14">
          {FAKTEN_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex min-w-0 flex-col items-center px-3 sm:px-6 text-center lg:items-start lg:px-0 lg:text-left ${idx % 2 === 1 ? "border-l border-black/10 lg:border-l-0" : ""}`}
            >
              {idx < FAKTEN_DATA.length - 1 && (
                <span aria-hidden="true" className="hidden lg:block absolute inset-y-0 -right-5 xl:-right-7 w-px bg-black/10" />
              )}
              <div className="text-4xl sm:text-5xl font-extrabold leading-none tracking-tight text-[#0e0d12] mb-3 tabular-nums">
                {item.num}
              </div>
              <div className="w-full max-w-[16rem] min-h-[3.25em] text-xs sm:text-sm font-bold leading-relaxed text-balance lg:text-wrap text-[#0e0d12]/85">
                {item.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
