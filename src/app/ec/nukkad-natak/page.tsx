"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Sparkles,
  Maximize2,
  X,
  MapPin,
  Theater,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  Flame,
  Volume2
} from "lucide-react";

const NUKKAD_PHOTOS = [
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-1.jpg",
    title: "Grassroots Village Chaupal Play",
    caption: "Theatrical troupe enacting satirical socio-political plays directly in rural village squares."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-2.jpg",
    title: "Crowd Gathering & Drum Call",
    caption: "Traditional dholak and dafli rhythms drawing hundreds of local villagers within minutes."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-3.jpg",
    title: "High-Energy Street Dialogue",
    caption: "Direct, witty dialogue delivery highlighting local governance issues and candidate solutions."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-4.jpg",
    title: "Market Haat & Busiest Crossroads",
    caption: "High-footfall weekly market performance connecting with farmers and daily wage workers."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-5.jpg",
    title: "Emotional Voter Resonance",
    caption: "Performances crafted to evoke deep emotional engagement and genuine community trust."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-6.jpg",
    title: "Youth & First-Time Voter Engagement",
    caption: "Interactive segments specifically addressing youth employment, education, and development."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-7.jpeg",
    title: "Mohalla & Slum Outreach",
    caption: "Narrow lane street theatre reaching urban clusters where large vehicles cannot enter."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-8.jpeg",
    title: "Women Voter Mobilization",
    caption: "Dedicated scripts focusing on women empowerment, safety, and local welfare schemes."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/nukkad-natak-11.jpeg",
    title: "Candidate Slogan Chants",
    caption: "Crowd participation in rhythmic campaign slogans echoing throughout the constituency."
  },
  {
    url: "/medien/ec-assets/nukkas-nataks/img-20141002-wa0011.jpg",
    title: "Legacy Ground Mobilization",
    caption: "Decade-long on-ground heritage of grassroots election theatrical campaigns."
  }
];

const THEATRE_PILLARS = [
  {
    title: "Zero Equipment Friction",
    desc: "Requires no electricity, no stages, and no permissions delays. 100% agile mobilization in any market square or alleyway."
  },
  {
    title: "Dafli & Dhol Rhythmic Hook",
    desc: "Acoustic folk instruments instantly attract curious crowds of 100 to 500+ voters within 90 seconds of arrival."
  },
  {
    title: "Satirical Storytelling",
    desc: "Humorous, relatable sketches contrasting past administrative failures with candidate's visionary manifesto."
  },
  {
    title: "High Memorability Index",
    desc: "Studies prove street theatre achieves 3.8x higher recall among grassroots voters than standard pamphlet distribution."
  }
];

export default function NukkadNatakPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a090e] text-[#f4f2f7] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      <Header />

      <main className="pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <section className="site-container mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-white/50">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/ec" className="hover:text-white transition-colors">
              <span>EC Hub</span>
            </Link>
            <span>/</span>
            <span className="text-[#E6C665] font-semibold">Pillar 03: Nukkad Natak &amp; Street Theatre</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden">
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-xs font-mono text-[#F3E5AB] mb-6">
              <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/25 text-[#E6C665] font-bold">
                PILLAR 03
              </span>
              <span className="text-[#E6C665]">✦</span>
              <span className="uppercase tracking-widest font-semibold text-[#E6C665]">
                Grassroots Theatrical Outreach
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
                  Nukkad Natak &amp; Street Theatre
                </h1>
                <p className="text-xl sm:text-2xl font-serif italic text-[#E6C665]">
                  &ldquo;Connecting With Voters at Heart-Level Through Grassroots Drama, Dafli &amp; Satire.&rdquo;
                </p>
                <p className="text-base text-white/80 font-sans leading-relaxed max-w-2xl">
                  In rural and semi-urban constituencies, high-tech screens alone cannot substitute for warm human touch. Our professionally trained street theatre troupes stage high-voltage, humorous, and deeply emotional street plays that dissolve skepticism, spark conversations, and transform silent spectators into enthusiastic voters.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E6C665] text-black font-semibold text-sm transition-colors shadow-lg shadow-[#D4AF37]/20"
                  >
                    <span>View Ground Photos</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/ec/digital-war-room"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-colors"
                  >
                    <span>Next: Pillar 04 (War Room)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Featured Dramatic Visual */}
              <div className="lg:col-span-5">
                <div
                  className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl group cursor-pointer bg-black/60"
                  onClick={() => setSelectedImage("/medien/ec-assets/nukkas-nataks/nukkad-natak-1.jpg")}
                >
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/medien/ec-assets/nukkas-nataks/nukkad-natak-1.jpg"
                      alt="Nukkad Natak Crowd Gathering"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md text-[#E6C665] border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] font-mono text-[#E6C665] uppercase tracking-wider block mb-1">
                        Live Grassroots Ground Engagement
                      </span>
                      <h3 className="font-serif text-lg font-medium">Spontaneous Village Haat Performance</h3>
                      <p className="text-xs text-white/70">Click to view full image in lightbox</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Street Play Impact Cards */}
        <section className="site-container py-16 border-b border-white/[0.08]">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
              Grassroots Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              Why Street Plays Crack Tough Grassroots Battlegrounds
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {THEATRE_PILLARS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14131b] border border-white/[0.08] hover:border-[#D4AF37]/50 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C665]">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-serif text-white font-medium">
                  {item.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section id="gallery" className="site-container py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
                Ground Execution Gallery
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Live Performances in Rural Haats &amp; Mohallas
              </h2>
            </div>
            <p className="text-xs text-white/60 font-mono">
              Click any photo to expand into high-res view
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {NUKKAD_PHOTOS.map((photo, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-[#16151e] border border-white/[0.1] hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer shadow-lg flex flex-col"
                onClick={() => setSelectedImage(photo.url)}
              >
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-black/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-[#E6C665] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-1">
                  <h4 className="text-sm font-serif text-white font-medium group-hover:text-[#E6C665] transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-white/65 font-sans leading-relaxed line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Bar */}
        <section className="site-container py-12 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/ec/prachar-songs"
              className="inline-flex items-center gap-2 text-sm font-mono text-white/70 hover:text-[#E6C665] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Pillar 02 (Songs)</span>
            </Link>

            <Link
              href="/ec/digital-war-room"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 text-[#F3E5AB] text-sm font-mono transition-colors"
            >
              <span>Explore Pillar 04: Digital War Room &amp; WhatsApp Outreach</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Performance Preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
