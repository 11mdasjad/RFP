"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Tv,
  Radio,
  MapPin,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  X,
  Sparkles,
  Layers,
  ChevronRight,
  Calendar,
  Volume2
} from "lucide-react";

const FLEET_IMAGES = [
  {
    url: "/medien/ec-assets/led-screen-display/bjp-mcd-led-van.jpeg",
    title: "High-Visibility Campaign Van",
    caption: "Daylight-visible P3.91 LED panel van deployed for high-density roadshows and ward campaigns."
  },
  {
    url: "/medien/ec-assets/led-screen-display/led-screen-1.jpg",
    title: "Large Format Mobile Rig",
    caption: "Hydraulic lift system with 360-degree rotation and high-output directional sound."
  },
  {
    url: "/medien/ec-assets/led-screen-display/led-walls.jpeg",
    title: "Rally LED Stage Walls",
    caption: "Custom curved P3.91 modular LED wall configuration for large public rallies and public meetings."
  },
  {
    url: "/medien/ec-assets/led-screen-display/led-screen-2.jpg",
    title: "Constituency Village Outreach",
    caption: "Compact LED van mobilized to remote rural choupals and village haats."
  },
  {
    url: "/medien/ec-assets/led-screen-display/led-screen-3-big.jpg",
    title: "Prime Daylight Projection",
    caption: "6,500 nits high-luminance outdoor display visible in direct peak sunlight."
  },
  {
    url: "/medien/ec-assets/led-screen-display/led-screen-4.jpg",
    title: "Constituency Route Deployment",
    caption: "Pre-programmed GPS constituency routes covering 40+ villages daily."
  },
  {
    url: "/medien/ec-assets/led-screen-display/led-screen-5.jpeg",
    title: "Evening Choupals & Night Screenings",
    caption: "Atmospheric evening film screenings showcasing candidate achievements and manifesto promises."
  },
  {
    url: "/medien/ec-assets/led-screen-display/bjp.jpg",
    title: "Central Rally Live Feed",
    caption: "Low-latency SDI uplink streaming keynote addresses to secondary public locations."
  }
];

const SPECIFICATIONS = [
  {
    label: "Pixel Pitch",
    value: "P3.91 Outdoor Daylight",
    desc: "Crystal-clear resolution visible from 5m to 100m distance."
  },
  {
    label: "Brightness Rating",
    value: "6,500+ Nits High-Luminance",
    desc: "100% anti-glare readability under direct midday sunshine."
  },
  {
    label: "Power Independence",
    value: "Silent 15kVA Diesel Gen-Set",
    desc: "Continuous 14-hour non-stop broadcasting without grid power dependency."
  },
  {
    label: "Audio Power",
    value: "Line Array 4000W RMS",
    desc: "Long-throw directional sound horns reaching up to 1,500 people per stop."
  },
  {
    label: "Tracking & Telemetry",
    value: "Real-Time GPS + Dashcam",
    desc: "Live route tracking integrated with the Central War Room dashboard."
  },
  {
    label: "Live Multicam Broadcast",
    value: "4G/5G Bonded SIM Uplink",
    desc: "Live streaming central rally speeches to all fleet vans simultaneously."
  }
];

export default function MobileLedFleetPage() {
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
            <span className="text-[#E6C665] font-semibold">Pillar 01: Mobile LED Display Fleet</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden">
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-xs font-mono text-[#F3E5AB] mb-6">
              <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/25 text-[#E6C665] font-bold">
                PILLAR 01
              </span>
              <span className="text-[#E6C665]">✦</span>
              <span className="uppercase tracking-widest font-semibold text-[#E6C665]">
                High-Impact On-Ground Fleet
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
                  Mobile LED Display Fleet
                </h1>
                <p className="text-xl sm:text-2xl font-serif italic text-[#E6C665]">
                  &ldquo;Mobilizing Cinematic Daylight Displays Directly to Every Village Chowk &amp; Urban Mohalla.&rdquo;
                </p>
                <p className="text-base text-white/80 font-sans leading-relaxed max-w-2xl">
                  Our fleet of custom-fabricated mobile LED vans turns every street corner into a prime rally venue. Equipped with high-brightness P3.91 daylight screens, hydraulic lifts, self-contained whisper-quiet generators, and GPS-verified route management, we ensure your message reaches every voter with maximum clarity.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#E6C665] text-black font-semibold text-sm transition-colors shadow-lg shadow-[#D4AF37]/20"
                  >
                    <span>View Fleet Gallery</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/ec/prachar-songs"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-colors"
                  >
                    <span>Next: Pillar 02 (Songs)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Featured Van Hero Visual */}
              <div className="lg:col-span-5">
                <div
                  className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl group cursor-pointer bg-black/60"
                  onClick={() => setSelectedImage("/medien/ec-assets/led-screen-display/bjp-mcd-led-van.jpeg")}
                >
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/medien/ec-assets/led-screen-display/bjp-mcd-led-van.jpeg"
                      alt="Mobile LED Van Front View"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md text-[#E6C665] border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] font-mono text-[#E6C665] uppercase tracking-wider block mb-1">
                        Deployment Ready • Vidhan Sabha &amp; Lok Sabha
                      </span>
                      <h3 className="font-serif text-lg font-medium">Custom Fabricated LED Stage Vans</h3>
                      <p className="text-xs text-white/70">Click to view full-resolution photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Grid */}
        <section className="site-container py-16 border-b border-white/[0.08]">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
              Engineering &amp; Fleet Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              Built for Harsh On-Ground Campaign Demands
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIFICATIONS.map((spec, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#14131b] border border-white/[0.08] hover:border-[#D4AF37]/50 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C665]">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  {spec.label}
                </div>
                <h4 className="text-lg font-serif text-white font-medium">
                  {spec.value}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-sans">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fleet Media Gallery */}
        <section id="gallery" className="site-container py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
                On-Ground Photographic Proof
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Constituency Operations &amp; Screen Setups
              </h2>
            </div>
            <p className="text-xs text-white/60 font-mono">
              Click any image to view in high resolution
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FLEET_IMAGES.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-[#16151e] border border-white/[0.1] hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer shadow-lg flex flex-col"
                onClick={() => setSelectedImage(item.url)}
              >
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-black/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.title}
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
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/65 font-sans leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation to Other Pillars */}
        <section className="site-container py-12 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/ec"
              className="inline-flex items-center gap-2 text-sm font-mono text-white/70 hover:text-[#E6C665] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to EC Hub Overview</span>
            </Link>

            <Link
              href="/ec/prachar-songs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 text-[#F3E5AB] text-sm font-mono transition-colors"
            >
              <span>Explore Pillar 02: Original Prachar Songs</span>
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
              alt="Fleet Detail Preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
