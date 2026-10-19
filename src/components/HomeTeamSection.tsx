"use client";

import React from "react";
import Link from "next/link";
import { Users, Camera, ArrowUpRight, Sparkles, Award } from "lucide-react";
import { TEAM_DATA } from "@/data/team";
import { INITIAL_GALLERY_ITEMS } from "@/data/galleryData";

const BTS_GALLERY_IDS = [
  "drive-img-studio-broadcast",
  "drive-img-studio-lighting",
  "drive-img-field-unit",
  "drive-img-doc-shoot",
];

export const HomeTeamSection: React.FC = () => {
  // Principal leaders
  const leadership = TEAM_DATA.slice(0, 2);
  // Real behind-the-scenes photos
  const btsPhotos = INITIAL_GALLERY_ITEMS.filter((photo) => BTS_GALLERY_IDS.includes(photo.id));

  return (
    <section className="home-container home-section border-t border-white/[0.08]">
      {/* Header */}
      <div className="home-section-header">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">
            <Users className="w-3.5 h-3.5 text-[#E6C665]" />
            <span>The Team Behind the Frame</span>
          </div>
          <h2 className="home-heading text-white leading-tight">
            Leadership &amp; Real Field Craft
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-[#a89bfa] transition-colors"
          >
            <span>Meet Full Team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-white/20">•</span>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#E6C665] hover:text-[#FFF8DC] transition-colors"
          >
            <span>Production Gallery</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Leadership Duo Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-6 mb-12 sm:mb-16">
        {leadership.map((leader) => (
          <div
            key={leader.id}
            className="p-6 sm:p-8 rounded-3xl bg-[#14121a] border border-white/[0.1] flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start gap-6 group hover:border-white/[0.25] transition-all shadow-xl"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-black shrink-0 border border-white/10">
              <img
                src={leader.image}
                alt={leader.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="min-w-0 space-y-2 text-center sm:text-left flex-1">
              <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#E6C665] px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
                {leader.credentials || "AJK MCRC, Jamia Millia Islamia"}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-[#a89bfa] transition-colors">
                {leader.name}
              </h3>
              <p className="text-xs font-mono text-[#a89bfa]">{leader.role}</p>
              <p className="text-xs text-white/70 font-sans leading-relaxed pt-1">
                {leader.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Authentic Behind the Scenes Production Photos */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60">
            <Camera className="w-4 h-4 text-[#E6C665]" />
            <span>Behind The Scenes: On-Location Production In Action</span>
          </div>
          <Link
            href="/gallery"
            className="text-xs font-mono text-white/50 hover:text-white transition-colors"
          >
            View All Photos →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {btsPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/[0.08] group"
            >
              <img
                src={photo.image}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#E6C665] block">
                    {photo.category}
                  </span>
                  <p className="text-[11px] text-white/90 font-sans line-clamp-1 mt-0.5">
                    {photo.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
