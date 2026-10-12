"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Sparkles,
  PhoneCall,
  Share2,
  Radio,
  Camera,
  Layers,
  Palette,
  CheckCircle2,
  Maximize2,
  X,
  ChevronRight,
  ShieldCheck,
  Send,
  Zap
} from "lucide-react";

// Creative Graphics from Drive
const GRAPHIC_POSTERS = [
  {
    url: "/medien/ec-assets/creative-graphic-designs/manifesto3.jpg",
    title: "Official Constituency Manifesto",
    tag: "Manifesto & Vision"
  },
  {
    url: "/medien/ec-assets/creative-graphic-designs/sankalp-patr.jpeg",
    title: "10-Point Sankalp Patra",
    tag: "Voter Pledge"
  },
  {
    url: "/medien/ec-assets/creative-graphic-designs/poster-curv-final.jpg",
    title: "Major Rally Poster Design",
    tag: "Hoarding & Wall Poster"
  },
  {
    url: "/medien/ec-assets/creative-graphic-designs/creative3.png",
    title: "WhatsApp Social Reel Graphic",
    tag: "Digital Post"
  },
  {
    url: "/medien/ec-assets/creative-graphic-designs/sandesh-4961x3500.jpg",
    title: "Vikas Sandesh Direct Mailer",
    tag: "Print Collateral"
  },
  {
    url: "/medien/ec-assets/creative-graphic-designs/tshirt-new1.jpg",
    title: "Campaign Volunteer T-Shirt",
    tag: "Merchandise"
  },
  {
    url: "/medien/ec-assets/creative-graphic-designs/cap.jpg",
    title: "Electoral Rally Cap & Patka",
    tag: "Merchandise"
  },
  {
    url: "/medien/ec-assets/creative-graphic-designs/patka.jpg",
    title: "Honorary Candidate Patka",
    tag: "Merchandise"
  }
];

// Political Photoshoot portraits from Drive
const CANDIDATE_PHOTOS = [
  {
    url: "/medien/ec-assets/still-photoshoot-political/aman-ahmed-1.jpeg",
    name: "Aman Ahmed",
    title: "Candidate Portrait - Formal White Kurta",
    role: "Assembly Candidate"
  },
  {
    url: "/medien/ec-assets/still-photoshoot-political/cp-singh-1.jpg",
    name: "CP Singh",
    title: "Senior Leadership High-Res Still",
    role: "Constituency Leader"
  },
  {
    url: "/medien/ec-assets/still-photoshoot-political/mukhtar-ahmed.jpg",
    name: "Mukhtar Ahmed",
    title: "Official Studio Portrait",
    role: "Political Executive"
  },
  {
    url: "/medien/ec-assets/still-photoshoot-political/ch-ranjeet-singh-mla.jpg",
    name: "Ch. Ranjeet Singh MLA",
    title: "Incumbent MLA Official Banner Still",
    role: "Sitting MLA"
  },
  {
    url: "/medien/ec-assets/still-photoshoot-political/navin-1.jpeg",
    name: "Navin Kumar",
    title: "Youth Mobilizer Studio Shoot",
    role: "Youth Wing President"
  },
  {
    url: "/medien/ec-assets/still-photoshoot-political/shashi-jain-amroha.jpg",
    name: "Shashi Jain",
    title: "Amroha Leadership Portrait",
    role: "Senior Politician"
  }
];

// Prachar Umbrellas & Field Canopies from Drive
const FIELD_BRANDING = [
  {
    url: "/medien/ec-assets/prachar-umbrella/whatsapp-image-2022-10-30-at-2-18-18-pm-1.jpeg",
    title: "Constituency Voter Helpdesk Canopy",
    desc: "Weatherproof branded umbrella kiosk deployed at voter registration booths."
  },
  {
    url: "/medien/ec-assets/prachar-umbrella/whatsapp-image-2022-10-30-at-2-18-18-pm.jpeg",
    title: "Market Square Information Center",
    desc: "High-footfall market booth distributing pamphlets and candidate slips."
  },
  {
    url: "/medien/ec-assets/prachar-umbrella/whatsapp-image-2022-10-30-at-2-18-19-pm.jpeg",
    title: "Ground Volunteer Team Deployment",
    desc: "Trained field staff stationed at each canopy answering voter queries."
  },
  {
    url: "/medien/ec-assets/prachar-umbrella/whatsapp-image-2022-10-30-at-2-18-21-pm.jpeg",
    title: "Roadside Branding Visibility",
    desc: "Continuous visual recall for commuters and pedestrians along main transit corridors."
  }
];

export default function DigitalWarRoomPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"video" | "graphics" | "photos" | "canopy">("video");

  // Video Player state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-[#0a090e] text-[#f4f2f7] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      <Header />

      <main className="pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
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
            <span className="text-[#E6C665] font-semibold">Pillar 04: Digital War Room &amp; WhatsApp Outreach</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden">
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-xs font-mono text-[#F3E5AB] mb-6">
              <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/25 text-[#E6C665] font-bold">
                PILLAR 04
              </span>
              <span className="text-[#E6C665]">✦</span>
              <span className="uppercase tracking-widest font-semibold text-[#E6C665]">
                Digital War Room &amp; Narrative Command
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
                  Digital War Room &amp; WhatsApp Outreach
                </h1>
                <p className="text-xl sm:text-2xl font-serif italic text-[#E6C665]">
                  &ldquo;24/7 Real-Time Narrative Shaping, Missed-Call Engines &amp; Precision Micro-Targeting.&rdquo;
                </p>
                <p className="text-base text-white/80 font-sans leading-relaxed max-w-2xl">
                  Modern election campaigns are won by controlling the hourly digital news cycle and direct-to-voter messaging. We set up physical and cloud war rooms that monitor voter sentiment, neutralize opponent disinformation in under 15 minutes, broadcast personalized WhatsApp audio/video cards, and run automated Missed-Call voter registration drives.
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl sm:text-2xl font-serif font-bold text-[#E6C665]">15 Min</span>
                    <p className="text-[11px] font-mono text-white/60 uppercase">Rebuttal Turnaround</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl sm:text-2xl font-serif font-bold text-white">500K+</span>
                    <p className="text-[11px] font-mono text-white/60 uppercase">Daily WA Broadcasts</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl sm:text-2xl font-serif font-bold text-[#a89bfa]">24/7</span>
                    <p className="text-[11px] font-mono text-white/60 uppercase">Live Media Desk</p>
                  </div>
                </div>
              </div>

              {/* War Room Visual Banner */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-black/80">
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/medien/landing/whatsapp-marketing-campaigns.png"
                      alt="WhatsApp Marketing and Digital Command Desk"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[11px] font-mono text-[#E6C665] uppercase tracking-wider block mb-1">
                        Booth-Wise Micro-Targeting
                      </span>
                      <h3 className="font-serif text-lg font-medium">Broadcast Lists &amp; Peer Networks</h3>
                      <p className="text-xs text-white/70">Pin-code level segmented digital distribution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Selection Bar */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-[#14131b] border border-white/10 max-w-fit">
            <button
              onClick={() => setActiveTab("video")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === "video"
                  ? "bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Miss Call Campaign Video</span>
            </button>

            <button
              onClick={() => setActiveTab("graphics")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === "graphics"
                  ? "bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Creative Graphics &amp; Manifestos</span>
            </button>

            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === "photos"
                  ? "bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Candidate Political Photoshoots</span>
            </button>

            <button
              onClick={() => setActiveTab("canopy")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                activeTab === "canopy"
                  ? "bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Canopies &amp; Prachar Umbrellas</span>
            </button>
          </div>
        </section>

        {/* Tab 1: Video Player Section */}
        {activeTab === "video" && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-[#161520] via-[#111019] to-[#09080e] border border-[#D4AF37]/35 p-6 sm:p-10 shadow-2xl">
              <div className="max-w-3xl mb-8 space-y-2">
                <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block">
                  Interactive Video Demonstration
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white">
                  Automated Missed-Call Voter Registration System
                </h2>
                <p className="text-sm text-white/75 font-sans leading-relaxed">
                  Watch our automated voter mobilization engine in action. Voters dial a single toll-free number, the call automatically disconnects after one ring, and within 3 seconds receives an automated candidate voice message, personalized WhatsApp thank you card, and local booth coordinator contact.
                </p>
              </div>

              {/* Video Player Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl max-w-4xl mx-auto group">
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src="/medien/ec-assets/miss-call-alert/miss-call-video.mp4"
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                </div>

                <div className="p-4 bg-[#14131c] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono text-white/80">
                      File: Miss Call Video.mp4 (High-Definition Campaign Reel)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="px-4 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#E6C665] text-black text-xs font-mono font-bold transition-colors"
                    >
                      {isPlaying ? "Pause Video" : "Play Video"}
                    </button>
                    <a
                      href="/medien/ec-assets/miss-call-alert/miss-call-video.mp4"
                      download
                      className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                    >
                      Download MP4
                    </a>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/[0.08]">
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 text-[#E6C665] flex items-center justify-center">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-white text-base">Instant Number Capture</h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Zero call charges to voters. Telephony server captures 100% of incoming caller IDs even on disconnected rings.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 text-[#E6C665] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-white text-base">Instant WhatsApp Trigger</h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Automated webhook delivers candidate greeting, digital manifesto PDF, and booth coordinator details.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/15 text-[#E6C665] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-white text-base">Booth Voter Registry</h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Caller data is mapped to pincodes and feeding the Central War Room for turnout tracking on voting day.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab 2: Creative Graphics */}
        {activeTab === "graphics" && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
                Election Collateral Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Manifestos, Hoardings &amp; Campaign Graphics
              </h2>
              <p className="text-xs text-white/60 font-mono mt-1">
                Click any graphic to enlarge in high resolution
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {GRAPHIC_POSTERS.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-[#16151e] border border-white/[0.1] hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer shadow-lg flex flex-col"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <div className="aspect-[3/4] w-full relative overflow-hidden bg-black/60">
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
                    <span className="text-[10px] font-mono text-[#E6C665] uppercase">
                      {item.tag}
                    </span>
                    <h4 className="text-sm font-serif text-white font-medium group-hover:text-[#E6C665] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 3: Political Photoshoots */}
        {activeTab === "photos" && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
                Executive Leadership Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Studio &amp; Political Candidate Photoshoots
              </h2>
              <p className="text-xs text-white/60 font-mono mt-1">
                Studio-lit, high-megapixal portraits designed for 40ft highway hoardings and manifesto covers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {CANDIDATE_PHOTOS.map((candidate, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-[#16151e] border border-white/[0.1] hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer shadow-lg flex flex-col"
                  onClick={() => setSelectedImage(candidate.url)}
                >
                  <div className="aspect-[4/5] w-full relative overflow-hidden bg-black/70">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={candidate.url}
                      alt={candidate.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/60 text-[#E6C665] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-1">
                    <span className="text-[10px] font-mono text-[#E6C665] uppercase">
                      {candidate.role}
                    </span>
                    <h4 className="text-base font-serif text-white font-medium group-hover:text-[#E6C665] transition-colors">
                      {candidate.name}
                    </h4>
                    <p className="text-xs text-white/60 font-sans">
                      {candidate.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 4: Canopies & Prachar Umbrellas */}
        {activeTab === "canopy" && (
          <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
                Field Collateral Deployments
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Prachar Umbrellas &amp; Ground Information Kiosks
              </h2>
              <p className="text-xs text-white/60 font-mono mt-1">
                Portable branded canopies established at high-traffic voter contact zones
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {FIELD_BRANDING.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-[#16151e] border border-white/[0.1] hover:border-[#D4AF37]/70 transition-all duration-300 cursor-pointer shadow-lg flex flex-col"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-black/60">
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
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* War Room Methodology */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
          <div className="mb-10">
            <span className="text-xs font-mono text-[#E6C665] uppercase tracking-widest block mb-2">
              Command Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white">
              How the RFP Digital War Room Operates 24/7
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#14131b] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C665]">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif text-white font-medium">Sentiment Scanning</h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Real-time tracking of Twitter, Facebook, local news, and WhatsApp gossip clusters across every assembly ward.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14131b] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C665]">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif text-white font-medium">15-Minute Rebuttal Desk</h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Immediate fact-check graphics, bite-sized video debunkers, and press statements ready before fake news spreads.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14131b] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C665]">
                <Send className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif text-white font-medium">WhatsApp Broadcast Cascades</h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Tiered distribution from central command to Shakti Kendra prabharies, booth adhyaksh, and panna pramukhs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14131b] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#E6C665]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif text-white font-medium">Election Commission Compliance</h4>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                All media passes pre-certification standards ensuring zero account bans and strict regulatory adherence.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Bar */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/ec/nukkad-natak"
              className="inline-flex items-center gap-2 text-sm font-mono text-white/70 hover:text-[#E6C665] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous: Pillar 03 (Nukkad Natak)</span>
            </Link>

            <Link
              href="/ec"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 text-[#F3E5AB] text-sm font-mono transition-colors"
            >
              <span>Back to EC Hub Main Portal</span>
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
              alt="Asset Preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
