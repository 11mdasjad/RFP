"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/modals/VideoModal";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { GoogleReviews } from "@/components/GoogleReviews";
import {
  Quote,
  ArrowLeft,
  Play,
  Star,
} from "lucide-react";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function TestimonialsPage() {
  const [activeVideo, setActiveVideo] = useState<{
    isOpen: boolean;
    url?: string;
    title?: string;
    subtitle?: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
    subtitle: "",
  });

  // Featured Video Testimonials (Including Ajeet Sharma, MDPS, and Neha Sharma Reel)
  const featuredVideoTestimonials = useMemo(() => {
    return TESTIMONIALS_DATA.filter((t) =>
      t.id === "testimonial-mla-ajeet-sharma" ||
      t.id === "testimonial-mdps" ||
      t.id === "testimonial-neha-sharma" ||
      t.id === "testimonial-grassroots"
    );
  }, []);
  return (
    <div className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Global Header */}
      <Header />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/[0.08]">
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="site-container relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-xs font-mono text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#a89bfa]">Client Endorsements</span>
            </div>

            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#a89bfa]">
                <Quote className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span className="tracking-wider uppercase">Client Videos &amp; Google Reviews</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-medium tracking-tight leading-[1.12]">
                Hear From Our Clients
              </h1>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans font-light">
                Watch client video feedback and explore customer review excerpts from our Google business listing.
              </p>
            </div>

            {/* Credibility Counters */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">17+ Years</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Production Excellence (Since 2009)</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#E6C665] tracking-tight">500+</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Productions Delivered</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#a89bfa] tracking-tight">15+ States</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Pan-India Field Outreach</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">Top Tier</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Institutional Ratings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video Testimonials Section (Drive Videos with Official Thumbnails) */}
        {featuredVideoTestimonials.length > 0 && (
          <section className="site-container py-14 border-b border-white/[0.08]">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-mono text-[#a89bfa] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-current text-[#a89bfa]" />
                  <span>On-Camera Endorsements</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                  Watch Leaders &amp; Stakeholders Speak on Video
                </h2>
              </div>
              <p className="text-xs text-white/50 font-sans max-w-md">
                Direct video testimonials recorded on location — featuring elected representatives, educational leadership, and on-ground citizen voices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVideoTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#6b54ee]/15 flex flex-col justify-between"
                >
                  {/* 16:9 Thumbnail Stage */}
                  <div className="relative aspect-video w-full bg-black/90 overflow-hidden">
                    <img
                      src={item.videoThumbnail || item.clientAvatar}
                      alt={item.clientName}
                      className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    {/* Play Button Trigger */}
                    <button
                      onClick={() =>
                        setActiveVideo({
                          isOpen: true,
                          url: item.videoUrl,
                          title: item.clientName,
                          subtitle: `${item.role} · ${item.organization}`,
                        })
                      }
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#6b54ee] hover:bg-[#5842db] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-95"
                      aria-label={`Play video testimonial for ${item.clientName}`}
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </button>

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#a89bfa] border border-white/20">
                        Video Testimonial
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1 text-[#E6C665]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-xl font-serif text-white font-medium group-hover:text-[#a89bfa] transition-colors">
                      {item.clientName}
                    </h3>
                    <p className="text-xs font-mono text-[#E6C665]">
                      {item.role} · {item.organization}
                    </p>
                    <p className="text-xs text-white/70 line-clamp-2 italic font-serif">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() =>
                            setActiveVideo({
                              isOpen: true,
                              url: item.videoUrl,
                              title: item.clientName,
                              subtitle: `${item.role} · ${item.organization}`,
                            })
                          }
                          className="text-xs font-mono text-white/80 hover:text-white flex items-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.12] px-3 py-1.5 rounded-lg transition-colors font-semibold"
                        >
                          <Play className="w-3 h-3 fill-current text-[#a89bfa]" />
                          <span>Play</span>
                        </button>
                        {item.youtubeUrl && (
                          <a
                            href={item.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 hover:bg-red-500/20 px-2.5 py-1.5 rounded-lg transition-colors font-semibold"
                            title="Open directly on YouTube"
                          >
                            <span>YouTube ↗</span>
                          </a>
                        )}
                        {(item.instagramUrl || (item.videoUrl && item.videoUrl.includes("instagram.com"))) && (
                          <a
                            href={item.instagramUrl || item.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-pink-400 hover:text-pink-300 flex items-center gap-1 bg-pink-500/10 hover:bg-pink-500/20 px-2.5 py-1.5 rounded-lg transition-colors font-semibold"
                            title="Open directly on Instagram"
                          >
                            <InstagramIcon className="w-3 h-3" />
                            <span>Instagram ↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        <GoogleReviews />
      </main>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={activeVideo.isOpen}
        onClose={() => setActiveVideo((prev) => ({ ...prev, isOpen: false }))}
        videoUrl={activeVideo.url}
        title={activeVideo.title}
        subtitle={activeVideo.subtitle}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
