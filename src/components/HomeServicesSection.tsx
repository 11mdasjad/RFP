"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Film, Video, Clapperboard, Megaphone, Share2, Globe, Clock, CheckCircle2, ArrowUpRight, ChevronDown } from "lucide-react";

interface HomeServicesSectionProps {
  onOpenContactWithTopic?: (topic: string) => void;
}

export const HomeServicesSection: React.FC<HomeServicesSectionProps> = ({ onOpenContactWithTopic }) => {
  const [showTechStandards, setShowTechStandards] = useState(false);

  const services = [
    {
      num: "01",
      icon: Film,
      title: "Corporate & Campus Films",
      tagline: "Distilling enterprise vision and academic excellence into cinematic storytelling.",
      deliverables: [
        "Company Profile Videos & Brand Anthems",
        "Campus Showcase & NAAC Accreditation Masters",
        "Executive Keynotes & Facility Walkthroughs"
      ],
      timeline: "2 to 3 weeks",
      example: "Samsung Cleanroom Film, Acharya Narendra Dev College, MDPS Campus Showcase",
      badgeColor: "text-[#F3E5AB] bg-[#D4AF37]/15 border-[#D4AF37]/35"
    },
    {
      num: "02",
      icon: Video,
      title: "Documentaries & Social Impact",
      tagline: "Honoring authenticity through patient, resonant observational craft.",
      deliverables: [
        "Institutional Milestone & Golden Jubilee Documentaries",
        "CSR, Public Health & NGO Field Chronicles",
        "Multilingual Subtitles & Voiceovers (12+ Languages)"
      ],
      timeline: "3 to 4 weeks",
      example: "Smile India Trust Healthcare, IIT Roorkee Research Heritage, National Archives",
      badgeColor: "text-emerald-300 bg-emerald-500/15 border-emerald-500/35"
    },
    {
      num: "03",
      icon: Megaphone,
      title: "Election Campaign Management",
      tagline: "Turnkey constituency operations with high-impact field and digital outreach.",
      deliverables: [
        "Mobile High-Brightness LED Display Van Fleets (GPS Tracked)",
        "Studio-Recorded Prachar Songs & Candidate Anthems",
        "Nukkad Natak (Street Theatre) & 24h Rally Video Highlights"
      ],
      timeline: "Rapid 24–48h Turnaround",
      example: "Bihar Assembly Campaign (Ajeet Sharma, MLA), 45+ Constituency Outreach Tours",
      badgeColor: "text-[#E6C665] bg-[#D4AF37]/15 border-[#D4AF37]/35"
    },
    {
      num: "04",
      icon: Clapperboard,
      title: "AI Video & Virtual Production",
      tagline: "Next-gen generative AI filmmaking, photorealistic 3D CGI, and digital motion.",
      deliverables: [
        "Generative Concept Visualizations & AI Commercials",
        "Hyper-Realistic Virtual Sets & 3D Environments",
        "Multi-Platform Vertical Cinema & Short-Form Edits"
      ],
      timeline: "5 to 10 days",
      example: "Future-Ready Brand Commercials & Conceptual Visual Vignettes",
      badgeColor: "text-[#a89bfa] bg-[#6b54ee]/15 border-[#6b54ee]/35"
    },
    {
      num: "05",
      icon: Share2,
      title: "Social Media & Digital Marketing",
      tagline: "High-engagement short-form video paired with targeted demographic ads.",
      deliverables: [
        "Daily Short-Form Reels & YouTube Shorts Production",
        "Targeted Meta & Google Ad Campaign Management",
        "Constituency & Customer WhatsApp Distribution Loops"
      ],
      timeline: "Ongoing Retainer / Daily",
      example: "Faridabad Smart City Mission, Youth Mobilization Roadshows",
      badgeColor: "text-pink-300 bg-pink-500/15 border-pink-500/35"
    },
    {
      num: "06",
      icon: Globe,
      title: "Web Development & Digital Platforms",
      tagline: "High-speed, cinematic, mobile-first web platforms built with Next.js.",
      deliverables: [
        "Custom Next.js Web Portals & Campaign Headquarters",
        "Mobile-First Responsive Layouts & Video Streaming",
        "100/100 Core Web Vitals & Technical SEO Architecture"
      ],
      timeline: "2 to 4 weeks",
      example: "Political Candidate Hubs, Corporate Portals, Digital Media Archives",
      badgeColor: "text-cyan-300 bg-cyan-500/15 border-cyan-500/35"
    }
  ];

  return (
    <section id="services" className="site-container home-section border-t border-white/[0.08]">
      {/* Header */}
      <div className="mx-auto max-w-5xl mb-10 sm:mb-12 text-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
            Core Disciplines
          </span>
          <h2 className="home-heading text-white leading-tight">
            What You Receive:
            <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-white bg-clip-text text-transparent font-serif italic">
              Deliverables, Timelines &amp; Proven Craft
            </span>
          </h2>
        </div>

        <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70 font-sans text-balance">
          Clear scope, predictable production schedules, and broadcast-quality execution. We handle every step under one roof.
        </p>
      </div>

      {/* Services Grid (6 Core Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-6">
        {services.map((svc) => {
          const Icon = svc.icon;
          return (
            <div
              key={svc.num}
              className="p-6 sm:p-8 rounded-3xl bg-[#14121a] border border-white/[0.08] hover:border-[#a89bfa]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:bg-[#6b54ee] transition-all">
                    <Icon className="w-6 h-6 text-[#a89bfa] group-hover:text-white" />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${svc.badgeColor}`}>
                    {svc.num}
                  </span>
                </div>

                <h3 className="md:min-h-[3.5rem] text-xl font-bold text-white mb-2 group-hover:text-[#a89bfa] transition-colors">
                  {svc.title}
                </h3>

                <p className="md:min-h-[3.75rem] text-sm text-white/70 leading-relaxed font-sans mb-5">
                  {svc.tagline}
                </p>

                {/* Key Client Deliverables */}
                <div className="space-y-2 mb-6 pt-3 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                    Key Deliverables
                  </span>
                  {svc.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E6C665] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Timelines and Examples */}
                <div className="pt-3 border-t border-white/[0.06] space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-white/60">
                    <Clock className="w-3.5 h-3.5 text-[#a89bfa]" />
                    <span>Typical Timeline: <strong className="text-white font-semibold">{svc.timeline}</strong></span>
                  </div>
                  <div className="text-[11px] text-white/50 pt-1 line-clamp-2">
                    <strong className="text-white/70">Examples:</strong> {svc.example}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#a89bfa] hover:text-white font-semibold transition-colors"
                >
                  <span>Detailed Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenContactWithTopic && onOpenContactWithTopic(svc.title)}
                  className="text-xs font-mono text-white/60 hover:text-white transition-colors"
                >
                  Get Quote →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Production Gear & Technical Standards (Moved down as requested in review) */}
      <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
        <button
          onClick={() => setShowTechStandards(!showTechStandards)}
          className="w-full flex items-center justify-between text-left focus:outline-none"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665]">
              Production Standards &amp; Technical Capabilities
            </span>
            <span className="text-xs text-white/40 font-mono hidden sm:inline">
              (Cinema Bodies, Optics, Audio &amp; DCI Mastering)
            </span>
          </div>
          <ChevronDown className={`w-4 h-4 text-white/70 transition-transform ${showTechStandards ? "rotate-180" : ""}`} />
        </button>

        {showTechStandards && (
          <div className="pt-6 mt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono text-white/80 animate-in fade-in duration-200">
            <div>
              <strong className="text-white block mb-1">Cinema Cameras:</strong>
              <p className="text-white/60">Sony FX9 / FX6 / FX3, ARRI Alexa Mini setups, 4K/6K Raw capture</p>
            </div>
            <div>
              <strong className="text-white block mb-1">Optics &amp; Aerial:</strong>
              <p className="text-white/60">Zeiss &amp; Master Prime lenses, DJI Ronin 2, heavy-lift 4K drone cinematography</p>
            </div>
            <div>
              <strong className="text-white block mb-1">Audio &amp; Monitoring:</strong>
              <p className="text-white/60">Sennheiser MKH shotgun, wireless multi-channel lavs, Teradek zero-delay feeds</p>
            </div>
            <div>
              <strong className="text-white block mb-1">Post &amp; Mastering:</strong>
              <p className="text-white/60">DaVinci Resolve Studio color suite, Dolby 5.1/stereo mixing, DCI 4K broadcast masters</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
