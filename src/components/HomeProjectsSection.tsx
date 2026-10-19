"use client";

import React from "react";
import Link from "next/link";
import { Film, Megaphone, Play, ArrowUpRight, Sparkles, Eye, CheckCircle2 } from "lucide-react";
import { ProjectCard, PROJECTS_DATA } from "@/data/imagineContent";

interface HomeProjectsSectionProps {
  onPlayVideo: (url: string, title: string, subtitle?: string) => void;
  onSelectProject: (project: ProjectCard) => void;
  onOpenContactWithTopic?: (topic: string) => void;
}

export const HomeProjectsSection: React.FC<HomeProjectsSectionProps> = ({
  onPlayVideo,
  onSelectProject,
  onOpenContactWithTopic,
}) => {
  // Select 6 premier diverse works across corporate, campus, documentary, and election
  const featuredProjects = PROJECTS_DATA.slice(0, 6);

  return (
    <section id="work" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C665]" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Selected Works &amp; <br />
            <span className="bg-gradient-to-r from-[#b4a6ff] via-[#e5c665] to-white bg-clip-text text-transparent font-serif italic">
              Production Portals
            </span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm sm:text-base text-white/70 max-w-md font-sans">
            Explore our two specialized divisions or preview selected flagship productions below.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-mono uppercase tracking-wider font-semibold border border-white/10 hover:border-white/25 transition-all whitespace-nowrap active:scale-95"
          >
            <span>All Selected Work</span>
            <ArrowUpRight className="w-4 h-4 text-[#E6C665]" />
          </Link>
        </div>
      </div>

      {/* TWO DISTINCT ENTRY POINTS (FILMS & MEDIA vs ELECTION CAMPAIGNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 lg:mb-20">
        {/* Portal 1: Films & Digital Media */}
        <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#181622] via-[#121118] to-[#15131d] border border-[#a89bfa]/30 hover:border-[#a89bfa]/70 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#6b54ee]/15 border border-[#6b54ee]/30 flex items-center justify-center text-[#a89bfa] group-hover:scale-110 transition-transform">
                <Film className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#a89bfa] px-3 py-1 rounded-full bg-[#6b54ee]/10 border border-[#6b54ee]/25 font-bold">
                Division 01
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-3 group-hover:text-[#F3E5AB] transition-colors">
              Films &amp; Digital Media
            </h3>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 font-sans">
              Cinema-grade storytelling for corporate enterprises, premier universities, hospitals, and national archives. We craft visual stories that communicate prestige, research rigor, and emotional resonance.
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-2 mb-8 text-xs text-white/80 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span>Corporate Anthems</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span>Campus &amp; NAAC Films</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span>Field Documentaries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span>AI Video Production</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#6b54ee] hover:bg-[#7c6af2] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Explore Film Showcase</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => onOpenContactWithTopic && onOpenContactWithTopic("Corporate Films")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-mono uppercase tracking-wider transition-all border border-white/10"
            >
              <span>Commission Film</span>
            </button>
          </div>
        </div>

        {/* Portal 2: Election Campaign Management */}
        <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#1b1713] via-[#141210] to-[#16130e] border border-[#D4AF37]/35 hover:border-[#D4AF37]/80 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#E6C665] group-hover:scale-110 transition-transform">
                <Megaphone className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665] px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 font-bold">
                Division 02
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-3 group-hover:text-[#F3E5AB] transition-colors">
              Election Campaign Management
            </h3>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 font-sans">
              Turnkey election management and constituency outreach: mobile high-brightness LED vans, studio-recorded prachar songs, street plays (Nukkad Nataks), and 24/7 rapid rally highlight war rooms.
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-2 mb-8 text-xs text-white/80 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E6C665]" />
                <span>Mobile LED Fleets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E6C665]" />
                <span>Original Prachar Songs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E6C665]" />
                <span>Nukkad Natak Troupe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E6C665]" />
                <span>ECI Compliant War Room</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
            <Link
              href="/ec"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#E6C665] hover:bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
            >
              <span>Explore Campaign Hub</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => onOpenContactWithTopic && onOpenContactWithTopic("Election Campaign Services")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs font-mono uppercase tracking-wider transition-all border border-white/10"
            >
              <span>Inquire Campaign</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4–6 SELECTED PROJECTS DIRECTLY ON HOMEPAGE */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-1">
            Featured Productions
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
            Selected Work Highlights
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-[#14121a] rounded-3xl border border-white/[0.1] overflow-hidden flex flex-col justify-between hover:border-white/[0.25] hover:shadow-2xl transition-all duration-300"
          >
            {/* Visual Thumbnail & Play Action */}
            <div className="relative aspect-[16/10] bg-black overflow-hidden">
              <img
                src={project.poster}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/15">
                  {project.categoryEn}
                </span>
              </div>

              {/* Play Video Trigger Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => onPlayVideo(project.videoUrl || project.youtubeUrl || "", project.title, project.client)}
                  className="w-14 h-14 rounded-full bg-[#6b54ee] hover:bg-[#7c6af2] text-white flex items-center justify-center shadow-xl transform active:scale-95 transition-all"
                  aria-label={`Play ${project.title}`}
                >
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#E6C665] block mb-1">
                  {project.client}
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-[#a89bfa] transition-colors leading-snug line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-xs text-white/70 font-sans leading-relaxed mt-2 line-clamp-2">
                  {project.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#a89bfa] hover:text-white font-semibold transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Case Study</span>
                </button>

                <button
                  onClick={() => onPlayVideo(project.videoUrl || project.youtubeUrl || "", project.title, project.client)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-white/50 hover:text-white transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Play Film</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
