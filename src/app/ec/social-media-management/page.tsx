"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Share2,
  Sparkles,
  PhoneCall,
  MessageSquare,
  Video,
  Layers,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Megaphone,
  Palette,
  Users,
  Target,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Clock,
  Radio
} from "lucide-react";

const STRATEGIC_MODULES = [
  {
    icon: Video,
    title: "Profile Documentary Films",
    tagline: "EMOTIONAL CANDIDATE STORYTELLING",
    desc: "Cinematic biographical documentaries highlighting the candidate's grassroots struggle, public service record, and visionary roadmap to forge deep voter empathy."
  },
  {
    icon: Megaphone,
    title: "High-Tech Social Media Campaigns",
    tagline: "ALGORITHMIC VIRALITY & REELS",
    desc: "Daily high-cadence short-form reels, speech highlights, sound-bite clips, and strategic hashtags engineered to dominate Instagram, YouTube Shorts, and Facebook feeds."
  },
  {
    icon: Radio,
    title: "On-Site War Room Set Up",
    tagline: "REAL-TIME CAMPAIGN COMMAND",
    desc: "24/7 centralized media command post monitoring breaking constituency news, opposition propaganda, and deploying immediate counter-narratives within minutes."
  },
  {
    icon: Palette,
    title: "Creative Design & Content Creation",
    tagline: "ENGAGING ELECTION COLLATERAL",
    desc: "Eye-catching manifesto infographics, daily motivational quote cards, rally posters, and WhatsApp broadcast templates tailored to local cultural touchpoints."
  },
  {
    icon: MessageSquare,
    title: "Bulk SMS / Automated Voice Calls",
    tagline: "DIRECT CONSTITUENCY BROADCAST",
    desc: "High-volume broadcast SMS, automated IVR phone calls delivering the candidate's personal voice message, and micro-targeted WhatsApp broadcast distribution."
  },
  {
    icon: Users,
    title: "Call Centre Support & Ground Activation",
    tagline: "VOTER ENGAGEMENT & FEEDBACK",
    desc: "Dedicated telephone outreach teams conducting voter sentiment polls, grievance registration, and syncing directly with grassroots Nukkad Natak roadshows."
  },
  {
    icon: Target,
    title: "Pin-Code & Demographic Targeting",
    tagline: "PRECISION META & GOOGLE ADS",
    desc: "Geo-fenced digital ad deployments targeted down to specific assembly wards, voter age brackets, and local issues to maximize every rupee of campaign spend."
  }
];

const PERFORMANCE_METRICS = [
  { label: "Monthly Voter Impressions", value: "25M+", subtext: "Across Meta, YouTube & X" },
  { label: "Shorts & Reels Produced", value: "5,000+", subtext: "High-cadence viral edits" },
  { label: "Speech Turnaround Time", value: "<2 Hours", subtext: "Rally to social broadcast" },
  { label: "Targeting Precision", value: "100%", subtext: "Ward & pin-code level" }
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Demographic & Sentiment Profiling",
    desc: "Mapping voter demographics, identifying top constituency grievances, and studying opposition narrative patterns across social channels."
  },
  {
    step: "02",
    title: "Daily Production & Creative Engine",
    desc: "On-ground camera crews capturing daily rallies, roadshows, and door-to-door visits with instant editing and motion typography hooks."
  },
  {
    step: "03",
    title: "Algorithmic Distribution & Paid Ads",
    desc: "Coordinated cross-platform publishing during peak voter engagement hours paired with hyper-targeted sponsored boosts."
  },
  {
    step: "04",
    title: "Real-Time War Room Feedback",
    desc: "Continuous comment moderation, live sentiment tracking, and agile strategy pivots to retain total narrative dominance."
  }
];

export default function SocialMediaManagementPage() {
  return (
    <div className="min-h-screen bg-[#0a090e] text-[#f4f2f7] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      {/* Global Header */}
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
            <span className="text-[#E6C665] font-semibold">Pillar 05: Social Media Management</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 border-b border-white/[0.08] overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-xs font-mono text-[#F3E5AB] mb-6">
              <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/25 text-[#E6C665] font-bold">
                PILLAR 05
              </span>
              <span className="text-[#E6C665]">✦</span>
              <span className="uppercase tracking-widest font-semibold text-[#E6C665]">
                Digital Narrative &amp; Virality Engine
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
                  Social Media &amp; Campaign Management
                </h1>
                <p className="text-xl sm:text-2xl font-serif italic text-[#E6C665]">
                  &ldquo;Your Message. Our Strategy. A Stronger Tomorrow.&rdquo;
                </p>
                <p className="text-base text-white/80 font-sans leading-relaxed max-w-2xl">
                  <strong>Har Matdata Tak Aapki Awaaz.</strong> In modern election warfare, elections are won where voters spend their attention. We build full-spectrum political social media machines that combine cinematic candidate documentaries, high-cadence viral reels, 24/7 war room counter-strikes, and micro-targeted voter pin-code advertising to turn digital engagement into ballot box victory.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions%2C%20I%20am%20interested%20in%20Social%20Media%20Management%20for%20our%20Election%20Campaign."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C665] text-black font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Consult War Room Desk</span>
                  </a>
                  <a
                    href="#master-poster"
                    className="px-6 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white font-medium text-sm hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all flex items-center gap-2"
                  >
                    <span>View Campaign Blueprint</span>
                    <ArrowRight className="w-4 h-4 text-[#E6C665]" />
                  </a>
                </div>
              </div>

              {/* Quick Metrics Pillar */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {PERFORMANCE_METRICS.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#121118] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors shadow-lg"
                  >
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#E6C665] block mb-1">
                      {metric.value}
                    </span>
                    <span className="text-xs font-mono text-white/90 block mb-1">
                      {metric.label}
                    </span>
                    <span className="text-[11px] text-white/50 block">
                      {metric.subtext}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grand Visual Poster Showcase */}
        <section id="master-poster" className="site-container py-12 sm:py-16 border-b border-white/[0.08]">
          <div className="mb-8">
            <div className="text-xs font-mono text-[#E6C665] uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E6C665]" />
              <span>Official Media Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
              Social Media &amp; Political Outreach Blueprint
            </h2>
            <p className="text-sm text-white/60 font-sans mt-1">
              Creative Campaigns • Digital Reach • Real Engagement • Visible Results
            </p>
          </div>

          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-[#D4AF37]/35 shadow-2xl">
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/medien/landing/social-media-and-management-poster.jpg"
                alt="Social Media and Management - Your Message. Our Strategy. A Stronger Tomorrow."
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* 7 Strategic Capabilities */}
        <section className="site-container py-16 border-b border-white/[0.08]">
          <div className="mb-12">
            <div className="text-xs font-mono text-[#E6C665] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E6C665]" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
              Everything in Our Digital Campaign Engine
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRATEGIC_MODULES.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#121118] border border-white/[0.08] hover:border-[#D4AF37]/50 hover:bg-[#181622] transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] text-[#F3E5AB] border border-[#D4AF37]/25 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#E6C665] uppercase tracking-wider block mb-1">
                        {module.tagline}
                      </span>
                      <h3 className="text-lg sm:text-xl font-serif text-white font-medium group-hover:text-[#F3E5AB] transition-colors">
                        {module.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                      {module.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-[#E6C665]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E6C665]" />
                    <span>Included in Turnkey Package</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4-Stage Execution Blueprint */}
        <section className="site-container py-16 border-b border-white/[0.08]">
          <div className="mb-12">
            <div className="text-xs font-mono text-[#E6C665] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E6C665]" />
              <span>Operational Playbook</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
              From Posts to Progress: 4-Stage Campaign Cycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121118] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-colors shadow-lg relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#E6C665] px-3 py-1 rounded-full bg-white/[0.04] border border-[#D4AF37]/25 inline-block mb-4">
                    STAGE {step.step}
                  </span>
                  <h3 className="text-lg font-serif text-white mb-2 font-medium">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Direct War Room Helpline CTA */}
        <section className="site-container py-16">
          <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-[#171622] via-[#12111a] to-[#0d0c14] border border-[#D4AF37]/35 shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665] block">
                  Turnkey Election Management &bull; ECI Compliant
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif text-white font-medium">
                  Mobilize Your Social Media Command Center Today
                </h2>
                <p className="text-sm sm:text-base text-white/80 font-sans max-w-2xl leading-relaxed">
                  Call or WhatsApp our election campaign war room desk for customized constituency pricing, sample viral reels, and rapid-deployment on-site setup.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-white/75">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#E6C665]" />
                    <span>+91 9711791403, 9599099320</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#E6C665]" />
                    <span>info@rfpdigital.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E6C665]" />
                    <span>156D, Sarai Julena (NFC), New Delhi – 110025</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions%2C%20we%20want%20to%20deploy%20Social%20Media%20Management%20for%20our%20campaign."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E6C665] text-black font-semibold text-center text-sm hover:brightness-110 transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Call / WhatsApp War Room</span>
                </a>
                <Link
                  href="/ec"
                  className="w-full py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white font-medium text-center text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4 text-[#E6C665]" />
                  <span>Back to EC Hub</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
