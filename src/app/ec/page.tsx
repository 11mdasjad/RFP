"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/modals/VideoModal";
import {
  ArrowLeft,
  ArrowRight,
  Megaphone,
  Tv,
  Music,
  Users,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Play,
  Film,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Share2,
  PhoneCall
} from "lucide-react";

interface PoliticalFilm {
  id: string;
  leader: string;
  designation: string;
  party: string;
  partyBadgeClass: string;
  videoUrl: string;
  thumbnail: string;
  fullTitle: string;
}

const POLITICAL_DOCUMENTARY_FILMS: PoliticalFilm[] = [
  {
    id: "OlIKKn9HyBo",
    leader: "RFP Digital Productions",
    designation: "Election Campaign & Documentary Production",
    party: "RFP Media & Films",
    partyBadgeClass: "bg-[#D4AF37]/20 text-[#F3E5AB] border-[#D4AF37]/40",
    videoUrl: "https://youtu.be/OlIKKn9HyBo",
    thumbnail: "/medien/youtube-thumbs/OlIKKn9HyBo.jpg",
    fullTitle: "चुनाव प्रचार RFP डिजिटल मीडिया | Video Production & Election Management Company"
  },
  {
    id: "jirysVZwPIE",
    leader: "Dr. Antul Teotia",
    designation: "Zila Pramukh Bulandshahr",
    party: "Zila Panchayat Bulandshahr",
    partyBadgeClass: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    videoUrl: "https://youtu.be/jirysVZwPIE",
    thumbnail: "/medien/youtube-thumbs/jirysVZwPIE.jpg",
    fullTitle: "Dr. Antul Teotia Documentary Film | Zila Panchayat Bulandshahr"
  },
  {
    id: "3n58zR1Reqs",
    leader: "Ajit Sharma",
    designation: "MLA INC Bhagalpur",
    party: "INC • Bihar Vidhan Sabha",
    partyBadgeClass: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    videoUrl: "https://youtu.be/3n58zR1Reqs",
    thumbnail: "/medien/youtube-thumbs/3n58zR1Reqs.jpg",
    fullTitle: "Profile Documentary Film | MLA Ajeet Sharma Bhagalpur | Bihar"
  },
  {
    id: "3JWmjrRbYDM",
    leader: "Umesh Agarwal",
    designation: "BJP Gurugram",
    party: "BJP • Haryana Vidhan Sabha",
    partyBadgeClass: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    videoUrl: "https://youtu.be/3JWmjrRbYDM",
    thumbnail: "/medien/youtube-thumbs/3JWmjrRbYDM.jpg",
    fullTitle: "Documentary Film Umesh Agarwal MLA BJP | Gurugram Vikas Yatra"
  },
  {
    id: "I9b_Bg9VzOE",
    leader: "Rajendra Pal Gautam",
    designation: "AAP Seemapuri MLA",
    party: "AAP • Delhi Vidhan Sabha",
    partyBadgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    videoUrl: "https://youtu.be/I9b_Bg9VzOE",
    thumbnail: "/medien/youtube-thumbs/I9b_Bg9VzOE.jpg",
    fullTitle: "Rajendra Pal Gautam (Seemapuri MLA) Sangharsh Gatha Documentary Film"
  },
  {
    id: "X6WGGZucJ1U",
    leader: "Devender Singh Babli",
    designation: "MLA Tohana",
    party: "Haryana Vidhan Sabha",
    partyBadgeClass: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    videoUrl: "https://youtu.be/X6WGGZucJ1U",
    thumbnail: "/medien/youtube-thumbs/X6WGGZucJ1U.jpg",
    fullTitle: "Devender Singh Babli Documentary Film | Tohana, Haryana"
  },
  {
    id: "cNJq_La_yzY",
    leader: "Devendra Yadav",
    designation: "INC Delhi",
    party: "INC • AICC Secretary & Ex MLA Badli",
    partyBadgeClass: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    videoUrl: "https://youtu.be/cNJq_La_yzY",
    thumbnail: "/medien/youtube-thumbs/cNJq_La_yzY.jpg",
    fullTitle: "Profile Documentary Film Devender Yadav - AICC Secretary & Ex MLA, Badli, Delhi"
  },
  {
    id: "KLfO_N4a6V8",
    leader: "Shashi Jain",
    designation: "BJP - Amroha Chairman",
    party: "BJP • Amroha, Uttar Pradesh",
    partyBadgeClass: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    videoUrl: "https://youtu.be/KLfO_N4a6V8",
    thumbnail: "/medien/youtube-thumbs/KLfO_N4a6V8.jpg",
    fullTitle: "Shashi Jain Chairman Amroha, Uttar Pradesh Documentary Film"
  }
];

export default function ElectionCampaignPortalPage() {
  const [isFilmsOpen, setIsFilmsOpen] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string; subtitle: string } | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideo = (url: string, title: string, subtitle: string) => {
    setSelectedVideo({ url, title, subtitle });
    setIsVideoModalOpen(true);
  };

  const pillars = [
    {
      step: "01",
      icon: Tv,
      title: "Mobile LED Display Fleet",
      desc: "High-brightness P3.91 outdoor daylight LED display vans mobilized across assembly constituencies with GPS route tracking and live rally feeds.",
      href: "/ec/mobile-led-fleet",
      tagline: "Daylight LED Vans • GPS Route Fleet"
    },
    {
      step: "02",
      icon: Music,
      title: "Original Prachar Songs & Anthems",
      desc: "Studio-recorded political songs, catchy lyrical anthems, and campaign jingles written to electrify public rallies and dominate social media reels.",
      href: "/ec/prachar-songs",
      tagline: "Custom Audio Masters • In-Page Player"
    },
    {
      step: "03",
      icon: Users,
      title: "Nukkad Natak & Street Theatre",
      desc: "Experienced theatrical troupes performing high-impact grassroots street plays in rural haats, village squares, and urban mohallas to connect with voters.",
      href: "/ec/nukkad-natak",
      tagline: "Grassroots Street Plays • Live Village Chaupals"
    },
    {
      step: "04",
      icon: PhoneCall,
      title: "Bulk SMS / Automated Voice Calls / WhatsApp",
      desc: "Direct communication with wider voter reach via high-volume broadcast SMS, automated voice calls (IVR), missed-call response engines, and micro-targeted WhatsApp broadcast campaigns.",
      href: "/ec/digital-war-room",
      tagline: "Direct Communication • Wider Reach"
    },
    {
      step: "05",
      icon: Share2,
      title: "Social Media Management",
      desc: "Rapid-response campaign reels, voter-targeted digital ad campaigns, daily speech highlights, and active multi-platform presence across Meta, YouTube & X.",
      href: "/ec/social-media-management",
      tagline: "High-Impact Video • Daily Campaign Reels & Ads"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a090e] text-[#f4f2f7] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      {/* Global Header */}
      <Header />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 border-b border-white/[0.08] overflow-hidden">
          {/* Ambient Golden / Violet Glow */}
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="site-container relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#E6C665] font-semibold">EC Hub</span>
            </div>

            {/* Badge & Title */}
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-xs font-mono text-[#F3E5AB]">
                <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/25 text-[#E6C665] font-bold">
                  EC
                </span>
                <span className="text-[#E6C665]">✦</span>
                <span className="uppercase tracking-widest font-semibold text-[#E6C665]">
                  Election Campaign &amp; Management Portal
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.14]">
                <span className="block">Turn key Election</span>
                <span className="block">Campaign Execution</span>
              </h1>

              <p className="text-lg sm:text-2xl font-serif italic text-[#E6C665] leading-relaxed">
                &ldquo;Integrated On-Ground Outreach &amp; High-Impact Digital Campaign Communication.&rdquo;
              </p>

              <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-3xl pt-2">
                RFP Digital Productions runs end-to-end election campaign operations across Vidhan Sabha and Lok Sabha elections nationwide. This dedicated [EC] portal is primed to showcase your candidate manifestos, custom field collaterals, and high-stakes campaign media.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mt-12 pt-8 border-t border-white/[0.08]">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white">45+</span>
                <p className="text-xs font-mono text-[#E6C665] uppercase tracking-wider">Campaign Constituencies</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#E6C665]">80+ Fleet</span>
                <p className="text-xs font-mono text-[#E6C665] uppercase tracking-wider">Mobile LED Vans</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white">10M+</span>
                <p className="text-xs font-mono text-[#E6C665] uppercase tracking-wider">Voters Reached</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#a89bfa]">24/7</span>
                <p className="text-xs font-mono text-white/60 uppercase tracking-wider">Live War Room</p>
              </div>
            </div>
          </div>
        </section>

        {/* Grand Visual Banner Poster */}
        <section className="site-container py-10 sm:py-16 border-b border-white/[0.08]">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-[#D4AF37]/35 shadow-2xl">
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/medien/landing/rfp-election-campaign-master-poster.jpg"
                alt="RFP Digital Productions - चुनाव प्रचार मतलब आरएफसी डिजिटल मीडिया"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Our RFP’s Political Documentary FILMS Section */}
        <section className="site-container py-14 sm:py-20 border-b border-white/[0.08]" id="documentary-films">
          {/* Clickable Section Header Box */}
          <div
            onClick={() => setIsFilmsOpen((prev) => !prev)}
            className="cursor-pointer group rounded-3xl bg-gradient-to-r from-[#171622] via-[#12111a] to-[#0c0b11] border border-[#D4AF37]/35 p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:border-[#D4AF37] relative overflow-hidden"
            title="Click to expand/collapse Political Documentary Films"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-10 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-mono text-[#F3E5AB]">
                  <Film className="w-3.5 h-3.5 text-[#E6C665]" />
                  <span>OFFICIAL CAMPAIGN MEDIA ARCHIVE</span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white font-medium tracking-tight group-hover:text-[#F3E5AB] transition-colors">
                  Political Documentary FILMS
                </h2>
                
                <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                  Comprehensive political biography films, constituency development documentaries, and leader profile stories produced for high-profile MLAs, MPs, and Panchayat leaders across India.
                </p>
              </div>

              {/* Toggle Trigger Button */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="px-5 py-3 rounded-2xl bg-[#D4AF37]/15 group-hover:bg-[#D4AF37] border border-[#D4AF37]/40 text-[#F3E5AB] group-hover:text-black font-mono text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-lg shadow-[#D4AF37]/10">
                  <span className="font-bold">{POLITICAL_DOCUMENTARY_FILMS.length} Documentary Films</span>
                  {isFilmsOpen ? (
                    <ChevronUp className="w-4 h-4 transition-transform" />
                  ) : (
                    <ChevronDown className="w-4 h-4 transition-transform animate-bounce" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Films Grid (Visible when open) */}
          {isFilmsOpen && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in duration-300">
              {POLITICAL_DOCUMENTARY_FILMS.map((film) => (
                <div
                  key={film.id}
                  onClick={() => openVideo(film.videoUrl, film.leader, `${film.designation} • ${film.party}`)}
                  className="group relative rounded-2xl overflow-hidden bg-[#131219] border border-white/[0.1] hover:border-[#D4AF37]/80 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/15 cursor-pointer"
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black/90">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={film.thumbnail}
                      alt={film.leader}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    {/* Glowing Red Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-xl shadow-red-600/40 transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Top Party Badge */}
                    <div className="absolute top-3 right-3 max-w-[65%] truncate">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border backdrop-blur-md block truncate ${film.partyBadgeClass}`}>
                        {film.party}
                      </span>
                    </div>

                    {/* Top Left Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-wider text-white/80">
                        Documentary
                      </span>
                    </div>
                  </div>

                  {/* Film Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-lg font-serif text-white group-hover:text-[#F3E5AB] transition-colors line-clamp-1 font-medium">
                        {film.leader}
                      </h3>
                      <p className="text-xs font-mono text-[#E6C665] mt-1 line-clamp-1">
                        {film.designation}
                      </p>
                      <p className="text-xs text-white/60 font-sans mt-2 line-clamp-2 leading-relaxed">
                        {film.fullTitle}
                      </p>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#E6C665] group-hover:text-white transition-colors">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span className="font-semibold">Watch Film</span>
                      </span>

                      <a
                        href={film.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-white/5 transition-colors"
                        title="Open on YouTube"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Core Pillars of [EC] Operations */}
        <section className="site-container py-16 pb-24">
          <div className="mb-12">
            <div className="text-xs font-mono text-[#E6C665] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E6C665]" />
              <span>Core Operational Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
              Everything Needed to Win Constituencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={idx}
                  href={pillar.href}
                  className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#121118] hover:bg-[#181622] hover:border-[#D4AF37]/50 transition-all duration-300 min-h-[270px] flex flex-col justify-between p-6 sm:p-8 group shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10"
                >
                  {/* Subtle ambient corner glow on hover */}
                  <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#D4AF37]/[0.03] group-hover:bg-[#D4AF37]/[0.08] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-[#6b54ee]/[0.03] group-hover:bg-[#6b54ee]/[0.08] rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                  {/* Card Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] text-[#F3E5AB] border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#E6C665] px-3 py-1 rounded-full bg-white/[0.04] border border-[#D4AF37]/25">
                        PILLAR {pillar.step}
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Action Button */}
                  <div className="relative z-10 space-y-3 pt-6">
                    <div>
                      <span className="text-[11px] font-mono text-[#E6C665] uppercase tracking-wider block mb-1">
                        {pillar.tagline}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#F3E5AB] transition-colors font-medium">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 group-hover:text-white/85 transition-colors leading-relaxed font-sans">
                      {pillar.desc}
                    </p>

                    <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#E6C665] group-hover:text-white transition-colors">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <span>Explore Dedicated Page</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                      </span>
                      <span className="text-white/40 group-hover:text-white/70 transition-colors">
                        Click to Open →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      {/* Video Modal for Documentary Films */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={selectedVideo?.url}
        title={selectedVideo?.title}
        subtitle={selectedVideo?.subtitle}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
