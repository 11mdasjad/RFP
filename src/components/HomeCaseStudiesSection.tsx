"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, CheckCircle2, ArrowUpRight, Award, MessageSquare, Quote, Building2, HeartHandshake, Vote } from "lucide-react";
import { CLIENT_TESTIMONIALS } from "@/data/imagineContent";

interface HomeCaseStudiesSectionProps {
  onPlayVideo: (url: string, title: string, subtitle?: string) => void;
}

export const HomeCaseStudiesSection: React.FC<HomeCaseStudiesSectionProps> = ({ onPlayVideo }) => {
  const [activeTab, setActiveTab] = useState<"corporate" | "ngo" | "election">("corporate");

  const caseStudies = {
    corporate: {
      category: "Corporate & Institutional Master",
      icon: Building2,
      title: "Acharya Narendra Dev College (University of Delhi)",
      year: "2024",
      brief: "Capture the intellectual rigor, scientific research breakthroughs, biotechnology innovations, and dynamic student campus life of Delhi University's premier science college to support their NAAC A++ accreditation and student admissions outreach.",
      role: "Complete creative direction, scriptwriting, micro-cinematography inside live biology and chemistry research laboratories, faculty leadership interviews, dynamic campus drone cinematography, and post-production color mastering.",
      deliverables: [
        "Feature Institutional Film Master (Full 4K)",
        "Admissions & NAAC Accreditation Presentation Reels",
        "Faculty & Scholar Research Spotlight Capsules",
        "Archival Ultra-HD Architectural Stills Portfolio"
      ],
      results: [
        { label: "NAAC Rating Impact", value: "A++ Presentation Reel" },
        { label: "Verified Views", value: "120,000+ Reach" },
        { label: "Research Centers", value: "14 Labs Featured" }
      ],
      videoUrl: "https://www.youtube.com/watch?v=Cgvx6w13ZNg",
      embedId: "Cgvx6w13ZNg",
      thumbnail: "/medien/youtube-thumbs/Cgvx6w13ZNg.jpg"
    },
    ngo: {
      category: "NGO & Social Impact Documentary",
      icon: HeartHandshake,
      title: "Smile India Trust & Public Healthcare Initiatives",
      year: "2023–2024",
      brief: "Document grassroots pediatric medical relief camps, community health clinics, and nutritional support programs across underserved urban settlements with observational sensitivity and authentic human dignity.",
      role: "Field documentary deployment, natural-light observational cinematography without staged interruptions, patient and medical volunteer interviews, multi-city field filming, and multilingual subtitle mastering.",
      deliverables: [
        "Feature Social Impact Documentary (4K Master)",
        "Corporate CSR Donor Reporting Video Capsules",
        "Beneficiary Voice Micro-Interviews for Social Media",
        "Photo Essay for Annual Public Impact Report"
      ],
      results: [
        { label: "Patients Documented", value: "5,000+ Beneficiaries" },
        { label: "CSR Partner Renewal", value: "100% Donor Retention" },
        { label: "Language Versions", value: "Hindi & English" }
      ],
      videoUrl: "https://www.youtube.com/watch?v=hpacHvIGPNI",
      embedId: "hpacHvIGPNI",
      thumbnail: "/medien/logos/smile-india.png"
    },
    election: {
      category: "Election Campaign Management",
      icon: Vote,
      title: "Bihar Assembly Constituency Campaign (Ajeet Sharma, MLA)",
      year: "2024",
      brief: "Execute high-cadence voter outreach, broadcast daily developmental achievements, and mobilize rally crowds across urban and rural wards in a highly competitive Vidhan Sabha assembly election.",
      role: "Turnkey on-ground operations: deployed 12 GPS-tracked mobile high-brightness LED display vans across 180+ panchayats, studio-recorded original prachar songs, recorded live rally multi-camera feeds, and operated a 24-hour rapid video editing war room.",
      deliverables: [
        "12 Mobile LED Van Fleet Operations with Scheduled Routes",
        "Original Studio Prachar Anthems & Campaign Jingles",
        "Daily Rally Highlight Edits Delivered within 24 Hours",
        "WhatsApp Broadcast Videos & Voter Pin-Code Content"
      ],
      results: [
        { label: "Voters Reached", value: "350,000+ Citizens" },
        { label: "Daily Turnaround", value: "< 24 Hours" },
        { label: "Organic Impressions", value: "500,000+ Views" }
      ],
      videoUrl: "https://www.youtube.com/watch?v=3n58zR1Reqs",
      embedId: "3n58zR1Reqs",
      thumbnail: "/medien/youtube-thumbs/3n58zR1Reqs.jpg"
    }
  };

  const currentCase = caseStudies[activeTab];
  const TabIcon = currentCase.icon;

  return (
    <section className="home-container home-section border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="max-w-3xl mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">
          <Award className="w-3.5 h-3.5 text-[#E6C665]" />
          <span>Documented Evidence</span>
        </div>
        <h2 className="home-heading text-white leading-tight">
          Three Deep Case Studies
        </h2>
        <p className="text-sm sm:text-base text-white/70 mt-3 font-sans">
          Real briefs, RFP&apos;s direct role, concrete deliverables, and supported outcomes across our three core sectors.
        </p>
      </div>

      {/* Case Study Sector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <button
          onClick={() => setActiveTab("corporate")}
          className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all text-center border ${
            activeTab === "corporate"
              ? "bg-white text-black border-white shadow-xl"
              : "bg-white/[0.04] text-white/70 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>1. Corporate / Institutional Film</span>
        </button>

        <button
          onClick={() => setActiveTab("ngo")}
          className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all text-center border ${
            activeTab === "ngo"
              ? "bg-white text-black border-white shadow-xl"
              : "bg-white/[0.04] text-white/70 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>2. NGO &amp; Social Impact</span>
        </button>

        <button
          onClick={() => setActiveTab("election")}
          className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all text-center border ${
            activeTab === "election"
              ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-xl"
              : "bg-white/[0.04] text-white/70 border-white/[0.08] hover:text-white hover:bg-white/[0.08]"
          }`}
        >
          <Vote className="w-4 h-4" />
          <span>3. Election Campaign</span>
        </button>
      </div>

      {/* Case Study Deep Dive Card */}
      <div className="bg-[#14121a] rounded-[32px] border border-white/[0.12] p-5 sm:p-8 lg:p-10 shadow-2xl mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Column: Video Preview */}
          <div className="min-w-0 space-y-4">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 group cursor-pointer shadow-xl"
              onClick={() => onPlayVideo(currentCase.videoUrl, currentCase.title, currentCase.category)}
            >
              {activeTab === "ngo" ? (
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f4ff] to-[#e5dcfa]">
                  <img
                    src={currentCase.thumbnail}
                    alt="Smile India Trust"
                    loading="lazy"
                    className="absolute top-[6%] left-1/2 -translate-x-1/2 h-[32%] w-auto object-contain"
                  />
                  <p className="absolute bottom-[17%] inset-x-4 text-center text-sm sm:text-lg font-semibold text-[#35294d]">
                    Community Care &amp; Social Impact
                  </p>
                </div>
              ) : <img
                src={currentCase.thumbnail}
                alt={currentCase.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />}
              <div className={`absolute inset-0 ${activeTab === "ngo" ? "bg-black/0 group-hover:bg-black/5" : "bg-black/40 group-hover:bg-black/20"} transition-colors flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-[#6b54ee] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white">
                Year: {currentCase.year}
              </div>
            </div>

            {/* Documented Outcome Counters */}
            <div className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
              {currentCase.results.map((res, i) => (
                <div key={i} className="text-center">
                  <div className="text-xs sm:text-sm font-bold font-mono text-[#E6C665]">{res.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-white/50 font-mono uppercase mt-0.5">{res.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The Brief, Role & Deliverables */}
          <div className="min-w-0 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a89bfa] mb-1.5">
                <TabIcon className="w-4 h-4" />
                <span>{currentCase.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                {currentCase.title}
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              <div>
                <strong className="text-white block font-mono uppercase tracking-wider text-[11px] mb-1 text-[#E6C665]">
                  The Brief
                </strong>
                <p>{currentCase.brief}</p>
              </div>

              <div>
                <strong className="text-white block font-mono uppercase tracking-wider text-[11px] mb-1 text-[#a89bfa]">
                  RFP&apos;s Direct Role
                </strong>
                <p>{currentCase.role}</p>
              </div>

              <div className="pt-2">
                <strong className="text-white block font-mono uppercase tracking-wider text-[11px] mb-2">
                  Finished Deliverables
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {currentCase.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E6C665] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
              <button
                onClick={() => onPlayVideo(currentCase.videoUrl, currentCase.title, currentCase.category)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-white/90 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Finished Work</span>
              </button>

              <Link
                href="/projects"
                className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>More Projects</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Client Testimonials Strip */}
      <div className="border-t border-white/[0.08] pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665] block mb-1">
              Client Feedback
            </span>
            <h3 className="text-2xl font-serif text-white font-medium">
              Voices of Trust &amp; Partnership
            </h3>
          </div>
          <Link
            href="/testimonials"
            className="text-xs font-mono uppercase tracking-wider text-[#a89bfa] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>All Testimonials</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-fr gap-6">
          {CLIENT_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#14121a] border border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-white/20 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-[#E6C665]/60 mb-3" />
                <p className="text-xs sm:text-sm text-white/80 italic font-serif leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{t.author}</h4>
                  <p className="text-[10px] text-white/50 font-mono mt-0.5">{t.designation}</p>
                </div>
                {t.videoUrl && (
                  <button
                    onClick={() => onPlayVideo(t.videoUrl, t.author, t.designation)}
                    className="p-2 rounded-full bg-white/[0.05] hover:bg-[#6b54ee] text-white transition-colors"
                    title="Watch Video Feedback"
                  >
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
