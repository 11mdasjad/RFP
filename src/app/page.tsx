"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Fakten } from "@/components/Fakten";
import { Logos } from "@/components/Logos";
import { HomeProjectsSection } from "@/components/HomeProjectsSection";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { HomeCaseStudiesSection } from "@/components/HomeCaseStudiesSection";
import { Prozess } from "@/components/Prozess";
import { HomeTeamSection } from "@/components/HomeTeamSection";
import { FAQ } from "@/components/FAQ";
import { Kontakt } from "@/components/Kontakt";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/modals/VideoModal";
import { ProjectModal } from "@/components/modals/ProjectModal";
import { CLIENT_LOGOS, ProjectCard } from "@/data/imagineContent";

export default function Home() {
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoUrl?: string;
    title?: string;
    subtitle?: string;
  }>({
    isOpen: false,
    videoUrl: "",
    title: "",
    subtitle: "",
  });

  const [selectedProject, setSelectedProject] = useState<ProjectCard | null>(null);
  const [contactTopic, setContactTopic] = useState<string>("Corporate Films");

  const handleOpenVideo = (
    url = "https://www.youtube.com/watch?v=QvlClFaXJLc",
    title = "Showreel",
    subtitle = "RFP Digital Productions"
  ) => {
    setVideoModal({
      isOpen: true,
      videoUrl: url,
      title,
      subtitle,
    });
  };

  const handleCloseVideo = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  const handleOpenContactWithTopic = (topic?: string) => {
    if (topic) setContactTopic(topic);
    const el = document.getElementById("kontakt");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="home-page relative min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Persistent Navigation Header */}
      <Header
        onOpenContact={() => handleOpenContactWithTopic()}
      />

      {/* Main Page Flow - Ordered exactly according to the recommended hierarchy */}
      <div className="relative z-10">
        {/* 1. Short introduction and showreel */}
        <Hero
          onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)}
        />

        {/* 2. Key Verified Metrics & Credentials */}
        <Fakten />

        {/* 3. Client Logos Marquee */}
        <Logos
          titleEn="Esteemed Clients &amp; Institutions We Have Produced For"
          items={CLIENT_LOGOS}
        />

        {/* 4. Selected Projects with 2 Clear Entry Points: Films & Digital Media vs Election Campaigns */}
        <HomeProjectsSection
          onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenContactWithTopic={handleOpenContactWithTopic}
        />

        {/* 5. Services: Clear Deliverables, Typical Timelines, & Practical Scope */}
        <HomeServicesSection
          onOpenContactWithTopic={handleOpenContactWithTopic}
        />

        {/* 6. Case Studies (Institutional, NGO, Election) & Grounded Client Testimonials */}
        <HomeCaseStudiesSection
          onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)}
        />

        {/* 7. Production Process Workflow (Brief, Script, Shoot, Edit, Master) */}
        <Prozess
          onPlayVideo={(url, title, subtitle) => handleOpenVideo(url, title, subtitle)}
        />

        {/* 8. Team Introduction & Authentic Behind-the-Scenes Photographs */}
        <HomeTeamSection />

        {/* 9. Practical Buying FAQs (Timelines, Quotes, Revisions, Multilingual, Raw Footage) */}
        <FAQ />

        {/* 10. Direct Project Brief & Enquiry with 24h SLA */}
        <Kontakt prefilledTopic={contactTopic} />

        {/* 11. Footer with Verified Contacts, 156D Address, & ECI Model Code Compliance */}
        <Footer />
      </div>

      {/* Reusable Video Player Lightbox Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideo}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
        subtitle={videoModal.subtitle}
      />

      {/* Case Study Detail Modal for Selected Projects */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onWatchReel={(url, title) => handleOpenVideo(url, title, selectedProject?.title)}
      />
    </main>
  );
}
